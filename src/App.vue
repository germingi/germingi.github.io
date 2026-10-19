<script setup lang="ts">
// router-view will display whatever component matches the current route
</script>

<template>
  <router-view />
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

body {
  background-color: var(--color-background);
  font-family:
    'Cascadia Code', 'Cascadia Mono', 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Consolas,
    monospace;
  color: var(--color-text);
  box-sizing: border-box;
  padding: 1rem;
}
</style>
