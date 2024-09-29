/*
 * This is a program that calculates weird microwave times.
 *
 * @author  Ian Beddie
 * @version 1.0
 * @since   2024-09-25
 */

import { createPrompt } from 'bun-promptx'

const subTime = 60
const pizzaTime = 45
const soupTime = 105
let cookTime = 0
let minutes = 0
let seconds = 0

const userFood = createPrompt('Are you heating sub, pizza, or soup?:')

if (userFood.value === 'sub') {
  cookTime = subTime
} else if (userFood.value === 'pizza') {
  cookTime = pizzaTime
} else if (userFood.value === 'soup') {
  cookTime = soupTime
} else {
  console.log('you aint enter a food')
}

const foodAmount = createPrompt('How many or you heating?:')

if (foodAmount.value === 1) {
  cookTime = (cookTime * 1)
} else if (foodAmount.value === 2) {
  cookTime = (cookTime * 1.5)
} else if (foodAmount.value === 3) {
  cookTime = (cookTime * 2)
} else {
  console.log('wrong')
}

minutes = Math.floor(cookTime / 60)
seconds = cookTime % 60

console.log(`Minutes: ${minutes}, Seconds: ${seconds}`)

console.log('\nDone.')
