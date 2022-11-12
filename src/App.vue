<script >
import { RouterLink, RouterView } from "vue-router";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      progress: 0,
      pages: ["about", "contact"],
      pageIndex: 0,
      hideProgressBar: false,
    };
  },
  methods: {
    progressBar() {
      let currenRoute = this.currentRoute;
      console.log(currenRoute);

      if (
        this.pageIndex != this.pages.length &&
        (currenRoute == undefined || currenRoute == "home")
      ) {
        if (this.progress != 100) {
          setTimeout(() => {
            this.progress += 10;
            this.progressBar();
          }, 1000);
        } else {
          this.$router.push("/" + this.pages[this.pageIndex]);
          this.pageIndex += 1;
          this.progress = 0;
          this.progressBar();
        }
      } else {
        this.cancelProgressBar();
      }
    },
    cancelProgressBar() {
      this.pageIndex = this.pages.length;
      this.hideProgressBar = true;
    },
  },
  created() {
    this.progressBar();

    // console.log("Route Object", currentRoute);
    addEventListener("click", () => {
      this.cancelProgressBar();
    });
  },
  computed: {
    currentRoute() {
      const router = useRouter();
      return this.$router.currentRoute.value.name;
    },
  },
};
</script>

<template class="mainWrapper">
  <RouterView />
  <div
    v-if="currentRoute == 'home'"
    :class="{
      progressBar: !hideProgressBar,
      'progressBar hide': hideProgressBar,
    }"
  >
    <v-progress-circular :model-value="progress"></v-progress-circular>
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<style lang="scss"  scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.progressBar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  &.hide {
    display: none;
  }
}
</style>
