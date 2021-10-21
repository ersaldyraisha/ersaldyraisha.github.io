import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import MasonryWall from '@yeger/vue-masonry-wall';
import App from './App.vue';
import router from './router';
import store from './store';

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

const app = createApp(App);
app.use(router);
app.use(store);
app.use(MasonryWall);
app.mount('#app');
