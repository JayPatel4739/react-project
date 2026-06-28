export default function IngredientsList(props) {
  return (
    <section>
      <h2>Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div>
          <div>
            <h3>Ready for recipe?</h3>
            <p>The AI will recommend a recipe based on the ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe!</button>
        </div>
      )}
    </section>
  );
}
