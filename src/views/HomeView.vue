<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <TheWelcome />
      </div>
    </header>
    <!-- <TheWelcome /> -->
  </main>
</template>
<style lang="scss" scoped>
header {
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
