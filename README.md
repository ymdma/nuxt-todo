# nuxt-todo


## What
Webブラウザ上で動作するシンプルなtodoアプリ。

    　機能　:
      タスクの表示・追加・削除、完了状態の管理のみ。

    使用方法:
      Topページより[todoを使用する]の文字をクリック。
      /todos にて、フォームにタスクを記入しaddボタンを押すことで登録することができ、登録日時にてソートして表示される。
      リスト左のチェックボックスにチェックを入れることでタスク完了となり、字消し線が引かれる。
      タスクを削除する場合はDELボタンを押すことでDBから削除される。


## How
Nuxt（SPAモード）を用いて制作。データベースはFirebaseを使用。
## Why
Vue.js 、Nuxt、 また、関連するライブラリや、Firebaseなどの学習ために制作。

#

## More!
  現状は基本構成のみの実装だが、追加機能や細かい調整を加えることでさらなる理解につなげたい。
#
## Next!

      野望として、「自分が使いたくて作りたい」と以前から思っていた、階層式（多次元式）のメモアプリを開発したいと思っています。

<br>

[![Image from Gyazo](https://i.gyazo.com/a2d8ec5edc3ceb19fd358b3692957e9d.png)](https://gyazo.com/a2d8ec5edc3ceb19fd358b3692957e9d)
#


___________________
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
