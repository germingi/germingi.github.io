<template>
  <div class="main-page">
    <h1>germingi.com</h1>
    <hr />
    hello world!
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-page {
  --text-color: #1d1d35;
  color: var(--text-color);
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem 2rem;
}

h1 {
  text-align: left;
  margin: 0;
}

hr {
  margin: 1rem 0;
  border: none;
  border-top: 0.125rem solid var(--text-color);
}
</style>
