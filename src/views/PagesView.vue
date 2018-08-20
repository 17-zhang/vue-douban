<template>
  <div class="pages-view">
    <!--@showTalion="open"：绑定Talion打开事件-->
    <header-bar @showTalion="open"></header-bar>
    <!--<router-view>:渲染路径匹配到的视图组件-->
    <router-view></router-view>
    <!--@closeTalion="close"：绑定Talion关闭事件-->
    <talion-view v-show="talion" @closeTalion="close"></talion-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from '../components/HeaderBar'
  import TalionView from '../views/TalionView'

  export default {
    name: 'pages-view',
    components: {
      HeaderBar,
      TalionView
    },
    data () {
      return {
        talion: ''
      }
    },
    methods: {
      /* 触发打开事件 */
      open: function () {
        this.talion = 'open'
      },
      /* 触发关闭事件 */
      close: function () {
        this.talion = ''
      }
    }
  }
</script>

<style scoped>

</style>
