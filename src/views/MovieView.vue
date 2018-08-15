<template>
  <div class="movie-view has-header">
    <!--vue-scroll：实现上拉加载下拉刷新-->
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="movieTags"></scroller>
    <!--分类浏览-->
    <types></types>
    <!--下载APP-->
    <download-app></download-app>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroller from '../components/Scroller'
  import Types from '../components/Types'
  import DownloadApp from '../components/DownloadApp'
  import { mapState } from 'vuex'

  export default {
    name: 'movie-view',
    components: {
      Scroller,
      Types,
      DownloadApp
    },
    data () {
      return {

      }
    },
    computed: {
      // 从store/modules/movie中获取
      ...mapState({
        hotMovies: state => state.movie.hotMovies,
        topMovies: state => state.movie.topMovies,
        newMovies: state => state.movie.newMovies,
        movieTags: state => state.movie.movieTags
      })
    },
    methods: {
      getMovie: function () {
        // Dispatch getMovie
        this.$store.dispatch('getMovie')
      }
    },
    created () {
      // Getting movies data on created
      this.getMovie()
    }
  }
</script>

<style scoped>

</style>
