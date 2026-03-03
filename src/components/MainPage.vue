<template>
  <PageHeader />
  <div class="main-page">
    <PortfolioGrid />
  </div>
</template>

<script setup lang="ts">
import PageHeader from './PageHeader.vue'
import PortfolioGrid from './portfolio/PortfolioGrid.vue'
</script>

<style scoped>
.main-page {
  max-width: 70rem;
  margin: 0 auto;
}
</style>
