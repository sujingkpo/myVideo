<template>
  <div class="video">
    <div class="t">
      <span>{{ name }}</span>
    </div>
    <div class="v">
      <video
        controls
        autoplay
        style="object-fit:fill"
        webkit-playsinline="true"
        :playsinline="true"
      >
        <source :src="videoUrl" type="video/webm" />
      </video>
    </div>
    <div class="b">
      <van-button
        type="primary"
        block
        :to="{
          path: '/'
        }"
        >返回列表</van-button
      >
    </div>
  </div>
</template>

<script>
import "mux.js";
import { Button } from "vant";
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    videoUrl: {
      get() {
        return `${this.$http.defaults.baseURL}/video?name=${this.name}`;
      }
    }
  },

  components: {
    [Button.name]: Button
  },
  beforeRouteEnter(to, from, next) {
    if (to.query.name) {
      next(vm => {
        vm.name = to.query.name;
      });
      return;
    }
    next({
      path: "/"
    });
  }
};
</script>

<style lang="scss" scoped>
.video {
  .t {
    padding: 20px;
  }
  .v {
    padding: 20px;

    video {
      width: 100%;
    }
  }
  .b {
    padding: 20px;
  }
}
</style>
