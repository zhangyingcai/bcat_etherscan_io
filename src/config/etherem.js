const config = {
  tokentxuri: 'https://api.etherscan.io/api?module=account&action=tokentx',
  contractaddress: '0xfDEAA4ab9fea519aFD74df2257A21e5BcA0DFd3f',
  apikey: 'K7T921SQKMBW35UTUIVI5YU2VJX76IUQSV',
  sort: 'asc',    // desc
  txlisturi: 'http://api.etherscan.io/api?module=account&action=txlist&',
  creatorAddress: '0x1F759FAE44ca006a496434908B009820afEa0A90',
  offset: 10,
  startTimestamp: 1531584000, // 2018-07-15 0:0:0
  tokenbalances: 'https://api.etherscan.io/api?module=account&action=tokentx'
}

export default config