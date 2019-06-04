<template>
  <div>
    <el-row class="mycardh">
      <el-col :lg="12" :md="24" class="mycard">
        <el-card class="text-left mycard">
          <div slot="header">
            <span>代币信息</span>
          </div>
          <el-row v-for="(item, index) in tokeninfo" :key="index" class="pd-1">
            <el-col :span="12">{{item.label}}：</el-col>
            <el-col :span="12">
              <!--  价格 + eth -->
              {{item.other?'￥':''}}{{item.value}}
              <span v-if="item.other">{{item.other.label}}  {{item.other.value}}</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :lg="12" :md="24" class="mycard">
        <el-card class="text-left mycard">
          <div slot="header">
            <span>合约信息</span>
          </div>
          <el-row v-for="(item, index) in contract" :key="index" class="pd-1">
            <el-col :span="12">{{item.label}}：</el-col>
            <el-col :span="12" class="cell-text-ellipsis">
              <!--  价格 + eth -->
              {{item.value}}
              <span v-if="item.other">{{item.other.label}}  {{item.other.value}}</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="转账情况" name="transfers">
        <Transfers/>
      </el-tab-pane>
      <el-tab-pane label="持仓情况" name="holders"></el-tab-pane>
    </el-tabs>
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
      activeName: 'transfers',
      tokeninfo: {
        price: {
          label: '价格',
          value: 0,
          other: {
            label: '@',
            value: 0,
            unit: 'ETH'
          }
        },
        value: {
          label: '总供应量',
          value: 0,
          unit: 'BCAT'
        },
        market: {
          label: 'value',
          value: 0
        },
        holders: {
          label: '持币地址',
          value: 0,
          unit: '个'
        },
        transfers: {
          label: '转账总数',
          value: 0
        },
        tokenDecimal: {
          label: '小数位',
          value: 18
        }
      },
      contract: {
        address: {
          label: '合约地址',
          value: '0xfdeaa4ab9fea519afd74df2257a21e5bca0dfd3f'
        },
        authAddress: {
          label: '创建者地址',
          value: '0x1f759fae44ca006a496434908b009820afea0a90'
        },
        balance: {
          label: '合约账户余额',
          value: '',
          other: {
            label: '￥',
            value: 0
          }
        }
      }
    }
  }
}
</script>
<style>
.mycard{
  height: 100%;
  padding: 5px;
}
.mycardh{
  height: 418px;
  margin-bottom: 15px;
}
@media screen and (max-width: 1200px) {
  .mycardh{
    height: auto;
    margin-bottom: 15px;
  }
  .page-container{
    width: auto;
    margin: 20px auto 0 auto;
  }
}
@media screen and (max-width: 1200px) {
  .page-container{
    width: 1200px;
    margin: 20px auto 0 auto;
  }
}
</style>
