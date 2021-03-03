<template>
  <div>
    <p>icon:</p>
    <i class="vxe-icon--refresh roll"></i>
    <p>button:</p>
    <vxe-button status="primary" content="vxe-table-button"></vxe-button>
    <p>form: </p>
    <vxe-form :data="formData1" @submit="searchEvent" @reset="resetEvent">
      <vxe-form-item title="作者: " field="name" :item-render="{}">
        <template v-slot>
          <vxe-input v-model="formData1.name" placeholder="请输入作者" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="名句: " field="word" :item-render="{}">
        <template v-slot>
          <vxe-input v-model="formData1.word" placeholder="" clearable></vxe-input>
        </template>
      </vxe-form-item>
    </vxe-form>
    <p>table：</p>
    <vxe-table
      :align="allAlign"
      :data="tableData">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="age" title="Age"></vxe-table-column>
    </vxe-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formData1: {
        name: '',
        word: '且将新火试新茶'
      },
      allAlign: null,
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ]
    }
  },
  methods: {
    searchEvent () {
      console.log('submit')
    },
    resetEvent () {
      console.log('reset')
    }
  }
}
</script>
