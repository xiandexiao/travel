<template>
  <swiper :options="swiperOption">
    <swiper-slide  v-for="links of linkArr" :key="links[0].id">
      <home-icons :links="links"></home-icons>
    </swiper-slide>
  </swiper>
</template>

<script>
import one from '@/assets/images/link-1.png'
import two from '@/assets/images/link-2.png'
import three from '@/assets/images/link-3.png'
import four from '@/assets/images/link-4.png'
import five from '@/assets/images/link-5.png'
import HomeIcons from './HomeIcons'
export default {
  name: 'HomeIconsSwiper',
  components: {
    HomeIcons
  },
  computed: {
    linkArr () {
      const res = []
      const temp = [...this.links]
      while (temp.length) {
        res.push(temp.splice(0, 5))
      }
      return res
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      links: [{
        id: 'link-1',
        name: '酒店',
        href: '/jiudian',
        src: one
      }, {
        id: 'link-2',
        name: '机票',
        href: '/jipiao',
        src: two
      }, {
        id: 'link-3',
        name: '火车票',
        href: '/huochepiao',
        src: three
      }, {
        id: 'link-4',
        name: '度假',
        href: '/dujia',
        src: four
      }, {
        id: 'link-5',
        name: '景点门票',
        href: '/jingdianmenpiao',
        src: five
      }, {
        id: 'link-6',
        name: '酒店',
        href: '/jiudian',
        src: one
      }, {
        id: 'link-7',
        name: '机票',
        href: '/jipiao',
        src: two
      }, {
        id: 'link-8',
        name: '火车票',
        href: '/huochepiao',
        src: three
      }, {
        id: 'link-9',
        name: '度假',
        href: '/dujia',
        src: four
      }, {
        id: 'link-10',
        name: '景点门票',
        href: '/jingdianmenpiao',
        src: five
      }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
