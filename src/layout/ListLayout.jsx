import List from "../components/List";

export default function ListLayout() {
  return (
    <>
      <List title="Ingredients" listType="ul">
        <li>
          <p>2-3 large eggs</p>
        </li>
        <li>
          <p>Salt to taste</p>
        </li>
        <li>
          <p>Pepper, to taste</p>
        </li>
        <li>
          <p>1 tablespoon butter or oil</p>
        </li>
        <li>
          <p>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </p>
        </li>
      </List>
      <List title="Instructions" listType="ol">
        <li>
          <h4>Beat the eggs: </h4>
          <p>
             In a bowl, whisk the eggs with salt and pepper until well combined.
          </p>
        </li>
        <li>
          <h4>Heat the pan: </h4>
          <p>Heat butter or oil in a non-stick skillet over medium heat.</p>
        </li>
        <li>
          <h4>Cook the omelette: </h4>
          <p>Pour in the egg mixture and let it cook for about 1-2 minutes.</p>
        </li>
        <li>
          <h4>Add fillings (optional): </h4>
          <p>Add any optional fillings to one half of the omelette.</p>
        </li>
        <li>
          <h4>Fold and serve: </h4>
          <p>
            Fold the omelette in half and cook for another minute until set.
          </p>
        </li>
        <li>
          <h4>Enjoy: </h4>
          <p>Enjoy your delicious omelette!</p>
        </li>
      </List>
    </>
  );
}
