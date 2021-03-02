<template>
  <div>
    <Modal :visible.sync="visable" :btnText="btnText">
      <template v-slot:content>
          contents
      </template>
      <template v-slot:footer="slotScope">
        <button @click="close">{{ slotScope.btnText.text }}</button>
      </template>
    </Modal>
    <button @click="showModal">show</button>
  </div>
</template>
<script>
import Modal from '../components/codesandbox/modal/Modal.vue'
export default {
  data () {
    return {
      btnText: {
        id: 1,
        text: 'O---K'
      },
      visable: false
    }
  },
  methods: {
    showModal () {
      this.visable = true
    },
    close () {
      this.visable = false
    }
  },
  components: {
    Modal
  }
}
</script>
