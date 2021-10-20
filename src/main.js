import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';

import './assets/scss/main.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyBt6FIAoWztpBmB2o0qDKXFJ20tV_IO4UE',
  authDomain: 'ersaldyraisha-portfolio.firebaseapp.com',
  databaseURL:
    'https://ersaldyraisha-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ersaldyraisha-portfolio',
  storageBucket: 'ersaldyraisha-portfolio.appspot.com',
  messagingSenderId: '253542296677',
  appId: '1:253542296677:web:94d9530000a6cce0b4aa8c',
  measurementId: 'G-3BW352BP5T',
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
