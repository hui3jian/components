<template>
  <i class="iconfont" :class="className"></i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  props: {
    className: {
      default: '',
      type: String
    }
  }
})

export default class Icon extends Vue {
}
</script>
