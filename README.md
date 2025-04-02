## cloudflare ddns

### 动态的修改域名ip

```
crontab -e
```

```
分 时 天 月 周
*/5 * * * * node /path/to/cloudflare-ddns/index.mjs
```