<script >
import aboutPicture from "../assets/about.png";
export default {
  data() {
    return {
      msg: "Hello 🖐️",
      name: "My Name is Onur AKÇAY",
      width: 200,
      aspectRatio: 16 / 9,
      aboutPic: aboutPicture,
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>
<template>
  <div class="about">
    <v-avatar size="100" color="primary" class="avatar">
      <v-img :aspect-ratio="aspectRatio" :width="width" :src="aboutPic" cover />
    </v-avatar>
    <div class="subTitle">{{ name }}</div>
    <p>
      I love to solve complicated problems and use up-to-date technologies while
      doing that.
    </p>
    <p>
      Here, check out my
      <a class="link" @click="navigate('tech')"> tech stack </a>
    </p>
  </div>
</template>

<style lang="scss" >
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    .subTitle {
      font-size: 24px;
      color: #fff;
      font-weight: 100;
      margin-bottom: 0.5rem;
    }
    p {
      a {
        background: transparent;
        border: none;
        border-radius: 0;
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
