import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB7T_CdmTB-pfClkKP9EMxaWOiq6jM_D0k',
  authDomain: 'vue-http-demo-260cc.firebaseapp.com',
  databaseURL: 'https://vue-http-demo-260cc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vue-http-demo-260cc',
  storageBucket: 'vue-http-demo-260cc.appspot.com',
  messagingSenderId: '138422789762',
  appId: '1:138422789762:web:21131cedb77dc8d74a369b'
}

export const firebaseApp = initializeApp(firebaseConfig)
