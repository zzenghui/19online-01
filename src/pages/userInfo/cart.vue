<template>
  <div class="cart">
    <userHead :title="{ title: '购物车', icon: 'el-icon-shopping-cart-1' }" />
    <el-card>
      <table>
        <thead>
          <tr>
            <th width="10%">
              <input
                type="checkbox"
                @change="checkAll"
                :checked="selectItem.length == cartList.length"
              />
              全选
            </th>
            <th width="5%">图片</th>
            <th width="25%">名称</th>
            <th width="10%">单价(元)</th>
            <th width="20%">数量</th>
            <th width="15%">金额</th>
            <th width="15%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart, index) in cartList" :key="index">
            <td>
              <input
                type="checkbox"
                :checked="cart.selected"
                @change="handleCheck(cart.id)"
              />
            </td>
            <td><img v-lazy="cart.img" alt="" /></td>
            <td>{{ cart.name }}</td>
            <td>{{ cart.price }}</td>
            <td>
              <el-input-number
                v-model="cart.num"
                @change="handleChange($event, cart.id)"
                :min="1"
                :max="100"
              ></el-input-number>
            </td>
            <td>{{ parseInt(cart.price) * parseInt(cart.num) }}</td>
            <td>
              <span
                style="color: red; cursor: pointer"
                @click="deleteCart(cart.id)"
                >删除</span
              >
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="8" class="tfoot">
              <div class="delete">
                <span>删除选中商品</span> <span>清空购物车</span>
              </div>
              <div class="buy">
                <div>
                  已选商品 <span>{{ goodsNum }}</span> 件
                </div>
                <div>
                  商品总额: <span>￥{{ getAllPrice }}.00</span>
                </div>
                <div class="buyBtn">去结算</div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", ["getAllPrice", "selectItem", "goodsNum"]),
  },
  methods: {
    ...mapActions("cart", ["cartListAct", "deleteCartAct"]),
    ...mapMutations("cart", ["HANDLECHECK", "HANDLENUM", "SELECTALL"]),
    handleChange(val, id) {
      this.HANDLENUM({ num: val, id });
    },
    //修改选中状态
    handleCheck(id) {
      this.HANDLECHECK(id);
    },
    checkAll(e) {
      this.SELECTALL(e.target.checked);
    },
    //删除一个购物车
    deleteCart(id) {
      this.deleteCartAct(id);
      this.$toast.center("删除成功");
    },
  },
  created() {
    this.cartListAct();
  },
};
</script>

<style scoped>
.buyBtn {
  width: 130px;
  height: 40px;
  background-color: red;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.buy span {
  font-size: 15px;
  color: red;
  font-weight: 600;
}
.buy {
  float: right;
  width: 450px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.tfoot .delete {
  color: cornflowerblue;
  cursor: pointer;
}
.tfoot .delete {
  float: left;
}
.tfoot {
  width: 100%;
  height: 30px;
  line-height: 40px;
}
td img {
  width: 100%;
  height: 100%;
}
td {
  text-align: center;
  height: 100px;
}
table {
  width: 100%;
}
.el-card {
  margin-top: 15px;
}
</style>