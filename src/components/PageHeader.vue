<template>
  <div class="page-header">
    <h1>
      <router-link to="/" class="home-link">germingi.com</router-link>
    </h1>
    <div class="divider">
      <div class="first" />
      <div />
      <div />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-header {
  max-width: 50rem;
  margin: 0 auto;
}

h1 {
  text-align: left;
  margin: 0;
  font-weight: 300;
}

.home-link {
  color: inherit;
  text-decoration: none;
}
.home-link:hover {
  text-decoration: underline;
}

.divider {
  margin: 1rem 0;
  height: 2rem;
  display: flex;
  flex-direction: column;
}
.divider div {
  flex: 1;
}
.divider div:nth-child(1) {
  background-color: var(--color-accent-1);
}
.divider div:nth-child(2) {
  background-color: var(--color-accent-2);
}
.divider div:nth-child(3) {
  background-color: var(--color-accent-3);
}
</style>
