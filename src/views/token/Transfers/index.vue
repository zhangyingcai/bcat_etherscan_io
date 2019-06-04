<template>
  <div>
    <el-table :data="data" style="100%">
      <el-table-column
        prop="hash"
        label="交易hash">
        <template slot-scope="{row}">
          <span class="cell-text-ellipsis">{{ row.hash }}</span>
        </template>
        </el-table-column>
      <el-table-column
        prop="timeStamp"
        label="时间">
        <template slot-scope="{row}">
          <span>{{ row.timeStamp | formatTime }}</span>
        </template>
        </el-table-column>
      <el-table-column
        prop="from"
        label="发送方">
        <template slot-scope="{row}">
          <span class="cell-text-ellipsis">{{ row.from}}</span>
        </template>
        </el-table-column>
      <el-table-column
        prop="to"
        label="接收方">
        <template slot-scope="{row}">
          <span class="cell-text-ellipsis">{{ row.to}}</span>
        </template>
        </el-table-column>
      <el-table-column
        prop="value"
        label="数量">
        <template slot-scope="{row}">
          <span>{{ row.value | tokenValue(row.tokenDecimal)}}</span>
        </template>
        </el-table-column>
    </el-table>
    <Pagination :page.sync="page" :limit.sync="limit" @pagination="handleInfiniteOnLoad" />
  </div>
</template>
<script>
import reqwest from 'reqwest'
import config from '@/config/etherem'
import Pagination from '@/components/Pagination'

//  table 头部
const columns = [
  {
    title: '交易哈希',
    dataIndex: 'txhash'
  }
]
export default {
  filters: {
    tokenValue(value,tokenDecimal){
      return value / Math.pow(10, tokenDecimal)
    }
  },
  components: {
    Pagination
  },
  data () {
    return {
      data: [],
      loading: false,
      busy: false,
      page: 1,
      limit: config.offset
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
        url:  `${config.tokentxuri}&apikey=${config.apikey}&contractaddress=${config.contractaddress}&sort=${config.sort}&page=${this.page}&offset=${this.limit}`,
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
      this.loading = true
      this.fetchData((res) => {
        this.loading = false
        if (res.status == '1'){
          if (res.result.length == 0){
            this.busy = true
          }else{
            this.busy = false
          }
          this.data = res.result
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
.cell-text-ellipsis{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>