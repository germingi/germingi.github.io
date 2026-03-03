<template>
  <div class="portfolio-tile">
    <img :src="img" :alt="name" />
    <div class="label">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ name: string; img: string }>()
</script>

<style scoped>
.portfolio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 20rem;
  /* ensure tile doesn't grow with image */
  overflow: hidden;
}

.portfolio-tile img {
  max-width: 100%;
  max-height: 8rem;
  height: auto;
  object-fit: contain;
  display: block;
}

.label {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
}
</style>
