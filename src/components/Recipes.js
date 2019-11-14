import React, { useContext, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Moment from "react-moment";
import moment from "moment";
import "moment/locale/ar";
import AppContext from "../context";
import { RECIPES, DELETE_RECIPE } from "../utils/graphql";

moment().locale("ar");

const Recipes = props => {
  const context = useContext(AppContext);

  const [deleteReceipe] = useMutation(DELETE_RECIPE, {
    refetchQueries: [{ query: RECIPES }]
  });

  const { loading, error, data } = useQuery(RECIPES, {
    //pollInterval: 500
  });

  /*
  if( data && data.rates) {
    data.rates = data.rates.filter(item => item.currency === 'EGP' )
  }
  */

  useEffect(() => {
    console.log(context);
  }, [context]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.recipes.map(
    ({ id, title, ingredients, directions, createdAt, published }) => (
      <React.Fragment key={id}>
        {published && (
          <div className="col-4">
            <div className="card m-1">
              <div className="card-body">
                <h3 className="card-card-title">{title}</h3>
                <p className="card-text text-primary">{ingredients}</p>
                <p className="card-text ">{directions}</p>
                <p className="card-text text-success">
                  <Moment format="DD MMM Y">{createdAt}</Moment>
                </p>
                <p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteReceipe({ variables: { id: id } })}
                  >
                    X
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  );
};

export default Recipes;
