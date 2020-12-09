<template>
  <div class="icons-wrapper">
    <div class="icons-con">
      <a class="icons-link" v-for="link of linkArr" :href="link.href"  :key="link.id">
        <div class="icons-img-con">
          <img :src="link.src">
        </div>
        <span>{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  },
  name: 'HomeIcons',
  data () {
    return {
      linkArr: [...this.links]
    }
  }
}
</script>

<style lang="less" scoped>
@import "@styles/mixins";
.icons-wrapper {
  .icons-con {
    display: flex;
    .icons-link {
      width: 20%;
      text-align: center;
      margin: .14rem 0;
      color: #333;
      .icons-img-con {
        height: 0;
        width: 70%;
        padding-bottom: 70%;
        margin: 0 auto .1rem;
        img {
          width: 100%;
        }
      }
      span {
        font-size: .28rem;
        .text-ellipsis()
      }
    }
  }
}
</style>
