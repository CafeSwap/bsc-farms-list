import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAKE',
  },

  // CAFE DEX LPS : START

  {
    pid: 14,
    lpSymbol: 'BREW-BNB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x4D1f8F8E579096097809D439d6707f2F5870652A',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAFE',
  },
  {
    pid: 15,
    lpSymbol: 'BREW-BUSD CAFE LP',
    lpAddresses: {
      97: '',
      56: '0xfd2A5F04368a18D3bD4204d7dEb250b1710Bbc15',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    lp: 'CAFE',
  },
  {
    pid: 26,
    lpSymbol: 'XDITTO-BNB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x86e3662634a5c5857Ecf395189f64a98Ea5bb77C',
    },
    tokenSymbol: 'XDITTO',
    tokenAddresses: {
      97: '',
      56: '0xb0a1de764a033a76f28e821fbe402edbfee937db',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: true,
    lp: 'CAFE',
  },

  {
    pid: 25,
    lpSymbol: 'MIST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1b429194D7deB9fCF6E4b2F201769751c08cf763',
    },
    tokenSymbol: 'MIST',
    tokenAddresses: {
      97: '',
      56: '0x68E374F856bF25468D365E539b700b648Bf94B67',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: true,
    lp: 'CAFE',
  },
  {
    pid: 24,
    lpSymbol: 'NAUT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3eba4240e14F9324A49D64409fD3696d47F3dA95',
    },
    tokenSymbol: 'NAUT',
    tokenAddresses: {
      97: '',
      56: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: true,
    lp: 'CAFE',
  },
  {
    pid: 16,
    lpSymbol: 'BREW-CAKE CAFE LP',
    lpAddresses: {
      97: '',
      56: '0xf20b42dE248D736FC19c0e4e30e9EfF432CC06ac',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAFE',
  },
  {
    pid: 17,
    lpSymbol: 'BREW-ETH CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x1a16e5B892f9f0F851A3c74bDc765855350347e5',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAFE',
  },
  {
    pid: 18,
    lpSymbol: 'BREW-DOT CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x059Fad611078750bC4a56093264A1d0457f85B91',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAFE',
  },
  {
    pid: 21,
    lpSymbol: 'BREW-ITAM CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x672345adf54909001EfB62A7b9D8C03eA2736A6A',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: true,
    lp: 'CAFE',
  },
  {
    pid: 20,
    lpSymbol: 'TWT-BNB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x4739eE46a7C0D149D0d8A1770c2Fa9979c35f8e3',
    },
    tokenSymbol: 'TWT',
    tokenAddresses: {
      97: '',
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAFE',
  },
  {
    pid: 23,
    lpSymbol: '3CS-BNB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0xFfE22616288488A509CE2f08D44691cd0C005581',
    },
    tokenSymbol: '3CS',
    tokenAddresses: {
      97: '',
      56: '0x1c7381f12e376bfa470bca6410ace8cb3f2454ae',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAFE',
    isCommunity: true,
  },
  {
    pid: 22,
    lpSymbol: 'ITAM-BNB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x25639aC4a9D898CDB35dEf5b8f63EE2C7fD75737',
    },
    tokenSymbol: 'ITAM',
    tokenAddresses: {
      97: '',
      56: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAFE',
    isCommunity: true,
  },

  {
    pid: 19,
    lpSymbol: 'BNB-BTCB CAFE LP',
    lpAddresses: {
      97: '',
      56: '0x0A6939b4665C51069e976e2ebD0FB3A3cac9dABA',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAFE',
  },
  
  // CAFE DEX LPS : END

  {
    pid: 1,
    lpSymbol: 'BREW-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x723203e821f1ff2d0e396d5dd2ea390f3c9d42cf',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAKE',
  },

  {
    pid: 2,
    lpSymbol: 'BREW-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1FD9Af4999De0d61c2a6CBD3d4892b675a082999',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    lp: 'CAKE',
  },

  {
    pid: 5,
    lpSymbol: 'BREW-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xfc4ad134129a7AF5e90673db18b2b067a5Ac9821',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAKE',
  },
  {
    pid: 10,
    lpSymbol: 'BREW-DOT LP',
    lpAddresses: {
      97: '',
      56: '0xf7d9acD09341877Ed299546B1Eb43c900A2b6323',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAKE',
  },
  {
    pid: 7,
    lpSymbol: 'BREW-FLP LP',
    lpAddresses: {
      97: '',
      56: '0x25bc28d49b3E3E162E6FDC1E38A8991Cf5c40F51',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: true,
    lp: 'CAKE',
  },
  {
    pid: 9,
    lpSymbol: 'BREW-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xe71867100e6b7cd8560C3fd2847ff3ab68cCdAD9',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
    lp: 'CAKE',
  },
  {
    pid: 13,
    lpSymbol: 'BREW-BANANA APE LP',
    lpAddresses: {
      97: '',
      56: '0x5514E0E1DA40A38E19d58e8B6E16226E16e183fA',
    },
    tokenSymbol: 'BREW',
    tokenAddresses: {
      97: '',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: !false,
    lp: 'APE',
  },
  {
    pid: 11,
    lpSymbol: 'DITTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x470BC451810B312BBb1256f96B0895D95eA659B1',
    },
    tokenSymbol: 'DITTO',
    tokenAddresses: {
      97: '',
      56: '0x233d91a0713155003fc4dce0afa871b508b3b715',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: true,
    lp: 'CAKE',
  },
  {
    pid: 12,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD',
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      97: '',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: true,
    lp: 'CAKE',
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    lp: 'CAKE',
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
    lp: 'CAKE',
  },

  {
    pid: 6,
    lpSymbol: 'BUSD-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
    lp: 'CAKE',
  },

  {
    pid: 8,
    lpSymbol: 'FLP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x07aaf8ae5c4511a9b512ea54e95a60298abc1b4d',
    },
    tokenSymbol: 'FLP',
    tokenAddresses: {
      97: '',
      56: '0x87ff96aba480f1813af5c780387d8de7cf7d8261',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCommunity: false,
    lp: 'CAKE',
  },
]

export default farms
