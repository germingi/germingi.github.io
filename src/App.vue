<script setup lang="ts">
// router-view will display whatever component matches the current route
</script>

<template>
  <router-view />
</template>

<style>
:root {
  --text-color: #1d1d35;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

body {
  background-color: rgb(255, 162, 109);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
  box-sizing: border-box;
  padding: 1rem;
}
</style>
