//获取goodslist

import Mock from 'mockjs'

let goodsList = [
    {
        id: 1,
        name: '水井坊天皓宸(帝王黄)',
        img: '../../public/static/images/banner/goods1.jpg',
        price: "258"
    },
    {
        id: 2,
        name: '衡昌烧坊青玉经典装53度(500ML)',
        img: '../../public/static/images/banner/goods2.jpg',
        price: "892"
    },
    {
        id: 3,
        name: '衡昌烧坊牛年生肖酒53度(500ML)',
        img: '../../public/static/images/banner/goods4.jpg',
        price: "867"
    },
    {
        id: 4,
        name: '习酒瑰宝53度(500ML)',
        img: '../../public/static/images/banner/goods5.png',
        price: "778"
    },
    {
        id: 5,
        name: '轩尼诗XO金琼斯限量版(700ML)',
        img: '../../public/static/images/banner/goods06_s.jpg',
        price: "258"
    },
    {
        id: 6,
        name: '马爹利名仕2023年限量版(700ML)',
        img: '../../public/static/images/banner/goods07.jpg',
        price: "152"
    },
    {
        id: 7,
        name: '马爹利蓝带2023年限量版(700ML)',
        img: '../../public/static/images/banner/goods08.png',
        price: "4444"
    },
    {
        id: 8,
        name: '十四代无滤过纯米吟酿清酒(1.8L)',
        img: '../../public/static/images/banner/goods09.jpg',
        price: "585"
    },
    {
        id: 9,
        name: '轩博臻品调和威士忌(700ML)',
        img: '../../public/static/images/banner/goods10.jpg',
        price: "258"
    },
    {
        id: 10,
        name: '轩博臻品调和威士忌(700ML)',
        img: '../../public/static/images/banner/goods11.jpg',
        price: "152"
    },
    {
        id: 11,
        name: '苏格登12年纯麦威士忌新年礼盒(700ML)',
        img: '../../public/static/images/banner/goods12.jpg',
        price: "854"
    },
    {
        id: 12,
        name: '麦卡伦臻味啡凡单一麦芽威士忌(700ML)',
        img: '../../public/static/images/banner/googs13.jpg',
        price: "1215"
    },
    {
        id: 13,
        name: '铂姆铂金起泡酒(750ML)',
        img: '../../public/static/images/banner/goods14.jpg',
        price: "258"
    },
    {
        id: 14,
        name: '木桐嘉棣珍藏波亚克红葡萄酒(750ML)',
        img: '../../public/static/images/banner/goods15.jpg',
        price: "152"
    },
    {
        id: 15,
        name: '卡门萨克酒庄正牌干红葡萄酒(五级)750ML',
        img: '../../public/static/images/banner/goods16.jpg',
        price: "1212"
    },
    {
        id: 16,
        name: '波菲酒庄正牌干红葡萄酒(二级)750ML',
        img: '../../public/static/images/banner/goods17.jpg',
        price: "4545"
    },
    {
        id: 17,
        name: '波菲酒庄正牌干红葡萄酒(二级)750ML',
        img: '../../public/static/images/banner/goods17.jpg',
        price: "4545"
    },
]

Mock.mock('/api/getGoodsList', 'get', function () {
    return goodsList
})