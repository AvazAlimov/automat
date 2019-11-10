import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

const instance = firebase.initializeApp({
  apiKey: 'AIzaSyCVxNUE_hbEcaSWA6mJCj4ewB_j1V6DYCo',
  authDomain: 'automat-48812.firebaseapp.com',
  databaseURL: 'https://automat-48812.firebaseio.com',
  projectId: 'automat-48812',
  storageBucket: 'automat-48812.appspot.com',
  messagingSenderId: '661141962477',
  appId: '1:661141962477:web:74fb5d3d582ad24aeb16e4',
  measurementId: 'G-6317LCJHF7',
});

Vue.prototype.$db = instance.firestore();
