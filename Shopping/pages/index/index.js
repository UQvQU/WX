//index.js
const app = getApp();

Page({
  data:{
    imgUrls:[
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    indicatorDots:true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 800
  }
})