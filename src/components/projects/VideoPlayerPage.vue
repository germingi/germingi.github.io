<template>
  <PageHeader />
  <div class="video-player-page">
    <ProjectCard
      name="vue3 video player"
      repoUrl="https://github.com/germingi/vue3-video-player"
      shortDescription="A Vue 3 video player with subtitle support."
    >
      <div class="video-player">
        <VideoPlayer
          video-url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          title="Big Buck Bunny"
        />
      </div>
    </ProjectCard>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '../PageHeader.vue'
import ProjectCard from './ProjectCard.vue'

import { VideoPlayer } from '@germingi/vue3-video-player'
import '@germingi/vue3-video-player/style.css'
</script>

<style scoped>
.video-player-page {
  max-width: 50rem;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.video-player {
  color: var(--color-card);
  width: 80%;
  margin: 2rem auto;
}
</style>
