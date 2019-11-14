import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContext from "./context";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";
const httpLink = createHttpLink({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io'
  uri: "https://us1.prisma.sh/m-a-75a86c/hello-world/dev"
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => {
  /*
  const handleHandla = done => {
    console.log(done);
  };
  const [receipes] = useState([]);

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider
        value={{
          receipes: receipes
        }}
      >
        <Router>
          <div className="container">
            <h2>My first Apollo app {"👼"} </h2>
            <div className="row">
              <Recipes></Recipes>
            </div>
            <AddRecipe onDone={handleHandla}></AddRecipe>
          </div>
        </Router>
      </AppContext.Provider>
    </ApolloProvider>
  );
  */
  return (
    <div>
      <Image
        cloudName="tvito"
        publicId="interior-decor"
        width="400"
        crop="scale"
      />

      <CloudinaryContext cloudName="tvito">
        <Image publicId="interior-decor">
          {/*           
          <Transformation
            width="450"
            height="450"
            gravity="face"
            radius="20"
            effect="sepia"
            crop="thumb"
          />
          <Transformation opacity="80" />
          <Transformation
            height="400"
            width="400"
            background="auto:predominant"
            crop="pad"
          />
          <Transformation effect="gradient_fade:symmetric_pad" x="0.5" />
                    
          */}

          <Transformation
            width="400"
            effect="distort:5:5:395:15:450:390:3:445"
            crop="scale"
          />
          <Transformation angle="5" />
        </Image>
      </CloudinaryContext>
    </div>
  );
};

export default App;
