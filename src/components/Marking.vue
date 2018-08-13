<template>
  <div class="marking">
    <slot name="movie"></slot>
    <slot name="book"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'marking',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .marking {
    display: flex;
    margin: 3rem 0;

    a {
      display: block;
      flex: 1;
      height: 3rem;
      margin-right: 1rem;
      line-height: 3rem;
      font-size: 1.5rem;
      text-align: center;
      color: #ffb712;
      border: 0.1rem solid #ffb712;
      border-radius: 0.3rem;
    }
  }
</style>
