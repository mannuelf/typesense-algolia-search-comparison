import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: 'xyz', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: 'name,description,categories',
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default function App() {
  return (
    <InstantSearch indexName="products" searchClient={searchClient}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
