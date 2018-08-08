<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <list mold="thumbnail" :item="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapActions } from 'vuex'

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
      // 使用vue-infinite-loading插件
      onInfinite () {
        setTimeout(() => {
          this.loadMore()
          // setTimeout()事件触发后，自动触发infiniteLoading事件。
          // vm.$emit()：触发当前事件
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        }, 1000)
      },
      // 使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
      ...mapActions([
        'loadingMore'
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
