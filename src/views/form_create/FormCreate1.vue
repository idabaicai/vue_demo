<template>
  <div class="form">
    <p>使用组件模式创建</p>
    <form-create
      v-model="fApi"
      :option="option"
      :rule="rule"
      :value.sync="value"
    ></form-create>
    <p>使用Vue原型创建</p>
    <div class="form2">
      <div id="form-create"></div>
    </div>
    <p>全局方法</p>
    <div id="form-create2"></div>
  </div>
</template>
<script>
window.formCreate.create(
  // rule
  [
    {
      type: 'input',
      field: 'good',
      title: 'movie'
    },
    {
      type: 'datePicker',
      field: 'create_at',
      title: 'create time'
    }
  ],
  {
    el: document.querySelector('#form-create2'),
    resetBtn: true,
    onSubmit (formData) {
      console.log(formData)
    }
  }
)
export default {
  data () {
    return {
      // 实例对象
      fApi: {},
      // 表单数据
      value: {},
      // 表单生成规则
      rule: [
        {
          type: 'input',
          field: 'goods_name',
          title: '商品名称'
        },
        {
          type: 'datePicker',
          field: 'create_at',
          title: '创建时间'
        }
      ],
      option: {
        // 表单提交事件
        onSubmit (formData) {
          console.log(JSON.stringify(formData))
        }
      },
      fApi2: {},
      model2: {}
    }
  },
  mounted () {
    const root = document.querySelector('#form-create')
    this.fApi2 = this.$formCreate(
      // rule
      [
        this.$formCreate.maker.input('名句：', 'word', '待到来年九月八，我花开时百花杀。'),
        this.$formCreate.maker.date('创建时间：', 'create_at')
      ],
      // 组件参数
      {
        el: root,
        onSubmit (formData, fApi2) {
          // fApi2.btn.loading()
          console.log(formData)
        }
      }
    )
  }
}
</script>
<style lang="less" scoped>
  .form {
    width: 50%;
    margin: 0 auto;
    /deep/ .el-button {
    background-color: pink;
    }
  }
</style>
