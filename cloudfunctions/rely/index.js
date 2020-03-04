// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  if (event.Content == '1' || event.Content == '链接') {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'link',
      link: {
        title: '名称',
        description: '描述',
        url: 'http://xxx.com/xxx'
      }
    });
  } else if (event.Content == '') {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: '您好,很高兴为您服务。回复1获取链接　'
      }
    });
  }
  return {
    event,
    MsgType: 'transfer_customer_service',
    ToUserName: event.FromUserName,
    FromUserName: event.ToUserName,
    CreateTime: parseInt(+new Date / 1000),
  }
};