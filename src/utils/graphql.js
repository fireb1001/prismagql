import { gql } from "apollo-boost";

export const RECIPES = gql`
  {
    recipes {
      id
      title
      ingredients
      directions
      createdAt
      published
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($id: ID!) {
    deleteRecipe(where: { id: $id }) {
      id
    }
  }
`;
