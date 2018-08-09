<template lang="html">
  <div class="search-view has-header">
    <div class="search">
      <form id="search_form" onsubmit="return false">
        <input type="text" name="query" v-model.trim.lazy="queryStr" placeholder="搜索 书 / 影 / 音 / 标签">
        <a href="javascript:void(0);" @click="query()">搜索</a>
      </form>
    </div>
    <div v-if="queryStr" class="search-res">
      <group title="影视" :items="queryRes_movie">
        <a href="#" class="list-link" slot="more">查看更多影视结果</a>
      </group>
      <group title="图书" :items="queryRes_movie">
        <a href="#" class="list-link" slot="more">查看更多图书结果</a>
      </group>
      <group title="音乐" :items="queryRes_movie">
        <a href="#" class="list-link" slot="more">查看更多音乐结果</a>
      </group>
    </div>
  </div>
</template>

<script>
    export default {};
</script>

<style scoped>
</style>
