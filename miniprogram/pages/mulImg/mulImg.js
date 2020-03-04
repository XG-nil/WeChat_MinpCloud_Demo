// miniprogram/pages/mulImg/mulImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
      { area: '中国', image: '../../images/banner1.jpg', checked: false },
      { area: '美国', image: '../../images/banner2.jpg', checked: false },
      { area: '英国', image: '../../images/banner3.jpg', checked: false },
    ],
    imageUrl: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.item[0].checked = true
    this.setData({
      item: this.data.item
    })
  },

  radioButtonTap(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    console.log(index)
    for (let i = 0; i < this.data.item.length; i++) {
      if (i == index) {
        //当前点击的位置为true即选中
        this.data.item[i].checked = true;
      }
      else {
        //其他的位置为false
        this.data.item[i].checked = false;
      }
    }
    this.setData({
      item: this.data.item,
      imageUrl: this.data.item[index].image
    })
  },
  onImagePreview() {
    wx.previewImage({
      urls: ['cloud://fabmockinterview-za83a.6661-fabmockinterview-za83a-1300844379/general/banner1.jpg']
    })
  }


  
})