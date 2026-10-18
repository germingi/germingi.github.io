<template>
  <router-link :to="to" class="portfolio-link">
    <div class="portfolio-tile">
      <img :src="img" :alt="name" />
      <div class="label">{{ name }}</div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; img: string; to: string }>()
</script>

<style scoped>
.portfolio-tile {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 0.5rem;
  overflow: hidden;
}

.portfolio-tile img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.label {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.25rem 0;
  background: var(--color-tile-label-background);
}

.portfolio-link {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
}
</style>
