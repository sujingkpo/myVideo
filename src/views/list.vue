<template>
  <div>
    <van-list
      v-model="listload"
      :finished="finished"
      finished-text="没有更多了"
      @load="load"
    >
      <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.name"
        @click="nextstep(item)"
        :is-link="true"
      />
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant";

export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data() {
    return {
      listload: false,
      finished: false,
      list: [],
      dirname: this.$route.query.dirname
    };
  },
  methods: {
    async load() {
      var res = await this.$http.get("loadVideoList", {
        params: { dirname: this.dirname }
      });
      if (res.status == 200) {
        this.list = res.data;
      }
      this.finished = true;
      this.listload = false;
    },
    nextstep(item) {
      if (item.isDir) {
        this.$router.push({
          path: "/",
          query: {
            dirname: item.name
          }
        });
        this.load();
      } else {
        this.$router.push({
          path: "/video",
          query: {
            name: item.name
          }
        });
      }
    }
  },

  created() {
    this.load();
  },
  watch: {
    $route: function(to) {
      //执行数据更新查询
      this.dirname = to.query.dirname;
      this.load();
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell {
  align-items: center;
  .van-cell__title {
    color: #1b2fba;
  }
}
</style>
