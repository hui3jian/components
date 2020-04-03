<template>
  <div class="home">
    <JyButtom></JyButtom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import JyButtom from '@/components/button/index'

@Component({
  components: {
    JyButtom
  }
})
export default class Home extends Vue{
}
</script>
