<template>
  <div class="project-card-divider">
    <div class="divider-section" />
    <div class="divider-section" />
    <div class="divider-section" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.project-card-divider {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  height: 3px;
}
.divider-section {
  background-color: var(--color-accent-1);
  flex: 1;
}
.divider-section:nth-child(2) {
  background-color: var(--color-accent-2);
}
.divider-section:nth-child(3) {
  background-color: var(--color-accent-3);
}
</style>
