const exec = require("child_process").execSync;
const fs = require("fs");
const axios = require("axios");
const smartReplace = require("./smartReplace");
const download = require('download');
let resultPath = "./result.txt";
let JSPath = "./temp.js";
let outPutUrl = './';

// 公共变量
const Secrets = {
    JD_COOKIE: process.env.JD_COOKIE, //cokie,多个用&隔开即可
    SyncUrl: process.env.SYNCURL, //签到地址,方便随时变动
    PUSH_KEY: process.env.PUSH_KEY, //server酱推送消息
    BARK_PUSH: process.env.BARK_PUSH, //Bark推送
    TG_BOT_TOKEN: process.env.TG_BOT_TOKEN, //TGBot推送Token
    TG_USER_ID: process.env.TG_USER_ID, //TGBot推送成员ID
};
let CookieJDs = [];

async function changeFiele(content, cookie, k) {
    let newContent = await smartReplace.replaceWithSecrets(content, Secrets, cookie);
    await fs.writeFileSync("./execute" +  toString(k) + ".js", newContent, "utf8");
}
async function downFile () {
  let response = await axios.get(Secrets.SyncUrl);
  let content = response.data;
  await fs.writeFileSync(JSPath, content, "utf8");
}
async function executeOneByOne() {
    for (var i = 0; i < CookieJDs.length; i++) {
        await requireConfig();
        await downFile();
        let content = await fs.readFileSync(JSPath, 'utf8')
        console.log(`正在执行第${i + 1}个账号签到任务`);
        await changeFiele(content, CookieJDs[i], i);
        console.log("替换变量完毕");
        try {
            await exec("node `'./execute' +  toString(k) + '.js'`", { stdio: "inherit" });
        } catch (e) {
            console.log("执行异常:" + e);
        }
        console.log('运行完成后，删除下载的文件\n')
        await deleteFile(resultPath);//删除result.txt
        await deleteFile(JSPath);//删除JD_DailyBonus.js
        await deleteFile("execute.js");//删除JD_DailyBonus.js
        console.log("执行完毕");
    }
}
function requireConfig() {
  return new Promise(resolve => {
    const file = 'temp.js';
    fs.access(file, fs.constants.W_OK, (err) => {
      resultPath = err ? '/tmp/result.txt' : resultPath;
      JSPath = err ? '/tmp/temp.js' : JSPath;
      outPutUrl = err ? '/tmp/' : outPutUrl;
      resolve()
    });
  })
}
async function deleteFile(path) {
  // 查看文件result.txt是否存在,如果存在,先删除
  const fileExists = await fs.existsSync(path);
  // console.log('fileExists', fileExists);
  if (fileExists) {
    const unlinkRes = await fs.unlinkSync(path);
    // console.log('unlinkRes', unlinkRes)
  }
}
async function start() {
    console.log(`当前执行时间:${new Date().toString()}`);
    if (!Secrets.JD_COOKIE) {
        console.log("请填写 JD_COOKIE 后在继续");
        return;
    }
    if (!Secrets.SyncUrl) {
        console.log("请填写 SYNCURL 后在继续");
        return;
    }
    CookieJDs = Secrets.JD_COOKIE.split("&");
    console.log(`当前共${CookieJDs.length}个账号需要签到`);
    // 下载最新代码
    await downFile();
    console.log("下载代码完毕");
    await executeOneByOne();
    console.log("全部执行完毕");
}

start();
