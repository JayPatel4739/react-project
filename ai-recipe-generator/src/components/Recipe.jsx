import React from 'react'
import generateRecipe from "./ai"
import RecipeShow from "./RecipeShow"
import IngredientsList from './IngredientsList'

export default function Recipe() {
    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    function addIngredient(formData){
        const ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, ingredient])
    }

    async function getRecipe(){
        setIsLoading(true)
        const recipeMarkdown = await generateRecipe(ingredients)
        setRecipe(recipeMarkdown)
        setIsLoading(false)
    }


    return (
        <>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}

            {isLoading && <p className="loading-text">Wait the recipe is getting generated!!</p>}

            {recipe && <div className="recipe-output"><RecipeShow recipe={recipe} /></div>}
        </>
    )
}