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
PUBGSHARECODES="fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096&f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e&5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736&c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678&6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb&bb7f4ae9-6aa9-4256-8948-7336423a6d4a@5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a&5629ed80-67e0-42e4-aef2-61775d78d096@e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86&e9f00efd-bf10-4867-b0f0-e3d1733eba7e@fd7cceb4-d367-43be-b890-b42359701736@f8e1e312-5055-44a3-b707-47965491a678@5e339ba9-ef73-462b-8473-c80a7d1f1ccb@c0da6fee-504b-4f25-bbdf-f0cda1b3757a@6f355bd8-e24a-4922-8c2c-649b9cfd8e86@bb7f4ae9-6aa9-4256-8948-7336423a6d4a&"
if (PUBGSHARECODES) {
  if (PUBGSHARECODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = PUBGSHARECODES.split('&');
  } else if (PUBGSHARECODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = PUBGSHARECODES.split('\n');
  } else {
    shareCodes = PUBGSHARECODES.split();
  }
} else if (PUBGSHARECODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
