<script setup lang="ts">
import { ref } from 'vue'
import {
  getCategories,
  getQuestionsByFilters,
  getQuestionsCountByCategoryId
} from '@/services'
import type { Category } from '@/interfaces/category'
import { useQuestionsStore } from '@/stores/questions'

const PropsQuestionsCount: Record<string, string> = {
  easy: 'total_easy_question_count',
  medium: 'total_medium_question_count',
  hard: 'total_hard_question_count'
}

const questionsStore = useQuestionsStore()

const categories = ref<Category[]>([])
const categorySelected = ref<number>(-1)

const difficulties = ref([
  {
    name: 'Fácil',
    value: 'easy'
  },
  {
    name: 'Media',
    value: 'medium'
  },
  {
    name: 'Difícil',
    value: 'hard'
  }
])
const difficultySelected = ref<string>('default')

getCategories().then(data => {
  categories.value = data
})

const handleClick = async () => {
  const data = await getQuestionsCountByCategoryId(categorySelected.value)
  const questionsCount = data[PropsQuestionsCount[difficultySelected.value]]

  getQuestionsByFilters({
    amount: questionsCount > 10 ? 10 : questionsCount,
    category: categorySelected.value,
    difficulty: difficultySelected.value
  }).then(data => {
    questionsStore.setQuestions(data)
  })
}
</script>

<template>
  <div
    class="h-100 d-flex flex-column justify-content-center align-items-center text-center"
  >
    <h1 class="mb-5">TRIVIA GAME</h1>
    <form @submit.prevent="handleClick">
      <select class="form-select mb-3" v-model="categorySelected">
        <option hidden :value="-1">Selecciona la categoría</option>
        <option :key="id" :value="id" v-for="{ id, name } of categories">
          {{ name }}
        </option>
      </select>
      <select class="form-select mb-4" v-model="difficultySelected">
        <option hidden value="default">Selecciona la dificultad</option>
        <option
          :key="value"
          :value="value"
          v-for="{ value, name } in difficulties"
        >
          {{ name }}
        </option>
      </select>
      <button class="btn btn-dark w-75" type="submit">Empezar</button>
    </form>
  </div>
</template>
