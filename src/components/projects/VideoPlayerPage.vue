<template>
  <PageHeader />
  <div class="video-player-page">
    <ProjectCard
      name="vue3 video player"
      repoUrl="https://github.com/germingi/vue3-video-player"
      shortDescription="A Vue 3 video player with subtitle support."
    >
      <VideoPlayerContainer />
    </ProjectCard>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../PageHeader.vue'
import ProjectCard from './ProjectCard.vue'
import VideoPlayerContainer from './VideoPlayerContainer.vue'
</script>

<style scoped>
.video-player-page {
  max-width: 50rem;
  margin: 0 auto;
  padding-bottom: 1rem;
}
</style>
