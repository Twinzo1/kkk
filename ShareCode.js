// 助力码辅助生成
class ShareCode {
  constructor(username, fruits, pet, plantBean) {
    this._username = username
    // 东东农场互助码
    this._fruits = fruits
    // 东东萌宠互助码
    this._pet = pet
    // 种豆得豆互助码
    this._plantBean = plantBean
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
}

const shareCodes = [
  new ShareCode('zzs02', 'eed8a50f50a2407ba483b7f74d88da7e', 'MTE1NDAxNzcwMDAwMDAwMzQ4MTExOTk=', 'e7lhibzb3zek2bijpx2qw5pyubuorephgjy2xay'),
  new ShareCode('zzs01', 'a138819f79b64f18bb1fe23a9aad9e7d', 'MTE1NDUyMjEwMDAwMDAwMzQ4MTEyMDM=', 'mlrdw3aw26j3wqvwhipdujmlyyuolj3zj5w7o2q'),
  new ShareCode('zyq_pop', '3c88e6a635c142f2bbee7a0cf17a754f', 'MTE1NDQ5OTIwMDAwMDAwMzQ4Mzg5MjE=', 'e7lhibzb3zek3t3clas5sv3753da6jcjtrn7uli'),
  new ShareCode('zzs00', '0792756107fc43d590b88b7d54796ee9', 'MTE1NDQ5OTIwMDAwMDAwMzU2MTkxMDM=', 'olmijoxgmjutzdtn6e5a56ejiqwhhoajuqvw6xi'),
  new ShareCode('zjd_smj', '12f465d77ecf472aad1d1bb2e5222a98', 'MTE1NDAxNzYwMDAwMDAwMzU2MjA3NDU=', '7yl36dz5bllgvdh6hl5wm5dnpm'),
  new ShareCode('mom', 'd57715ac11754598b1f9c5f6b338ce32', 'MTE1NDQ5OTUwMDAwMDAwMzU3NTA2ODM=', '7oivz2mjbmnx4rrbzsohjhlh7u2tqs6aiczw5wi'),
  new ShareCode('zlm_mj', 'e72776d09bd4486c9b66fbd026da9de1', 'MTE1NDQ5OTUwMDAwMDAwMzYxNjE4Njk=', 'mlrdw3aw26j3wcc4ffutd4lwtcclbeq5m2e3oja'),
  new ShareCode('zjn_nj', '3cb84ada5543426a9e43174702e60e1e', 'MTE1NDQ5MzYwMDAwMDAwMzYxNzg5MzU=', 'xyymddxmc3bvyic5w4vf2zc6s4')
  //new ShareCode('zzs01_sp', '92b52ddf32ab43518385ed91af85df67', 'MTE1NDQ5MzYwMDAwMDAwMzY4NzEzNDk=', 'rtsljotwy2w355db24a6xczcpk7diaxabfbjnti'),
  //new ShareCode('mom_sp', 'a456328f53274168a5a848ebb55923d6', 'MTE1NDAxNzYwMDAwMDAwMzY5MDQ2MzU=', 'l4ex6vx6yynoufeuqqdireyxbs7rlfvccq23vwi')
]

module.exports = {
  ShareCode,
  shareCodes
}