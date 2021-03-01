<template>
  <div>
    <Modal :visible="visable" @onClose="close">
      <template v-slot:content>
          contents
      </template>
      <!-- <template v-slot:footer>
        <button @click="close">done</button>
      </template> -->
    </Modal>
    <button @click="showModal">show</button>
  </div>
</template>
<script>
import Modal from '../components/codesandbox/modal/Modal.vue'
export default {
  data () {
    return {
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
