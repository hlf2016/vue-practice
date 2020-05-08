<template>
  <div class="home">
    <nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      flxed
      border
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <icon
          name="search"
          size="0.44rem"
          color="#000"
        />
      </template>
      <template #title>
        <span style="font-size:0.32rem">{{ titlePosition }}</span>
      </template>
      <template #left>
        <span
          class="iconfont icon-gerenzhongxin"
          style="font-size:0.44rem;"
        ></span>
      </template>
    </nav-bar>
    <swipe
      class="my-swipe"
      :autoplay="0"
      indicator-color="grey"
      :loop="false"
      :lazy-render="true"
    >
      <swipe-item>
        <grid :border="false">
          <grid-item
            v-for="(item, index) in swipeList1"
            :key="index"
          >
            <vant-image
              width="0.84rem"
              height="0.84rem"
              fit="cover"
              :src="'https://fuss10.elemecdn.com/' + item.image_url"
            >
              <template v-slot:loading>
                <loading
                  type="spinner"
                  size="20"
                />
              </template>
              <template v-slot:error>加载失败</template>
            </vant-image>
            <span>{{ item.title }}</span>
          </grid-item>
        </grid>
      </swipe-item>
      <swipe-item>
        <grid :border="false">
          <grid-item
            v-for="(item, index) in swipeList2"
            :key="index"
          >
            <vant-image
              width="0.84rem"
              height="0.84rem"
              fit="cover"
              :src="'https://fuss10.elemecdn.com/' + item.image_url"
            >
              <template v-slot:loading>
                <loading
                  type="spinner"
                  size="20"
                />
              </template>
              <template v-slot:error>加载失败</template>
            </vant-image>
            <span>{{ item.title }}</span>
          </grid-item>
        </grid>
      </swipe-item>
    </swipe>

    <ShopList :shopListArr='shopListArr'></ShopList>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  Button,
  NavBar,
  Toast,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image as VantImage,
  Loading
} from "vant";

import ShopList from "@/components/ShowList.vue";

import {
  getBannerData,
  getUserData,
  getPosData,
  getIndexData,
  getRestaurantsData
} from "@/api/data";

export default {
  name: "Home",
  components: {
    Button,
    NavBar,
    Icon,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    VantImage,
    Loading,
    ShopList
  },
  data() {
    return {
      titlePosition: "",
      swipeList1: [],
      swipeList2: [],
      shopListArr: []
    };
  },
  async mounted() {
    // 异步获取数据
    getBannerData().then(res => {});

    getPosData().then(res => {
      this.titlePosition = res.name;
    });

    getIndexData().then(res => {
      this.swipeList1 = res.slice(0, 8);
      this.swipeList2 = res.slice(8, 16);
    });

    getRestaurantsData().then(res => {
      this.shopListArr = res;
    });
    // 同步获取数据
    // let banners = await getBannerData();
    // // console.log(banners);
    // let user = await getUserData();
    // // console.log(user);
    // let position = await getPosData();
    // console.log(position);
    // let index = await getIndexData();
    // console.log(index);
    // let restaurants = await getRestaurantsData();
    // console.log(restaurants);
  },
  methods: {
    onClickLeft() {
      Toast("个人中心");
    },
    onClickRight() {
      Toast("搜索");
    }
  }
};
</script>

<style lang="sass" scoped>
// 这里 字体大小 会异常的大 需要在 App.vue 文件中设置 body 中的 font-size 属性
.van-nav-bar
  height: 0.92rem

.my-swipe
  height: 4rem
</style>
