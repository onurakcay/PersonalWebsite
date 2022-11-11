<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <header>
      <div class="wrapper">
        <TheWelcome msg="Merhaba"/>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <!-- <TheWelcome /> -->
  </main>
</template>
