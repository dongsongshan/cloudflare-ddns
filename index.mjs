import Cddnss from 'cloudflare-ddns-sync'

const MY_TOKEN = progress.env.CLOUDFLARE_TOKEN;
const MY_DOMAIN = progress.env.DOMAIN;

//实例化
const cddnss = new Cddnss({
  token: MY_TOKEN,
});

// 获取本地ip
const localIp = await cddnss.getIp()

//获取解析的域名
const recordsOnline = await cddnss.getRecordDataForDomain(MY_DOMAIN)



const oneRecordArr =  recordsOnline.filter(record=>{
  return record.name == MY_DOMAIN && record.type == 'A'
})

// dns解析的ip
const onlineIp = oneRecordArr[0].content

console.log('本地ip',localIp)
console.log('dns解析的ip',onlineIp)

if(localIp != onlineIp ){
  const myRecord = {
    name: MY_DOMAIN,
    type: "A",
    content: localIp
  }
  const result = await cddnss.syncRecord(myRecord)
}
