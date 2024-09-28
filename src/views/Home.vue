<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';

const cities = ref([
{ id: 1, name: '台北市/新北市', englishName: 'Taipei' },
{ id: 2, name: '桃園市', englishName: 'Taoyuan' },
{ id: 3, name: '台中市', englishName: 'Taichung' },
{ id: 4, name: '台南市', englishName: 'Tainan' },
{ id: 5, name: '高雄市', englishName: 'Kaohsiung' },
{ id: 6, name: '其他地區', englishName: 'Other' }
]);

const setLanguage = (lang: string) => {
console.log('語言切換為', lang);
};
</script>

<template>

<!-- <header class="navbar"> -->
    <!-- <div class="navbar-logo">
      <img src="../assets/images/logo.png" alt="Logo">
    </div>
    <nav class="navbar-links">
      <a href="#">時刻表</a>
      <a href="#">路線規劃</a>
      <a href="#">站點查詢</a>
      <a href="#">我的收藏</a>
    </nav>
    <div class="navbar-languages">
      <button @click="setLanguage('zh')">中文</button>
      <button @click="setLanguage('en')">English</button>
    </div> -->
    <Navbar/>
  <!-- </header> -->

  <!-- 主橫幅區域 -->
    <div class="banner-container">
      <!-- <h1>台灣公共汽車動態系統</h1>
      <h3>隨時掌握動態</h3> -->
      <!-- <img src="../assets/images/Taiwanbus.png" alt=""  class="w-full"> -->
    </div>

  <!-- 城市選擇區域 -->
  <section class="city-selection">
    <div v-for="city in cities" :key="city.id" class="city-card flex flex-col items-center p-5 cursor-pointer">
      <img :src="`../assets/images/${city.englishName}_bus.png`" alt="Bus Icon" class="justify-center">
      <h3>{{ city.name }}</h3>
      <p>{{ city.englishName }}</p>
    </div>
  </section>

  <!-- 頁尾 -->
  <footer class="footer">
    版權所有 © 2021 台灣公共汽車 All rights reserved.
  </footer>
</template>

<style lang="scss" scoped >

/* 導航欄樣式 */
.navbar {
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
padding: 15px 30px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-logo img {
height: 40px;
}

.navbar-links {
display: flex;
gap: 15px;
}

.navbar-links a {
text-decoration: none;
color: #333;
font-size: 16px;
transition: color 0.3s ease;
}

.navbar-links a:hover {
color: #007BFF;
}

.navbar-languages {
display: flex;
gap: 10px;
}

.navbar-languages button {
background-color: transparent;
border: none;
cursor: pointer;
font-size: 16px;
}

.navbar-languages button:hover {
color: #007BFF;
}

.banner-container{
width: 100%; /* 宽度占满父级容器 */
height: 30vw; /* 高度为视口高度的30%，根据需要调整 */
background-image: url('../assets/images/Taiwanbus.png');
background-size: cover; /* 图片覆盖整个容器 */
background-position: center; /* 图片居中显示 */
background-repeat: no-repeat;
}

.hero h1 {
font-size: 48px;
}

.hero h3 {
font-size: 24px;
}

/* 城市選擇樣式 */
.city-selection {
display: flex;
justify-content: space-around;
margin: 40px 0;
}

.city-card {
border: 1px solid #ddd;
border-radius: 8px;
width: 150px;
transition: transform 0.3s ease;
}

.city-card:hover {
transform: translateY(-5px);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.city-card img {
width: 50px;
height: 50px;
}

.city-card h3 {
margin-top: 10px;
font-size: 18px;
}

/* 頁尾樣式 */
.footer {
text-align: center;
padding: 20px;
background-color: #444444;
color: #FFFFFF;
}
</style>