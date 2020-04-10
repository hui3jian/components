<template>
  <div class="jy-badge">
    <slot></slot>
    <transition
      name="rubberBand"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <sup
        v-show="show"
        :class="[isDot ? 'jy-badge__dot' : '', 'jy-badge__box']"
        :style="{'background': color, 'color': textColor}"
      >
        {{ !isDot && content || ''}}
      </sup>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "JyBadge"
})
export default class Badge extends Vue {
  @Prop({ default: "" }) private value?: String | Number;
  @Prop({ default: 0 }) private max?: Number;
  @Prop({ default: false }) private isDot?: Boolean;
  @Prop({ default: true }) private show?: Boolean;
  @Prop({ default: "#f04048" }) private color?: String;
  @Prop({ default: "#ffffff" }) private textColor?: String;

  private get content(): number | undefined | null | String {
    if (this.isDot) return null;
    const value = this.value;
    const max = this.max;
    if (typeof value === 'number' && typeof max === 'number') {
      if (max) {
        return max < value ? `${max}+` : value;
      }
      return value
    }
  }
}
</script>

<style lang="scss">
@import "./badge";
</style>
