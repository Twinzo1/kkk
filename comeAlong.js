const exec = require("child_process").execSync;
const fs = require("fs");
const axios = require("axios");
const smartReplace = require("./smartReplace");

// 公共变量
const Secrets = {
    JD_COOKIE: process.env.JD_COOKIE, //cokie,多个用&隔开即可
    SyncUrl: process.env.SYNCURL, //签到地址,方便随时变动
    PUSH_KEY: process.env.PUSH_KEY, //server酱推送消息
    BARK_PUSH: process.env.BARK_PUSH, //Bark推送
    TG_BOT_TOKEN: process.env.TG_BOT_TOKEN, //TGBot推送Token
    TG_USER_ID: process.env.TG_USER_ID, //TGBot推送成员ID
    MarketCoinToBeanCount: process.env.JDMarketCoinToBeans, //京小超蓝币兑换京豆数量
    JoyFeedCount: process.env.JDJoyFeedCount, //宠汪汪喂食数量
    FruitShareCodes: process.env.FruitShareCodes, //京东农场分享码
    PETSHARECODES: process.env.PETSHARECODES, //东东萌宠分享码
    PLANT_BEAN_SHARECODES: process.env.PLANT_BEAN_SHARECODES, //种豆分享码
    SUPERMARKET_SHARECODES: process.env.SUPERMARKET_SHARECODES, //京小超分享码
    DDFACTORY_SHARECODES: process.env.DDFACTORY_SHARECODES, //东东工厂分享码
    DREAM_FACTORY_SHARE_CODES: process.env.DREAM_FACTORY_SHARE_CODES, //京喜工厂分享码
    Unsubscribe: process.env.UNSUBSCRIBE, //取关商铺
    JXSTORY_SHARECODES: process.env.JXSTORY_SHARECODES, //京喜助力码

};

let CookieJDs = [];

async function downFile() {
    let response = await axios.get(Secrets.SyncUrl);
    let content = response.data;
    await fs.writeFileSync("./temp.js", content, "utf8");
}

async function changeFiele(content) {
    Secrets.JD_COOKIE = CookieJDs[i]
    Secrets.FruitShareCodes = process.env.FruitShareCodes
    Secrets.PETSHARECODES = process.env.PETSHARECODES
    Secrets.PLANT_BEAN_SHARECODES = process.env.PLANT_BEAN_SHARECODES
    Secrets.SUPERMARKET_SHARECODES = process.env.SUPERMARKET_SHARECODES
    Secrets.DDFACTORY_SHARECODES = process.env.DDFACTORY_SHARECODES
    Secrets.DREAM_FACTORY_SHARE_CODES = process.env.DREAM_FACTORY_SHARE_CODES
    Secrets.JXSTORY_SHARECODES = process.env.JXSTORY_SHARECODES
    
    let newContent = await smartReplace.replaceWithSecrets(content, Secrets);
    await fs.writeFileSync("./execute.js", newContent, "utf8");
}

async function executeOneByOne() {
    const content = await fs.readFileSync("./temp.js", "utf8");
    for (let i = 0; i < CookieJDs.length; i++) {
        console.log(`正在执行第${i + 1}个账号签到任务`);
        if(CookieJDs[i] === "") {
            break;
        }
        await changeFiele(content);
        console.log("替换变量完毕");
        try {
            await exec("node execute.js", { stdio: "inherit" });
        } catch (e) {
            console.log("执行异常:" + e);
        }
        console.log("执行完毕");
    }
}

async function start() {
    console.log(`当前执行时间:${new Date().toString()}`);
    if (! Secrets.JD_COOKIE) {
        console.log("请填写 JD_COOKIE 后在继续");
        return;
    }
    if (!Secrets.SyncUrl) {
        console.log("请填写 SYNCURL 后在继续");
        return;
    }
    CookieJDs = Secrets.JD_COOKIE.split("&");
    JFJDS = Secrets.FruitShareCodes.split("&");
    JPJDS = Secrets.PETSHARECODES.split("&");
    JBJDS = Secrets.PLANT_BEAN_SHARECODES.split("&");
    JSJDS = Secrets.SUPERMARKET_SHARECODES.split("&");
    JDFJDS = Secrets.DDFACTORY_SHARECODES.split("&");
    JXFJDS = Secrets.DREAM_FACTORY_SHARE_CODES.split("&");
    JXSJDS = Secrets.JXSTORY_SHARECODES.split("&");
    console.log(`当前共${CookieJDs.length}个账号需要签到`);
    // 下载最新代码
    await downFile();
    console.log("下载代码完毕");
    await executeOneByOne();
    console.log("全部执行完毕");
}

start();