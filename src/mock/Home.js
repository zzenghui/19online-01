import Mock from 'mockjs'


//导航列表
let navList = [
    {
        id: 1,
        category: '酱香型白酒',
        children: [
            {
                id: 1,
                name: "茅台"
            },
            {
                id: 2,
                name: "国台酒"
            },
            {
                id: 3,
                name: "习酒"
            },
            {
                id: 4,
                name: "郎酒"
            },
            {
                id: 5,
                name: "荷花酒"
            },
            {
                id: 6,
                name: "钓鱼台"
            },
            {
                id: 7,
                name: "里氏家"
            },
            {
                id: 8,
                name: "斟酒"
            },
            {
                id: 9,
                name: "山门岗"
            },
            {
                id: 10,
                name: "其他酱酒"
            },
        ]
    },
    {
        id: 2,
        category: '浓香型白酒',
        children: [
            {
                id: 1,
                name: "五粮液"
            },
            {
                id: 2,
                name: "洋酒"
            },
            {
                id: 3,
                name: "泸州老窖"
            },
            {
                id: 4,
                name: "剑南春"
            },
            {
                id: 5,
                name: "水井坊"
            },
            {
                id: 6,
                name: "古井贡"
            },
            {
                id: 7,
                name: "文君酒"
            },
            {
                id: 8,
                name: "全兴大曲"
            },
            {
                id: 9,
                name: "其他浓香型"
            },

        ]
    },
    {
        id: 3,
        category: '其他香型白酒',
        children: [
            {
                id: 1,
                name: "汾酒"
            },
            {
                id: 2,
                name: "酒鬼酒"
            },
            {
                id: 3,
                name: "西凤酒"
            },
            {
                id: 4,
                name: "白云边"
            },
            {
                id: 5,
                name: "国密董酒"
            },
            {
                id: 6,
                name: "四特酒"
            },
            {
                id: 7,
                name: "口子窖"
            },
            {
                id: 8,
                name: "牛栏山"
            },
            {
                id: 9,
                name: "北京红星"
            },

        ]
    },
    {
        id: 4,
        category: '干邑白兰酒',
        children: [
            {
                id: 1,
                name: "轩尼诗"
            },
            {
                id: 2,
                name: "马爹利"
            },
            {
                id: 3,
                name: "人头马"
            },
            {
                id: 4,
                name: "拿破仑"
            },
            {
                id: 5,
                name: "卡莫"
            },
            {
                id: 6,
                name: "莫高"
            },
            {
                id: 7,
                name: "蒙特伯君"
            },
            {
                id: 8,
                name: "其他白兰地"
            },

        ]
    },
    {
        id: 5,
        category: '纯麦威士忌',
        children: [
            {
                id: 1,
                name: "麦卡伦"
            },
            {
                id: 2,
                name: "日本威士忌"
            },
            {
                id: 3,
                name: "格兰杰"
            },
            {
                id: 4,
                name: "百富"
            },
            {
                id: 5,
                name: "大摩"
            },
            {
                id: 6,
                name: "格兰菲迪"
            },
            {
                id: 7,
                name: "格兰威特"
            },
            {
                id: 8,
                name: "苏格登"
            },
            {
                id: 9,
                name: "布赫拉迪"
            },
            {
                id: 10,
                name: "其他纯表"
            },

        ]
    },
    {
        id: 6,
        category: '调颌形威士忌',
        children: [
            {
                id: 1,
                name: "尊尼获加"
            },
            {
                id: 2,
                name: "皇家礼炮"
            },
            {
                id: 3,
                name: "杰克丹尼"
            },
            {
                id: 4,
                name: "芝华士"
            },
            {
                id: 5,
                name: "百龄坛"
            },
            {
                id: 6,
                name: "其他威士忌"
            },
        ]
    },
    {
        id: 7,
        category: '红葡萄酒',
        children: [
            {
                id: 1,
                name: "奔富"
            },
            {
                id: 2,
                name: "法国"
            },
            {
                id: 3,
                name: "澳大利亚"
            },
            {
                id: 4,
                name: "智利"
            },
            {
                id: 5,
                name: "意大利"
            },
            {
                id: 6,
                name: "阿根廷"
            },
            {
                id: 7,
                name: "西班牙"
            },
            {
                id: 8,
                name: "美国"
            },
            {
                id: 9,
                name: "南非"
            },
        ]
    },
    {
        id: 8,
        category: '香槟气泡酒白葡萄酒',
        children: [
            {
                id: 1,
                name: "法国香槟"
            },
            {
                id: 2,
                name: "意大利起泡酒"
            },
            {
                id: 3,
                name: "其他起泡酒"
            },
            {
                id: 4,
                name: "白葡萄酒"
            },
        ]
    },
]
Mock.mock('/api/getNavList', 'get', function () {
    return navList
})

//轮播数据
let bannerList = [
    {
        id: 1,
        img: "../../public/static/images/banner/banner01.jpg"
    },
    {
        id: 2,
        img: "../../public/static/images/banner/banner02.jpg"
    },
    {
        id: 3,
        img: "../../public/static/images/banner/banner03.jpg"
    },
    {
        id: 4,
        img: "../../public/static/images/banner/banner04.jpg"
    },
    {
        id: 5,
        img: "../../public/static/images/banner/banner05.jpg"
    },

]

