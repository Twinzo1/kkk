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
    DD_BOT_TOKEN: process.env.DD_BOT_TOKEN, //钉钉推送Token
    DD_BOT_SECRET: process.env.DD_BOT_SECRET, //钉钉推送SECRET
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
let JFJDS = [];
let JPJDS = [];
let JBJDS = [];
let JSJDS = [];
let JDFJDS = [];
let JXFJDS = [];
let JXSJDS = [];
async function downFile() {
    let response = await axios.get(Secrets.SyncUrl);
    let content = response.data;
    await fs.writeFileSync("./temp.js", content, "utf8");
}

async function changeFiele(content, cookie, num) {
    Secrets.JD_COOKIE = cookie;
    Secrets.FruitShareCodes = JFJDS[num];
    Secrets.PETSHARECODES = JPJDS[num];
    Secrets.PLANT_BEAN_SHARECODES = JBJDS[num];
    Secrets.SUPERMARKET_SHARECODES = JSJDS[num];
    Secrets.DDFACTORY_SHARECODES = JDFJDS[num];
    Secrets.DREAM_FACTORY_SHARE_CODES = JXFJDS[num];
    Secrets.JXSTORY_SHARECODES = JXSJDS[num];
    let newContent = await smartReplace.replaceWithSecrets(content, Secrets);
    await fs.writeFileSync("./execute" + num + ".js", newContent, "utf8");
}

async function executeOneByOne() {
    const content = await fs.readFileSync("./temp.js", "utf8");
    for (let i = 0; i < CookieJDs.length - 1; i++) {
        console.log(`正在执行第${i + 1}个账号签到任务`);
        if(CookieJDs[i] === "") {
            break;
        }
        await changeFiele(content, CookieJDs[i], i);
        console.log("替换变量完毕");
       // let newContent = await smartReplace.replaceWithSecrets(content, Secrets, `JD_COOKIE: ${CookieJDs[i]}`);
        try {
            await exec("node execute" + i + ".js &", { stdio: "inherit" });
        } catch (e) {
            console.log("执行异常:" + e);
        }
        console.log("执行完毕");
    }
    await changeFiele(content, CookieJDs[CookieJDs.length-1], "");
    await exec("node execute.js", { stdio: "inherit" });
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
    if (Secrets.FruitShareCodes) {JFJDS = Secrets.FruitShareCodes.split("&");}
    if (Secrets.PETSHARECODES) {JPJDS = Secrets.PETSHARECODES.split("&");}
    if (Secrets.PLANT_BEAN_SHARECODES) {JBJDS = Secrets.PLANT_BEAN_SHARECODES.split("&");}
    if (Secrets.SUPERMARKET_SHARECODES) {JSJDS = Secrets.SUPERMARKET_SHARECODES.split("&");}
    if (Secrets.DDFACTORY_SHARECODES) {JDFJDS = Secrets.DDFACTORY_SHARECODES.split("&");}
    if (Secrets.DREAM_FACTORY_SHARE_CODES) {JXFJDS = Secrets.DREAM_FACTORY_SHARE_CODES.split("&");}
    if (Secrets.JXSTORY_SHARECODES) {JXSJDS = Secrets.JXSTORY_SHARECODES.split("&");}
    console.log(`当前共${CookieJDs.length}个账号需要签到`);
    // 下载最新代码
    await downFile();
    console.log("下载代码完毕");
    function startTime(){
        let targetTimezone = -8 ; // 目标时区，东9区
        let _dif = new Date().getTimezoneOffset();   // 当前时区与中时区时差，以min为维度
        // 本地时区时间 + 时差  = 中时区时间
        // 目标时区时间 + 时差 = 中时区时间
        // 目标时区时间 = 本地时区时间 + 本地时区时差 - 目标时区时差
        let east8time = new Date().getTime() + _dif * 60 * 1000 - (targetTimezone * 60 * 60 * 1000) // 东8区时间
        let today=new Date(east8time);
        const start_run = new Date(new Date().toLocaleDateString());
        start_run.setTime(start_run.getTime() + 3600 * 1000 * 24 * 1);
        let wait_time = start_run - today;
        return wait_time;
    }
	
    function sleep(delay)
    {
        let start = new Date().getTime();
	    while (new Date().getTime() < start + delay);
    }
    let waiting_time = 0;
    if (`${Secrets.SyncUrl}`.search("jd_xtg") != -1) {
    	waiting_time = startTime()
    }

    if (waiting_time >= -120000 && waiting_time <= 300000) {
        console.log("检测到离零点只有不到五分钟，脚本将等待" + waiting_time / 1000 + "s，到零点再执行");
        sleep(waiting_time);
    } else {
	console.log("星推官等待时间过长，退出");
        return
    }
    
    await executeOneByOne();
    console.log("全部执行完毕");
}

start();
