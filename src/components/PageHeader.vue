<template>
  <div class="page-header">
    <h1>
      <router-link to="/" class="home-link">germingi.com</router-link>
    </h1>
    <hr />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-header {
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem 2rem;
}

h1 {
  text-align: left;
  margin: 0;
}

.home-link {
  color: inherit;
  text-decoration: none;
}
.home-link:hover {
  text-decoration: underline;
}

hr {
  margin: 1rem 0;
  border: none;
  border-top: 0.125rem solid var(--text-color);
}
</style>
