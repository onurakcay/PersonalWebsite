<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="helloText">{{ msg }}</h1>
    <v-avatar image="@/assets/profile.png" size="66"></v-avatar>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings {
  width: 100%;
  h1,
  h3 {
    text-align: center;
  }
}
.helloText {
  font-size: 48px;
  font-weight: bold;
}
</style>
