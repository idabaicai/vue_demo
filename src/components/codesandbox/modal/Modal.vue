<template>
  <div class="modal" v-if="visible">
    <div class="mask">
      <div class="content">
        <div class="header">
          <h3>my modal</h3>
        </div>
        <div class="main">
          <slot name="content"></slot>
        </div>
        <div class="footer">
          <slot name="footer" :btnText="btnText">
            <button @click="close">ok</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
      reqired: true
    },
    btnText: {
      type: Object,
      reqired: true
    }
  },
  data () {
    return {
      // visible: true
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="less" scoped>
  .mask {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, .5);
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 200px;
    margin: 0 auto;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 10px;
  }
  button {
    padding: 8px 10px;
  }
</style>
