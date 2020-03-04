var wayIndex = -1;
var school_area = '';
var grade = '';
// 当联想词数量较多，使列表高度超过340rpx，那设置style的height属性为340rpx，小于340rpx的不设置height，由联想词列表自身填充
// 结合上面wxml的<scroll-view>
var arrayHeight = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    position: '',
    major: ['major1','major2','major3'],
    school: ['school1', 'school2', 'school3'],
    company: ['company1', 'company2', 'company3'],
    midx: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindPositonChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      midx: e.detail.value
    })
  },
})