# Unnotech Frontend Engineer 徵才小專案
### _Book Lists Basic CRUD_
#### [Live Demo](https://boook-lists.vercel.app/books)
by [Vercel](https://vercel.com/)

##### Image
[Image Resource](https://www.flaticon.com/free-icons/robot) by Robot icons created by Freepik - Flaticon

##### Tech - ✨Magic ✨
- Vue-cli
- Vue3 建置模板
- Vue-router 基本路由配置
    * /books
    * /books/:bookId
- TailwindCss 美觀
- Pinia 做狀態管理
- Axios 抽象
- I18n 多語系
- Js-cookie

##### Features
- 基本CRUD 新增 / 修改 / 刪除 / 搜尋 BookLists data
- Book List Page 檢視頁
    * 供搜尋書名
    * 供新增書本導址-/books/add
    * 多語系可選中英-js-cookie存放
- Book Detail Page 內容頁
    * 返回導址-/books
    * 供搜尋書名、作者、備註
    * 編輯書本功能、新增功能耦合在同一頁上，並依照type(add、edit)去判斷頁面功能
- Loading Page
- 404 Router 攔截

## Installation
Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd unnotech-frontend-recruit
yarn install
yarn run serve
```
