<template>
  <!-- 导航 -->
  <div class="nav">
    <div class="navAll" @mouseenter="handleShow" @mouseleave="handleNoShow">
      全部商品分类
      <div class="navOneList" v-show="isShow">
        <ul>
          <li v-for="item in navList" :key="item.id">
            <a href="#"
              ><span>{{ item.category }}</span>
              <i class="el-icon-arrow-right"></i>
            </a>
            <div class="navTwoList">
              <div
                v-for="item2 in item.children"
                class="navTwo"
                :key="item2.id"
              >
                {{ item2.name }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-for="navitem in navtitleList"
      :key="navitem.id"
      class="navItem loading"
      :class="{ selected: activeId == navitem.id }"
      @click="activeId = navitem.id"
    >
      {{ navitem.navtitle }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      activeId: 1,
      isShow: true,
      navtitleList: [
        {
          id: 1,
          navtitle: "首页",
        },
        {
          id: 2,
          navtitle: "环球狗",
        },
        {
          id: 3,
          navtitle: "全部商品",
        },
        {
          id: 4,
          navtitle: "积分商城",
        },
        {
          id: 5,
          navtitle: "新闻资讯",
        },
      ],
    };
  },
  computed: {
    ...mapState("home", ["navList"]),
  },
  methods: {
    ...mapActions("home", ["getNavListAct"]),
    handleShow() {
      if (this.$route.path !== "/index/home") {
        this.isShow = true;
      }
    },
    handleNoShow() {
      if (this.$route.path !== "/index/home") {
        this.isShow = false;
      }
    },
  },
  mounted() {
    if (this.$route.path !== "/index/home") {
      this.isShow = false;
    }
  },
  created() {
    this.getNavListAct();
  },
};
</script>

<style scoped>
.navTwo:hover {
  background-color: #ccc;
}
.navTwo {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  padding-left: 15px;
}
.navTwoList {
  position: absolute;
  width: 810px;
  height: 440px;
  left: 200px;
  top: 0;
  background-color: #fff;
  display: none;
  z-index: 999;
}

.navOneList ul li:hover .navTwoList {
  display: block;
}

.navOneList ul li:hover {
  border: 1px solid black;
}

.navOneList ul li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navOneList ul li {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 40px;
}

.navOneList {
  position: absolute;
  left: 0;
  width: 100%;
  height: 440px;
  background-color: #fbfbfb;
  z-index: 999;
}

@keyframes widthOver {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.selected {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #1e88e5;
  top: 0;
  left: 0;
}

.loading:hover::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #1e88e5;
  animation: widthOver 0.3s linear 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.nav .navItem {
  position: relative;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  line-height: 50px;
  cursor: pointer;
  box-sizing: content-box;
  text-align: center;
}

.nav .navAll {
  position: relative;
  width: 200px;
  height: 100%;
  line-height: 50px;
  color: #ad221f;
  background-color: #fff;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 600;
}

.nav {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #ad221f;
  color: #fff;
}
</style>