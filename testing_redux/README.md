# pm-x-scrn

## Testing Redux Components

### Setup

- Run `yarn` to install dependencies
- Run `yarn build` to build the project
- Open the `index.html` page in your favorite browser and click the button as many times as you like

### Tests

- Run `yarn test` to run the tests
- Reference `src/components/__tests__/App.test.js` for the tests of the `App.jsx` component
- Reference `src/components/App.jsx` for how that was setup with `connect` but in a way that is testable

### What is my experience?

In this solution, I opted to make the App.jsx component that is connected to redux testable by
exporting the un-connected component that could be imported in the test, but by default is
exported connected. This let me write unit tests that test only the component itself without
having to worry about testing the redux plumbing that makes connect work. Another option
would be to leverage the mocking that Jest provides (or using something like Sinon in other testing frameworks)
to mock the connect function, however I find this to be more difficult and more confusing. Exporting
the unconnected component has the added benefit of increasing reusability since now the component can be
dropped in with or without redux.
