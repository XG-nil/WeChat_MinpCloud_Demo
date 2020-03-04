// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text: null,
    category: [],
    banner: [],
    showDialog: false,
    queryResult: [],
    buttonImg: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.showLoading({
      title: '加载中...',
    })
    const db = this.db = wx.cloud.database()
    db.collection('person').where({
      _openid: app.globalData.openid
    }).get({
      success: res => {
        var arr = new Array()
        arr = res.data
        if (arr.length == 0) {
          this.db.collection('person').add({
            data: {

            }
          })
          this.toggleDialog()
        } else {
          const result = JSON.stringify(res.data, null, 2)
          this.setData({
            queryResult: JSON.parse(result)
          })
          if(this.data.queryResult[0].nickname == null) {
            this.toggleDialog()
          }
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
    db.collection('category')
    .get()
    .then(res => {
      const result = JSON.stringify(res.data, null, 2)
      this.setData({
        category: JSON.parse(result)
      })
      console.log(res.data)
    })
    db.collection('banner')
      .get()
      .then(res => {
        const result = JSON.stringify(res.data, null, 2)
        this.setData({
          banner: JSON.parse(result)
        })
        console.log(res.data)
        wx.hideLoading()
      })
  },

  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  clickBanner (e) {
    var banner = this.data.banner[e.currentTarget.dataset.index];
    wx.navigateTo({
      url: `../introduce/introduce?url=${banner.url}`
    })
  },
  clickItem(e) {
    console.log(e)
    var dataset = e.currentTarget.dataset
    if (dataset.type == "personality") {
      wx.navigateTo({
        url: `../personality/personality`
      })
    } else if (dataset.type == "dream_job") {
      wx.navigateTo({
        url: `../dream_job/dream_job`
      })
    } else if (dataset.type == "dream_com") {
      wx.navigateTo({
        url: `../dream_com/dream_com`
      })
    } else {
      wx.navigateTo({
        url: `../mulImg/mulImg`
      })
    }
  },
  maskWindowInput(e) {
    this.setData({
      text: e.detail.value
    })
  },

  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    })
  },
  maskWindowOk() {
    this.toggleDialog()
    app.globalData.userNickName = this.data.text
    this.db.collection('person').doc(this.data.queryResult[0]._id).update({
      // data 传入需要局部更新的数据
      data: {
        nickname: app.globalData.userNickName
      },
      success: function (res) {
        console.log('更新nickname成功')
      }
    })
  },
  maskWindowCancel() {
    this.toggleDialog()
  },

  onShareAppMessage() {
    return {
      title: "FAB超级面试",
      path: `/pages/index/index`
    }
  },

  onUnload (options) {
    console.log(options);
  },

  onHide (options) {
    console.log(options);
  }
})
