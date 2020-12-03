// 助力码辅助生成
class ShareCode {
  constructor(username, fruits, pet, plantBean, ddfactory, jxfactory, jxstory) {
    this._username = username
    // 东东农场互助码
    this._fruits = fruits
    // 东东萌宠互助码
    this._pet = pet
    // 种豆得豆互助码
    this._plantBean = plantBean
    // 东东工厂互助码
    this._ddfactory = ddfactory
    // 京喜工厂互助码
    this._jxfactory = jxfactory
    // 京喜故事互助码
    this._jxstory = jxstory
  }

  get username() {
    return this._username
  }

  get fruits() {
    return this._fruits
  }

  get pet() {
    return this._pet
  }

  get plantBean() {
    return this._plantBean
  }
  
  get ddfactory() {
    return this._ddfactory
  }
  
  get jxfactory() {
    return this._jxfactory
  }
  
  get jxstory() {
    return this._jxstory
  }
}

const shareCodes = [
  new ShareCode('zzs02', 'eed8a50f50a2407ba483b7f74d88da7e', 'MTE1NDAxNzcwMDAwMDAwMzQ4MTExOTk=', 'e7lhibzb3zek2bijpx2qw5pyubuorephgjy2xay', 'P04z54XCjVWnYaS5m9cZ2T4ji5CxL44B8d0SVY', 'jDOS9NeUuGnLSvPvtfWJbg==', 'YISzQ_td7pBirhk9TvAuMVdavefo733lThPiLoG5kHk='),
  new ShareCode('zzs01', 'a138819f79b64f18bb1fe23a9aad9e7d', 'MTE1NDUyMjEwMDAwMDAwMzQ4MTEyMDM=', 'mlrdw3aw26j3wqvwhipdujmlyyuolj3zj5w7o2q', 'P04z54XCjVWnYaS5m9cZ2X92S1PxCfgS3Y3fsQ', '1H0pGy3pq4ojGrRSKHOiRg==', 'dyfusxBrtr_P0o1dgVPZWNnXYJ3nBuOf_p_hVKrFkZg='),
  new ShareCode('zyq_pop', '3c88e6a635c142f2bbee7a0cf17a754f', 'MTE1NDQ5OTIwMDAwMDAwMzQ4Mzg5MjE=', 'e7lhibzb3zek3t3clas5sv3753da6jcjtrn7uli', 'P04z54XCjVWnYaS5m9cZ2T42XlKnd3-qTib20U', 'U-YaqX2fqfzFbeZdhNLoBg==', 'AymlW6kFFyzwuQcEz8yZUqReI_35zgj7WmKK2vVw4qo='),
  new ShareCode('zzs00', '0792756107fc43d590b88b7d54796ee9', 'MTE1NDQ5OTIwMDAwMDAwMzU2MTkxMDM=', 'olmijoxgmjutzdtn6e5a56ejiqwhhoajuqvw6xi', 'P04z54XCjVWnYaS5m9cZ2b83ntIwZsFESd63WQ', '', '4X4wkVMHJXVJjL29A9XagbrQCHWe2YaJiuEIVwE3M1o='),
  new ShareCode('zjd_smj', '12f465d77ecf472aad1d1bb2e5222a98', 'MTE1NDAxNzYwMDAwMDAwMzU2MjA3NDU=', '7yl36dz5bllgvdh6hl5wm5dnpm', 'P04z54XCjVWnYaS5n1MWSGnnStNkg', '', 'Va-ok2ssxC22xhMwtw4OZ80gvs2RvCh04rkDFmR66p4='),
  new ShareCode('mom', 'd57715ac11754598b1f9c5f6b338ce32', 'MTE1NDQ5OTUwMDAwMDAwMzU3NTA2ODM=', '7oivz2mjbmnx4rrbzsohjhlh7u2tqs6aiczw5wi', 'P04z54XCjVWnYaS5m9cZzucpygY0q35UA0wzA', '', 'ZKtiBtpzb32Q0zauPu2Pi2KLk13Wk-KMaisQ0IDvnr8='),
  new ShareCode('zlm_mj', 'e72776d09bd4486c9b66fbd026da9de1', 'MTE1NDQ5OTUwMDAwMDAwMzYxNjE4Njk=', 'mlrdw3aw26j3wcc4ffutd4lwtcclbeq5m2e3oja', 'P04z54XCjVWnYaS5m9cZ2Xx3n8Zx4RSuFp9nJI', '', 'TjUuzR8AsLZVN7mPs7W-VzT2KPUrnleGB7Gv-p8iV1Y='),
  new ShareCode('zjn_nj', '3cb84ada5543426a9e43174702e60e1e', 'MTE1NDQ5MzYwMDAwMDAwMzYxNzg5MzU=', 'xyymddxmc3bvyic5w4vf2zc6s4', 'P04z54XCjVWnYaS5n9QWT6vjy0Vx1U', '', 'E5MdZrADuL8T5EX5uTyjtOUqJ7H9b-6rwW0fHOpJkDU=')
// new ShareCode('zzs01_sp', '92b52ddf32ab43518385ed91af85df67', 'MTE1NDQ5MzYwMDAwMDAwMzY4NzEzNDk=', 'rtsljotwy2w355db24a6xczcpk7diaxabfbjnti', 'P04z54XCjVWnYaS5m9cZwGBuiAN0VFdp6PBuw'),
// new ShareCode('mom_sp', 'a456328f53274168a5a848ebb55923d6', 'MTE1NDAxNzYwMDAwMDAwMzY5MDQ2MzU=', 'l4ex6vx6yynoufeuqqdireyxbs7rlfvccq23vwi', 'P04z54XCjVWnYaS5m9cZz26giUt_Mc8IaRuYQ')
 
]

module.exports = {
  ShareCode,
  shareCodes
}
