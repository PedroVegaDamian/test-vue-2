<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import QuestionViewVue from '@/views/QuestionView.vue'
import FinalViewVue from '@/views/FinalView.vue'

import { useQuestionsStore } from '@/stores/questions'

const questionsStore = useQuestionsStore()
</script>

<template>
  <main class="container vh-100">
    <HomeView v-if="!questionsStore.isQuestionsReady" />
    <QuestionViewVue v-else-if="!questionsStore.isFinalQuestion" />
    <FinalViewVue v-else />
  </main>
</template>
