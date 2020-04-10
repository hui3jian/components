<template>
  <div class="jy-breadcrumb">
    <div v-for="(item, key) in options" :key="key">
      <router-link v-if="item.active && item.to" :to="item.to" :target="target">
        <span :class="[item.active ? 'is-active' : '', 'jy-breadcrumb__title']">{{ item.title }}</span>
      </router-link>
      <span
        v-else
        :class="[item.active ? 'is-active' : '', 'jy-breadcrumb__title']"
      >{{ item.title }}</span>

      <span v-if="key !== (options.length - 1)" class="jy-breadcrumb__separator">
        <template v-if="!separatorClass">{{ separator }}</template>
        <i v-else :class="separatorClass"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "JyBreadcrumb",
  props: {
    options: {
      default: () => [],
      type: Array,
      desc:
        "数据类型： [{title: '首页', active: true}, {title: '活动', active: true}, {title: '活动详情', active: false}]"
    },
    separator: {
      default: "|",
      type: String
    },
    target: {
      default: "_self",
      type: String
    },
    separatorClass: {
      default: '',
      type: String
    }
  }
})
export default class Breadcrumb extends Vue {}
</script>

<style lang="scss">
@import "./breadcrumb";
</style>
