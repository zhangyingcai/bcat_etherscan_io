<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="交易记录" key="1">
        <Transfers/>
      </a-tab-pane>
      <a-tab-pane tab="地址占有率" key=2></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Transfers from './Transfers/index'
export default {
  name: 'token',
  components: {
    Transfers
  },
  data() {
    return {

    }
  }
}
</script>