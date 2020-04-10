<template>
  <div class="home">
    <ul class="wrapper">
      <li>
        <JyButtom></JyButtom>
      </li>

      <li>
        <JyPanel>
          <div slot="body">
            <p>今天天气真好 !</p>
          </div>
        </JyPanel>
      </li>

      <li>
        <JyBreadcrumb
          :options="[
            {title: '首页', active: true, to: 'www.baidu.com'},
            {title: '活动', active: true, to: 'www.taobao.com'},
            {title: '活动详情', active: false, to: 'www.tencent.com'}
          ]"
          separator="|"
        ></JyBreadcrumb>
      </li>

      <li>
        <JyBadge :value="20" >回复数</JyBadge>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import JyButtom from '@/components/button/index'
import JyPanel from '@/components/panel/index'
import JyBreadcrumb from '@/components/breadcrumb/index'
import JyBadge from '@/components/badge/index'

@Component({
  components: {
    JyButtom,
    JyPanel,
    JyBreadcrumb,
    JyBadge
  }
})
export default class Home extends Vue{
}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: flex-start;
    justify-items: center;
    flex-wrap: wrap;
    padding: 10px 0;
    margin: 0;

    li {
      margin-left: 20px;
      list-style-type: none;
    }
  }
</style>
