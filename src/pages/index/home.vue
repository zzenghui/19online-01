<template>
  <div class="home">
    <Banner />
    <cates />
    <cateItem v-for="item in cateList" :key="item.id" :cateItem="item" />
    <Serve />
  </div>
</template>

<script>
import Banner from "@/view/index/banner.vue";
import cates from "@/view/index/cates";
import cateItem from "@/view/index/cateItem";
import { mapActions, mapState } from "vuex";
import Serve from "@/view/index/serve.vue";
export default {
  computed: {
    ...mapState("home", ["cateList"]),
  },
  methods: {
    ...mapActions("home", ["getCateItemAct"]),
  },
  mounted() {
    this.getCateItemAct();
  },
  components: { Banner, cates, cateItem, Serve },
};
</script>

<style>
</style>