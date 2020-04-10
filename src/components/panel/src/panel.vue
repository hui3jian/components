<template>
  <div :class="[
      'jy-panel',
      shadow ? 'jy-panel--shadow' : '',
      border ? 'jy-panel--border' : '',
    ]">
    <div class="jy-panel__header">
      <span class="jy-panel__header__title">
        <slot name="title">{{ title }}</slot>
      </span>

      <span class="jy-panel__header__setting">
        <template v-if="setting">
          <i :class="['icon','iconfont', icon ? icon : 'icon-shezhi']"></i>
          <span>
            <slot name="setting">{{ settingLabel }}</slot>
          </span>
        </template>
      </span>
    </div>

    <div class="jy-panel__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "JyPanel",
  props: {
    title: {
      default: "标题",
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    icon: {
      default: "",
      type: String
    },
    shadow: {
      default: true,
      type: Boolean
    },
    setting: {
      default: true,
      type: Boolean
    },
    settingLabel: {
      default: "",
      type: String
    },
    size: {
      default: "",
      type: String,
      desc: "尺寸：可选参数 ———— small | base(或者不填) | medium | large"
    },
    type: {
      default: "danger",
      type: String,
      desc:
        "类型：可选参数 ———— 或者不填 | primary | success | info | warning | danger"
    },
    border: {
      default: false,
      type: Boolean
    }
  }
})
export default class Panel extends Vue {}
</script>

<style lang="scss">
@import "./panel";
</style>
