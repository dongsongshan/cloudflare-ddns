import Cddnss from 'cloudflare-ddns-sync'

//实例化
const cddnss = new Cddnss({
  token: '你自己的cloudflare网站的token',
});

// 获取本地ip
const localIp = await cddnss.getIp()

//获取解析的域名
const recordsOnline = await cddnss.getRecordDataForDomain('youdomain.com')



const oneRecordArr =  recordsOnline.filter(record=>{
  return record.name == 'youdomain.com' && record.type == 'A'
})

// dns解析的ip
const onlineIp = oneRecordArr[0].content

console.log('本地ip',localIp)
console.log('dns解析的ip',onlineIp)

if(localIp != onlineIp ){
  const myRecord = {
    name: "youdomain.com",
    type: "A",
    content: localIp
  }
  const result = await cddnss.syncRecord(myRecord)
}
