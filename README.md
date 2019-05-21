# JOJO's Quiz Rangers
## 題目名稱：
JOJO's Quiz Rangers
## 一句話描述這個 project 在做什麼： 
做一個可以自行新增題目的答題遊戲
## 使用/操作方式：
#### 開啟程式
先到server.js中換成自己的mongodb URL
```
// set up your mongoDB URL
mongoose.connect([enter your mongodb URL], { useNewUrlParser: true });
```
接著開啟command line
```
$ cd [path to this file] && npm install && cd client && npm install
$ cd ..
$ npm start
```
#### 玩遊戲
* 一開始有內建題目，每次隨機十題，輸入姓名後按 **開始** 按鈕就可以直接玩
* 想出題的話就按 **出題** 按鈕，題目會進資料庫裡
* 玩完之後可以選擇要不要將此次遊戲結果加入排行榜


## 我的貢獻：
以MongoDB、Express、React、Node.js(MERN)和RESTful API建構整個網站，幾乎都是手刻的，除了css之外><
## 使用與參考之框架/模組/原始碼：
* MongoDB、Express、React、axios
* 排行榜的CSS：https://codepen.io/alexerlandsson/pen/mPWgpO?editors=0100
* 輸入欄的CSS：https://codepen.io/atunnecliffe/pen/gpKzQw?editors=1000
* 標題的CSS：https://codepen.io/nw/pen/jhKtk
* 按鈕1的CSS：https://codepen.io/0guzhan/pen/xJLKRo
* 按鈕2的CSS：https://codepen.io/oliviale/pen/vPvvyr?editors=0100
* 按鈕3的CSS：https://codepen.io/merkund/pen/EGpOEr

## 心得：
CSS真的好麻煩，就算抓了網路上的模組還是弄了好久，而且也還是好醜，好痛苦，希望以後能好好從頭學習CSS，變成CSS大師。這次也大概了解了整個網頁前後端是怎麼運作的，學到了好多東西。
未來希望能做成多人同時線上搶答遊戲，也希望能deploy到Heroku上面去～