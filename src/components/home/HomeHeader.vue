<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe685;</i></div>
    <div class="header-input"><i class="iconfont">&#xe67d;</i>输入景点/城市</div>
    <div class="header-right">城市<i class="iconfont iconsmall">&#xe688;</i></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "@styles/variables";
.iconfont {
  font-size: .4rem;
}
.iconsmall {
  font-size: .2rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: @mainColor;
  line-height: .86rem;
  text-align: center;
  .header-left {
    width: .64rem;
    padding: 0 .1rem;
  }
  .header-input {
    display: flex;
    align-items: center;
    padding-left: .1rem;
    border-radius: .1rem;
    background-color: #fff;
    flex: 1;
    height: .64rem;
    color: #ccc;
    text-align: left;
  }
  .header-right {
    width: 1.24rem;
  }
}
</style>
