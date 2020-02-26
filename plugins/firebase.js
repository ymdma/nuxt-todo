import firebase from 'firebase'
// firebaseの初期化に必要なパラメータをオブジェクト形式で用意
const config = {
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
  // 適時 APIキーなどを追記
}
// 二重の初期化を防ぐ条件分岐を挟む
// initializeAppメソッドを呼び出して初期化
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase