import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { RECIPES } from "../utils/graphql";

const CREATE_RECIPE = gql`
  mutation createRecipe($title: String!, $published: Boolean!) {
    createRecipe(
      data: {
        title: $title
        ingredients: "fw gss"
        directions: "put it"
        published: $published
      }
    ) {
      title
      ingredients
      directions
      createdAt
      published
    }
  }
`;

export const AddReceipe = props => {
  let input;
  const [createRecipe, { error, data }] = useMutation(CREATE_RECIPE, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: RECIPES
      });
      //console.log(result.data.createRecipe);
      data.recipes = [result.data.createRecipe, ...data.recipes];
      proxy.writeQuery({ query: RECIPES, data });
    },
    refetchQueries: [
      {
        query: RECIPES
      }
    ]
  });
  /*
    useEffect(() => {
    createRecipe({variables : {title: "abisos "} })
    console.log(tata)
  }, [createRecipe, tata])
  */
  // return <button onClick={createRecipe({variables : {title: title} })}>Add</button>
  if (data) console.log(data);
  if (error) console.error("☠️", error);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createRecipe({ variables: { title: input.value, published: true } });
          input.value = "";
          props.onDone(true);
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Recipe</button>
      </form>
      <button
        className="btn btn-primary"
        type="button"
        onClick={e =>
          createRecipe({
            variables: { title: "ahooo! " + Date.now(), published: true }
          })
        }
      >
        Add One
      </button>
    </div>
  );
};

export default AddReceipe;
