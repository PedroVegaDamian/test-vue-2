import type { QuestionFilters, Question } from '@/interfaces/question'

const API_DOMAIN = 'https://opentdb.com'

export const getCategories = async () => {
  const response = await fetch(`${API_DOMAIN}/api_category.php`)
  const data = await response.json()
  return data.trivia_categories
}

export const getQuestionsCountByCategoryId = async (categoryId: number) => {
  const response = await fetch(
    `${API_DOMAIN}/api_count.php?category=${categoryId}`
  )
  const data = await response.json()
  return data.category_question_count
}

export const getQuestionsByFilters = async (
  questionFilters: QuestionFilters
) => {
  const { amount, category, difficulty } = questionFilters
  const response = await fetch(
    `${API_DOMAIN}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
  )
  const data = await response.json()
  return data.results as Question[]
}
