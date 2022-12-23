import React from "react";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import "./App.css";
import Hit from "../Hit";
const typesenseInit = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz", // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: "name,description,categories",
  },
});

console.log("*️⃣", typeof typesenseInit, typesenseInit);

const searchClient = typesenseInit.searchClient;

console.log("*️⃣", typeof searchClient, searchClient);

export default function App() {
  return (
    <div className="container">
      <InstantSearch indexName="products" searchClient={searchClient}>
        <h1 className="heading">
          <img
            src="https://res.cloudinary.com/mannuel/image/upload/v1632639615/images/typesense_logo.svg"
            width="220"
          />
          <small className="sub-heading">React Client</small>
        </h1>
        {<SearchBox />}
        {<Hits hitComponent={Hit} />}
      </InstantSearch>
    </div>
  );
}
