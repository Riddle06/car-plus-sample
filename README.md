## 環境建置
 - 安裝 `Node.js` 環境  
    - 建議安裝 `Windows Installer.msi` 檔案，並且選擇 LTS 版本
    - [Node.js 連結網址](https://nodejs.org/dist/v10.13.0/node-v10.13.0-x64.msi)
 
 - 安裝 git 環境
    - [Git 連結網址](https://git-scm.com/download/win)

## 專案建置
- 前往 https://github.com/Riddle06/car-plus-sample 中將專案 clone 下來
```bash
git clone https://github.com/Riddle06/car-plus-sample.git
```

- 開啟終端機，並前往到該目錄下，指令如下
```bash
cd C:\{{專案路徑}}
```

- 下載專案相依套件，指令如下
```bash
npm init
```

- 啟動該應用程式，指令如下
```bash
npm start
```

- 在終端機看到 `server start on port: 8080` 後將瀏覽器打開 http://localhost:8080

- 如果這時候帶入 query string ， ex: http://localhost:8080?member-id=test-member-id 並會在結果頁看到以下結果

```json
{"queryString":{"member-id":"test-member-id"}}
```



