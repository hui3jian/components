<template>
  <button
    class="jy-buttom"
    :class="[
      type ? 'jy-buttom--' + type : '',
      size ? 'jy-buttom--' + size : '',
    ]"
  >
    <!-- 加载中图标... -->
    <i v-if="loading" class="iconfont jy-loading"></i>

    <!-- 前置图标 -->
    <i :class="[icon, 'iconfont']" v-if="icon && !loading"></i>

    <span >
      <slot>{{ label }}</slot>
    </span>

    <!-- 后置图标 -->
    <i :class="[rearIcon, 'iconfont']" v-if="rearIcon && !loading"></i>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: "JyButtom",
  props: {
    label: {
      default: 'button',
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    icon: {
      default: '',
      type: String
    },
    rearIcon: {
      default: '',
      type: String,
      desc: "后置图标"
    }
  }
})
export default class Buttom extends Vue {
  private mounted() {
   console.log(this.$slots.default)
  }
}
</script>
