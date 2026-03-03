<template>
  <div class="portfolio-grid">
    <PortfolioTile name="vue3 video player" :img="tileImage" />
  </div>
</template>

<script setup lang="ts">
import PortfolioTile from './PortfolioTile.vue'
import tileImage from '@/assets/vu3-video-player.png'
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
