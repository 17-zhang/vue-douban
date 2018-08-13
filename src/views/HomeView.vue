<template>
  <!--首页-->
  <div class="home-view has-header">
    <!--次级nav栏-->
    <sub-nav mold="quickNav"></sub-nav>
    <!--文字列表-->
    <list mold="thumbnail" :items="events"></list>
    <!--无线加载-->
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapActions } from 'vuex'
  // vue-infinite-loading：无线滚动插件
  import InfiniteLoading from 'vue-infinite-loading'
  import SubNav from '../components/SubNav'
  import List from '../components/List'
  import Loading from '../components/Loading'

  export default {
    name: 'home-view',
    components: {
      SubNav,
      List,
      InfiniteLoading,
      Loading
    },
    data () {
      return {}
    },
    computed: {
      // 从store/modules/activities获取Vuex State
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
        events: state => state.activities.events
      })
    },
    methods: {
      // Using vue-infinite-loading
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      // Dispatching Actions
      ...mapActions([
        'loadMore'
      ])
    }
  }

</script>

<style lang="scss" scoped>
  .sub-nav {
    margin: 0 1.8rem;
    padding-top: 0.2rem;
  }
</style>
