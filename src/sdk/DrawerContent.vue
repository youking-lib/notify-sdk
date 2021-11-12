<template>
  <a-button @click="onClose">测试点击</a-button>
</template>

<script>
import { Button } from 'ant-design-vue';
export default {
  components: {
    Button
  },
  methods: {
    onClose () {
      this.$emit('close');
    }
  }
}
</script>

<style>

</style>