export default {
  points: [
    {
      name: '郑州',
      coordinate: [0.48, 0.35],
      halo: {
        show: true,
      },
      icon: {
        src: '/img/icon.png',
        width: 30,
        height: 30
      },
      text: {
        show: false
      }
    },
    {
      name: '新乡',
      coordinate: [0.52, 0.23]
    },
    {
      name: '焦作',
      coordinate: [0.43, 0.29]
    },
    {
      name: '开封',
      coordinate: [0.59, 0.35]
    },
    {
      name: '许昌',
      coordinate: [0.53, 0.47]
    },
    {
      name: '平顶山',
      coordinate: [0.45, 0.54]
    },
    {
      name: '洛阳',
      coordinate: [0.36, 0.38]
    },
    {
      name: '周口',
      coordinate: [0.62, 0.55],
      halo: {
        show: true,
        color: '#8378ea'
      }
    },
    {
      name: '漯河',
      coordinate: [0.56, 0.56]
    },
    {
      name: '南阳',
      coordinate: [0.37, 0.66],
      halo: {
        show: true,
        color: '#37a2da'
      }
    },
    {
      name: '信阳',
      coordinate: [0.55, 0.81]
    },
    {
      name: '驻马店',
      coordinate: [0.55, 0.67]
    },
    {
      name: '济源',
      coordinate: [0.37, 0.29]
    },
    {
      name: '三门峡',
      coordinate: [0.20, 0.36]
    },
    {
      name: '商丘',
      coordinate: [0.76, 0.41]
    },
    {
      name: '鹤壁',
      coordinate: [0.59, 0.18]
    },
    {
      name: '濮阳',
      coordinate: [0.68, 0.17]
    },
    {
      name: '安阳',
      coordinate: [0.59, 0.10]
    }
  ],
  lines: [
    {
      source: '新乡',
      target: '郑州'
    },
    {
      source: '焦作',
      target: '郑州'
    },
    {
      source: '开封',
      target: '郑州'
    },
    {
      source: '周口',
      target: '郑州',
      color: '#fb7293',
      width: 2
    },
    {
      source: '南阳',
      target: '郑州',
      color: '#fb7293',
      width: 2
    },
    {
      source: '济源',
      target: '郑州'
    },
    {
      source: '三门峡',
      target: '郑州'
    },
    {
      source: '商丘',
      target: '郑州'
    },
    {
      source: '鹤壁',
      target: '郑州'
    },
    {
      source: '濮阳',
      target: '郑州'
    },
    {
      source: '安阳',
      target: '郑州'
    },
    {
      source: '许昌',
      target: '南阳',
      color: '#37a2da'
    },
    {
      source: '平顶山',
      target: '南阳',
      color: '#37a2da'
    },
    {
      source: '洛阳',
      target: '南阳',
      color: '#37a2da'
    },
    {
      source: '驻马店',
      target: '周口',
      color: '#8378ea'
    },
    {
      source: '信阳',
      target: '周口',
      color: '#8378ea'
    },
    {
      source: '漯河',
      target: '周口',
      color: '#8378ea'
    }
  ],
  icon: {
    show: true,
    src: '/img/icon.png',
  },
  text: {
    show: true,
  },
  k: 0.5,
  bgImgSrc: '/img/map.jpg'
}