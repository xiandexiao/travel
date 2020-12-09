<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons-swiper></home-icons-swiper>
  </div>
</template>

<script>
import HomeHeader from '../components/home/HomeHeader.vue'
import HomeSwiper from '../components/home/HomeSwiper.vue'
import HomeIconsSwiper from '../components/home/HomeIconsSwiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconsSwiper
  }
}
</script>
