<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide :key="banner" v-for="banner of banners">
        <div class="flex-center">
          <img :src="banner" alt="failed">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import one from '@/assets/images/1.png'
import two from '@/assets/images/2.jpg'
import three from '@/assets/images/3.jpg'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      banners: [one, two, three],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 4rem;
  background-color: #ccc;
}
.flex-center {
  display: flex;
  justify-content: center;
}
</style>
