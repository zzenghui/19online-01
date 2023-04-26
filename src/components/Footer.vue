<template>
  <div class="footer">
    <div class="top w">
      <img src="../../public/static/images/banner/footer1.png" alt="" />
      <img src="../../public/static/images/banner/footer2.gif" alt="" />
    </div>
    <div class="bottom">
      <div class="info">
        <div class="w flex">
          <dl>
            <dt>物流配送</dt>
            <dd>配送查询</dd>
            <dd>配送服务</dd>
            <dd>配送费用</dd>
            <dd>配送时效</dd>
            <dd>签收与验收</dd>
          </dl>
          <dl>
            <dt>支付域账户</dt>
            <dd>货到付款仅支持广州</dd>
            <dd>在线支付</dd>
            <dd>门店支付</dd>
            <dd>账户安全</dd>
          </dl>
          <dl>
            <dt>售后与服务</dt>
            <dd>服务保障承诺</dd>
            <dd>退换货服务</dd>
            <dd>退款说明</dd>
          </dl>
          <dl>
            <dt>购物帮助</dt>
            <dd>购物保障</dd>
            <dd>购物流程</dd>
            <dd>促销优惠</dd>
            <dd>门店展示</dd>
            <dd>联系我们</dd>
          </dl>
        </div>
      </div>
      <p>
        广州一九在线电子商务有限公司 copyright © 2021 www.19online.cn |
        经营许可证：粤b2-20080416|粤ICP备06088898号
      </p>
      <p>
        工商营业执照 统一社会信用代码 91440104747578468K | 食品经营许可证
        JY14401040233999(1-1)
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info dl {
  width: 150px;
  text-align: center;
}

.info dt {
  font-weight: 600;
  line-height: 25px;
}
.info dd {
  font-size: 13px;
  color: #666;
  line-height: 20px;
  cursor: pointer;
}
.info dd:hover {
  color: red;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.info {
  height: 195px;
  background-color: #f2f2f2;
  padding-top: 10px;
}
.bottom p {
  text-align: center;
}
.bottom {
  border-top: 1px solid red;
}
.top {
  height: 245px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.footer {
  height: 520px;
}
</style>