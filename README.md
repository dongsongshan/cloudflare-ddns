## cloudflare ddns

### 动态的修改域名ip

### 需要提供的东西
需要把.env-sample这个文件改成.env

```
cp .env-sample .env
```
然后提供下面两项

- cloudflare token
- 域名

### 每5分钟自动执行一次

```
crontab -e
```

```
分 时 天 月 周
*/5 * * * * node /path/to/cloudflare-ddns/index.mjs
```

```
*/5 * * * * /bin/bash -lc 'cd /home/ubuntu/cloudflare-ddns && echo "==== $(date -Is) ====" && /usr/bin/node index.mjs' >> /home/ubuntu/cloudflare-ddns/cron.log 2>&1
```
