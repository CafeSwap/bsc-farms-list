import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BREW',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0xc772955c33088a97D56d0BBf473d05267bC4feBB',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://cafeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0,
    totalReward: '0.25 $BREW/block',
    // rewardTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    rewardTokenAddress: {
      97: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    },
  },
  {
    sousId: 1,
    tokenName: 'PolkaDOT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x88976ea3f97FBc7894D694C102061016B1EAA4B6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://cafeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0004',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    poolFee: 1,
    totalReward: '250 DOT',
    rewardTokenAddress: {
      97: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    tokenBnbLpAdress: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  },
  {
    sousId: 9,
    tokenName: 'MIST',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '0x25a39B572b78cc3F338F31983B9eE3BD5fB052Cd',
      56: '0x25a39B572b78cc3F338F31983B9eE3BD5fB052Cd',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://mist.game/',
    harvest: true,
    tokenPerBlock: '0.1651',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.5,
    totalReward: 'NA',
    rewardTokenAddress: {
      97: '0x68E374F856bF25468D365E539b700b648Bf94B67',
      56: '0x68E374F856bF25468D365E539b700b648Bf94B67',
    },
    tokenBnbLpAdress: '0x1b429194D7deB9fCF6E4b2F201769751c08cf763',
  },
  {
    sousId: 8,
    tokenName: 'NAUT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '0x8d11bF6a0Bf4EF836cB68954B0586D440d38CF19',
      56: '0x8d11bF6a0Bf4EF836cB68954B0586D440d38CF19',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://astronaut.to/',
    harvest: true,
    tokenPerBlock: '0.009432',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 8,
    poolFee: 0.5,
    totalReward: 'NA',
    rewardTokenAddress: {
      97: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
      56: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
    },
    tokenBnbLpAdress: '0x3eba4240e14F9324A49D64409fD3696d47F3dA95',
  },

  {
    sousId: 7,
    tokenName: '3CS',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x5E4492D290ddd60AC1B266803c487702f1F2046e',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://cryptocricketclub.com/',
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.5,
    totalReward: 'NA',
    rewardTokenAddress: {
      97: '0x1c7381f12e376bfa470bca6410ace8cb3f2454ae',
      56: '0x1c7381f12e376bfa470bca6410ace8cb3f2454ae',
    },
    tokenBnbLpAdress: '0xFfE22616288488A509CE2f08D44691cd0C005581',
  },
  {
    sousId: 6,
    tokenName: 'ITAM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x289d61f67BdA596e0Eb23D95aA88dd60f17E1B24',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://itam.network/',
    harvest: true,
    tokenPerBlock: '0.5787',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.5,
    totalReward: 'NA',
    rewardTokenAddress: {
      97: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
      56: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
    },
    tokenBnbLpAdress: '0x25639aC4a9D898CDB35dEf5b8f63EE2C7fD75737',
  },

  {
    sousId: 5,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x7Fd188a57D71470ccFd0D987913b4c41c7Ba8046',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.027777777777777',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.5,
    totalReward: 'NA',
    rewardTokenAddress: {
      97: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    },
    tokenBnbLpAdress: '0x4739eE46a7C0D149D0d8A1770c2Fa9979c35f8e3',
  },
  {
    sousId: 2,
    tokenName: 'PolkaDOT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0xbb52c09ad7f9cE1620f0502516512B3Af71a7d2c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://cafeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0008',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.05,
    totalReward: '250 DOT',
    rewardTokenAddress: {
      97: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    tokenBnbLpAdress: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  },
  {
    sousId: 3,
    tokenName: 'DITTO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x539AE0034857Af9998ec6A4088e7744feFd5D140',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://ditto.money',
    harvest: true,
    tokenPerBlock: '0.017',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 9,
    poolFee: 0.05,
    totalReward: '15,000 DITTO',
    // rewardTokenAddress: '0x233d91a0713155003fc4dce0afa871b508b3b715',
    rewardTokenAddress: {
      97: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
  },
  {
    sousId: 4,
    tokenName: 'SALT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1',
    contractAddress: {
      97: '',
      56: '0x1EB0247a111Dc4F7d378aC7817EeEe3CB31D6082',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://www.saltswap.finance',
    harvest: true,
    tokenPerBlock: '0.0027333333333333',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    poolFee: 0.05,
    totalReward: '1968 SALT',
    // rewardTokenAddress: '0x233d91a0713155003fc4dce0afa871b508b3b715',
    rewardTokenAddress: {
      97: '0x2849b1ae7e04a3d9bc288673a92477cf63f28af4',
      56: '0x2849b1ae7e04a3d9bc288673a92477cf63f28af4',
    },
    tokenBnbLpAdress: '0x6284b49544c8900b4612f8450dce8d484e5c2631',
  },
]

export default pools
