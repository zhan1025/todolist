<template>
<li>{{item}}<button
  @click="del"
  class="del_btn">删除</button></li>
</template>

<script>
export default {
  props: {
    item: String,
    index: Number,
    id: Number
  },
  methods: {
    del () {
      this.$emit('del', this.index, this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  li{
      width: 240px;
      position: relative;
      button {
          position: absolute;
          right: 0;
        }
    }
</style>
