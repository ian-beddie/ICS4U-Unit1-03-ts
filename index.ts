/*
 * This is a program that calculates weird microwave times.
 *
 * @author  Ian Beddie
 * @version 1.0
 * @since 2024-09-25
 */

import { createPrompt } from 'bun-promptx'

const subTime = 60
const pizzaTime = 45
const soupTime = 105

const userFood = createPrompt('Are you heating sub, pizza, or soup?:')

if (userFood.value === null) {
  console.log('You did not enter any input.')
  } else {
    if (userFood.value == "sub") {
      const cookTime = subTime
      } else {
      if (userFood.value == "pizza") {
        const cookTime = pizzaTime
        } else {
        if (userFood.value == "soup") {
          const cookTime = soupTime
          } else {
          console.log('you aint enter a food')
          }
        }
      }
  }
console.log(`${cookTime} is cook time `)


/*    console.log(`${objectMass}kg of mass would produce ${energyOutput}J of energy. `)
    }
}
 */
console.log("\nDone.")
