// miniprogram/pages/personality/personality.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:0,
    questions: [],
    quesHidden: false,
    ques: {},
    ei:0,
    sn:0,
    tf:0,
    jp:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = this.db = wx.cloud.database()
    db.collection('mbti')
      .get()
      .then(res => {
        let result = JSON.stringify(res.data, null, 2)
        let obResult = JSON.parse(result)
        this.setData({
          questions: obResult[0].question,
          ques: obResult[0].question[0]
        })
      })
  },
  optionTap(e) {
    let option = e.currentTarget.dataset.option
    let type = this.data.ques.type
    let length = this.data.questions.length
    switch (option) {
      case 'A':
        this.data[type] += this.data.ques.coreA
        break
      case 'B':
        this.data[type] += this.data.ques.coreB
        break
      default:
        break
    }
    this.setData({
      ['this.data.ques.type']: this.data[type]
    })
    this.data.idx += 1
    var index = this.data.idx
    if (index < length) {
      console.log(index)
      console.log(length)
      this.setData({
        ques: this.data.questions[index]
      })
    } else {
      this.setData({
        quesHidden: true
      })
    }
    console.log(this.data)
  }
})