Mock.mock('/api/getBannerList', 'get', function () {
    return bannerList
})


//品牌种类
let category = [
    {
        id: 1,
        title: '品牌盛宴',
        imgs: [
            '../../public/static/images/cates/cate1.jpg',
            '../../public/static/images/cates/cate2.jpg',
            '../../public/static/images/cates/cate3.jpg',
            '../../public/static/images/cates/cate4.jpg',
            '../../public/static/images/cates/cate5.jpg',
            '../../public/static/images/cates/cate6.jpg',
        ]
    },
    {
        id: 2,
        title: "人群导购",
        imgs: [
            '../../public/static/images/cates/cate7.jpg',
            '../../public/static/images/cates/cate8.jpg',
            '../../public/static/images/cates/cate9.jpg',
            '../../public/static/images/cates/cate10.jpg',
            '../../public/static/images/cates/cate11.jpg',
            '../../public/static/images/cates/cate12.jpg',
        ]
    }
]
Mock.mock('/api/getcategory', 'get', function () {
    return category
})

//品牌清单
let cateDetail = [
    {
        id: 1,
        title: "热销爆款",
        children: [
            {
                id: 1,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥123",
                prePrice: "¥538"
            },
            {
                id: 2,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥456",
                prePrice: "¥538"
            },
            {
                id: 3,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥789",
                prePrice: "¥538"
            }
        ]
    },
    {
        id: 2,
        title: "超值单品",
        children: [
            {
                id: 1,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥13",
                prePrice: "¥538"
            },
            {
                id: 2,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥456",
                prePrice: "¥538"
            },
            {
                id: 3,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥789",
                prePrice: "¥538"
            }
        ]
    },
    {
        id: 3,
        title: "精选好货",
        children: [
            {
                id: 1,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥1311",
                prePrice: "¥5308"
            },
            {
                id: 2,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥456",
                prePrice: "¥538"
            },
            {
                id: 3,
                img: "../../public/static/images/cates/cateD1.jpg",
                name: "酒鬼传承52度",
                desc: "熟读经典,酒饮摘要",
                price: "¥789",
                prePrice: "¥538"
            }
        ]
    }
]

Mock.mock('/api/getcateD', 'get', function () {
    return cateDetail
})

//品类详情
let cateItemList = [
    {
        id: 1,
        title: "白酒馆",
        navList: ['茅台', '国泰', '西朗', '郎酒', '五粮液', '泸州老窖'],
        carousalList: [
            '../../public/static/images/banner/small1.jpg',
            '../../public/static/images/banner/small2.jpg',
            '../../public/static/images/banner/small3.jpg'
        ],
        goodsList: [
            {
                id: 1,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods1.jpg',
                price: "258"
            },
            {
                id: 2,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "152"
            },
            {
                id: 3,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "1212"
            },
            {
                id: 4,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods4.jpg',
                price: "4545"
            },
        ]
    },
    {
        id: 2,
        title: "洋酒馆",
        navList: ['轩尼诗', '马爹利', '人头马', ' 拿破仑', ' 卡慕', ' 墨高'],
        carousalList: [
            '../../public/static/images/banner/small1.jpg',
            '../../public/static/images/banner/small2.jpg',
            '../../public/static/images/banner/small3.jpg'
        ],
        goodsList: [
            {
                id: 1,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods1.jpg',
                price: "258"
            },
            {
                id: 2,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "152"
            },
            {
                id: 3,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "1212"
            },
            {
                id: 4,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods4.jpg',
                price: "4545"
            },
        ]
    },
    {
        id: 3,
        title: "威士忌馆",
        navList: ['麦卡伦', ' 日本威士忌', '百富', '  格兰杰', '  尊尼获加'],
        carousalList: [
            '../../public/static/images/banner/small1.jpg',
            '../../public/static/images/banner/small2.jpg',
            '../../public/static/images/banner/small3.jpg'
        ],
        goodsList: [
            {
                id: 1,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods1.jpg',
                price: "258"
            },
            {
                id: 2,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "152"
            },
            {
                id: 3,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "1212"
            },
            {
                id: 4,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods4.jpg',
                price: "4545"
            },
        ]
    },
    {
        id: 4,
        title: "葡萄酒管",
        navList: ['奔富', '香槟', '法国', '智利', '白葡萄酒', '意大利'],
        carousalList: [
            '../../public/static/images/banner/small1.jpg',
            '../../public/static/images/banner/small2.jpg',
            '../../public/static/images/banner/small3.jpg'
        ],
        goodsList: [
            {
                id: 1,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods1.jpg',
                price: "258"
            },
            {
                id: 2,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "152"
            },
            {
                id: 3,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods2.jpg',
                price: "1212"
            },
            {
                id: 4,
                name: '水井坊天皓宸(帝王黄)',
                img: '../../public/static/images/banner/goods4.jpg',
                price: "4545"
            },
        ]
    },
]
Mock.mock('/api/getcateItem', 'get', function () {
    return cateItemList
})