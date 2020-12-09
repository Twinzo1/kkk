/*
金榜年终奖互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PLANT_BEAN_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  '',//账号一的好友shareCode,不同好友中间用@符号隔开
  '',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东工厂互助码
HEALTHSHARECODES="P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w&P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI&P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU&P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo&P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE&P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw@P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg&P04z54XCjVUnoaW5n9QWT6vjy0Vx9w@P04z54XCjVUnoaW5m9cZ2T4ji5CxJae-cirQzI@P04z54XCjVUnoaW5m9cZ2X92S1PxM6DxCSEAUU@P04z54XCjVUnoaW5m9cZ2T42XlKnTXIhYe6ymo@P04z54XCjVUnoaW5m9cZ2b83ntIwcVRkvOWefE@P04z54XCjVUnoaW5n1MWSGnnStNkg@P04z54XCjVUnoaW5m9cZ2Xx3n8ZxxNgY9xEuZw&"
if (HEALTHSHARECODES) {
  if (HEALTHSHARECODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = HEALTHSHARECODES.split('&');
  } else if (HEALTHSHARECODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = HEALTHSHARECODES.split('\n');
  } else {
    shareCodes = HEALTHSHARECODES.split();
  }
} else if (HEALTHSHARECODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
