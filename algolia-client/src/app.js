const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

const search = instantsearch({
  indexName: 'demo_ecommerce',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `<div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">\${{price}}</div>
        </div>`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

// After the `searchBox` widget
search.addWidgets([
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
]);

search.start();
