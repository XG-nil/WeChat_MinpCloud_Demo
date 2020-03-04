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
    inputValue: '', //点击结果项之后替换到文本框的值
    adapterSource: ["weixin", "wechat", "wandroid", "wAndroid", "wIOS", "wjava", "wjavascript", "w微信小程序", "w微信公众号", "w微信开发者工具"], //本地匹配源
    bindSource: [], //绑定到页面的数据，根据用户输入动态变化
    hideScroll: true,
    array: ['美国', '中国', '巴西', '日本'],
    major: '点击选择专业',
    region: '点击选择地区',
    midx:null,
    ridx:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindinput: function (e) {
    //用户实时输入值
    var prefix = e.detail.value
    //匹配的结果
    var newSource = []
    if (prefix != "") {
      // 对于数组array进行遍历，功能函数中的参数 `e`就是遍历时的数组元素值。
      this.data.adapterSource.forEach(function (e) {
        // 用户输入的字符串如果在数组中某个元素中出现，将该元素存到newSource中
        if (e.indexOf(prefix) != -1) {
          newSource.push(e)
        }
      })
    };
    // 如果匹配结果存在，那么将其返回，相反则返回空数组
    if (newSource.length != 0) {
      this.setData({
        // 匹配结果存在，显示自动联想词下拉列表
        hideScroll: false,
        bindSource: newSource,
        arrayHeight: newSource.length * 71
      })
    } else {
      this.setData({
        // 匹配无结果，不现实下拉列表
        hideScroll: true,
        bindSource: []
      })
    }
  },

  // 用户点击选择某个联想字符串时，获取该联想词，并清空提醒联想词数组
  itemtap: function (e) {
    this.setData({
      // .id在wxml中被赋值为{{item}}，即当前遍历的元素值
      inputValue: e.target.id,
      // 当用户选择某个联想词，隐藏下拉列表
      hideScroll: true,
      bindSource: []
    })
  },
  bindMajorChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      midx: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ridx: e.detail.value
    })
  },
})