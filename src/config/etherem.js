const config = {
  tokentxuri: 'https://api.etherscan.io/api?module=account&action=tokentx',
  contractaddress: '0xfDEAA4ab9fea519aFD74df2257A21e5BcA0DFd3f',
  apikey: 'K7T921SQKMBW35UTUIVI5YU2VJX76IUQSV',
  sort: 'desc',    // desc
  txlisturi: 'http://api.etherscan.io/api?module=account&action=txlist&',
  creatorAddress: '0x1F759FAE44ca006a496434908B009820afEa0A90',
  offset: 10,
  startTimestamp: 1531584000, // 2018-07-15 0:0:0
  tokenbalances: 'https://api.etherscan.io/api?module=account&action=balancemulti',
  tokeninternal: 'https//api.etherscan.io/api?module=account&action=txlistinternal',
  // 获取当前合约的 token 数量
  tokenbalance:'https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xfDEAA4ab9fea519aFD74df2257A21e5BcA0DFd3f&apikey=K7T921SQKMBW35UTUIVI5YU2VJX76IUQSV'
}

export default config

// 根据 txhash 来查询交易信息 href="//api.etherscan.io/api?module=account&action=txlistinternal&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170&apikey=YourApiKeyToken"