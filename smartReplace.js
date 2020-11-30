//https://github.com/sazs34/MyActions

const download = require("download");
async function replaceWithSecrets(content, Secrets) {
    if (!Secrets || !Secrets) return content;
    const replacements = [];
    await init_notify(Secrets, content, replacements);
        if (Secrets.JD_COOKIE && content.indexOf("require('./jdCookie.js')") > 0) {
            replacements.push({ key: "require('./jdCookie.js')", value: JSON.stringify(Secrets.JD_COOKIE.split("&")) });
        }
        if (Secrets.JD_COOKIE && content.indexOf('require("./jdCookie.js")') > 0) {
            replacements.push({ key: 'require("./jdCookie.js")', value: JSON.stringify(Secrets.JD_COOKIE.split("&")) });
        }
        if (Secrets.DETECT_URL) {
            replacements.push({ key: /url = \[\]/, value: "url = " + JSON.stringify(Secrets.DETECT_URL.split("\n")) });
            replacements.push({ key: /price = \[\]/, value: "price = " + JSON.stringify(Secrets.DETECT_PRICE.split("\n")) });
        }
        if (Secrets.COOKIE_DKYD) {
            replacements.push({ key: "$util.getdata(DUOKAN_COOKIE_KEY)", value: JSON.stringify(Secrets.COOKIE_DKYD.split("\n")[0]) });
            replacements.push({ key: "$util.getdata(DUOKAN_DEVICE_ID_KEY)", value: JSON.stringify(Secrets.COOKIE_DKYD.split("\n")[1]) });
        }
        if (Secrets.COOKIE_ELM) {
            replacements.push({ key: "sy.getdata(cookieKey)", value: JSON.stringify(Secrets.COOKIE_ELM) });
        }
        if (Secrets.JD_COOKIE && content.indexOf("京东赚赚") > 0) {
            replacements.push({ key: ', $.getdata("jdzz_token2") || "";', value: "" });
            replacements.push({ key: '$.getdata("jdzz_token1")', value: JSON.stringify(Secrets.JD_TOKEN) });
        }
        await downloader(content);//检查所需额外js
    return batchReplace(content, replacements);
}
function batchReplace(content, replacements) {
    for (var i = 0; i < replacements.length; i++) {
        content = content.replace(replacements[i].key, replacements[i].value);
    }
    return content;
}

async function init_notify(Secrets, content, replacements) {
    if (!Secrets.PUSH_KEY && !Secrets.BARK_PUSH && !Secrets.TG_BOT_TOKEN) {
        if (content.indexOf("require('./sendNotify')") > 0) {
            replacements.push({
                key: "require('./sendNotify')",
                value:
                    "{sendNotify:function(){},serverNotify:function(){},BarkNotify:function(){},tgBotNotify:function(){}}",
            });
        }
    }
}

async function download_notify() {
    await download("https://github.com/lxk0301/scripts/raw/master/sendNotify.js", "./", {
        filename: "sendNotify.js",
    });
    console.log("下载通知代码完毕");
}

module.exports = {
    replaceWithSecrets,
};
