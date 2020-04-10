<template>
  <button
    class="jy-buttom"
    :disabled="disabled"
    :class="[
      type ? 'jy-buttom--type__' + type : '',
      size ? 'jy-buttom--size__' + size : '',
      round ? 'jy-buttom--round' : '',
      circle ? 'jy-buttom--circle' : '',
      disabled ? 'jy-buttom--disabled' : '',
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
    },
    size: {
      default: '',
      type: String,
      desc: "尺寸：可选参数 ———— small | base(或者不填) | medium | large"
    },
    type: {
      default: '',
      type: String,
      desc: "类型：可选参数 ———— 或者不填 | primary | success | info | warning | danger"
    },
    round: {
      default: false,
      type: Boolean,
      desc: "是否圆角： 可选参数 ———— true | false"
    },
    circle: {
      default: false,
      type: Boolean,
      desc: "是否圆型： 可选参数 ———— true | false"
    },
    disabled: {
      default: false,
      type: Boolean,
      desc: "禁用状态： 可选参数 ———— true | false"
    }
  }
})
export default class Buttom extends Vue {
}
</script>

<style lang="scss">
  @import './button';
</style>
