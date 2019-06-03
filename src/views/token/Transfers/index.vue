<template>
  <div
    class="demo-infinite-container"
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
  >
    <a-list
      :dataSource="data"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
        
        <div>Content</div>
      </a-list-item>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
    </a-list>
  </div>
</template>
<script>
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
import config from '@/config/etherem'
export default {
  directives: { infiniteScroll },
  data () {
    return {
      data: [],
      loading: false,
      busy: false,
      page: 1,
    }
  },
  beforeMount () {
    this.page = 1
    this.fetchData((res) => {
      if (res.status == '1'){
        this.data = this.data.concat(res.result)
      }else{
        this.$message.error(res.message)
      }
    })
  },
  methods: {
    fetchData (callback) {
      reqwest({
        // url: 'https://explorer-web.api.btc.com/v1/eth/tokentxns/0xfdeaa4ab9fea519afd74df2257a21e5bca0dfd3f?page=1&size=10',
        url:  `${config.tokentxuri}&apikey=${config.apikey}&contractaddress=${config.contractaddress}&sort=${config.sort}&page=${this.page}&offset=${config.offset}`,
        // type: 'json',
        method: 'get',
        contentType: 'text/html',
        crossOrigin: true,
        success: (res) => {
          console.log(res)
          callback(res)
        },
      })
    },
    handleInfiniteOnLoad  () {
      this.page += 1
      this.loading = true
      this.fetchData((res) => {
        this.loading = false
        if (res.status == '1'){
          if (res.result.length == 0){
            this.busy = true
          }else{
            this.busy = false
          }
          this.data = this.data.concat(res.result)
        }else{
          this.$message.error(res.message)
        }
      })
    },
  },
}
</script>
<style>
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: calc(100vh - 40px);
  /* max-height: 800px; */
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>