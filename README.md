# Complete Intro to React v5 and Intermediate React v2

**Review**

- Hooks:
  Optimization hooks:

  - useMemo - returns memoized value (function passed to memo runs on every render, to run only when some dependency changes pass array of dependendies);
  - Memo - `const MyComponent = React.memo(function MyComponent(props) { /* render using props */ });` Similar to React.PureComponent - renders same result given same props so it will not be unmounted when it's parent changes as usually happens when all child components are unmounted when parent re-renders
  - useContext - memoizes function and returns same function unless some dependency changes (which are passed in array). This is useful when function is passed as a prop to optimized child component where optimization relies on reference equality

- CSS Emotion --- write css in js

  - tagged template is assined to css prop
  - supports auto vendor-prefixing, nested selectors, and media queries, css animation

- Code splitting with React.lazy and Suspence

  - lazy load code from other routers or Component used under condition
  - One top level Suspence component or multiple will lazy loading for child components

- Server-side renderding

  - use `hydrate` instead of render from 'react-dom' package to reuse what's inside root element
  - initial render is done in Node js and there shoudn't be reference to dom elements on initial render;

- Typescript

  - provide types for state, props, Components, use custom types, use Typescript Linter

- Testing
  - create mocks for node modules in `__mocks__` folder on same level with `node_modules`, create mock objects and functions for node module there
  - use `jest.fn(() => {})` to spy on function calls and provide function implementation
  - write tests in `__tests__` folder for jest to find tests
  - use `render` method from testing-library/react to render component
  - add `data-testid` to elements to find them using `getByTestId` from `testing-library/react` render return value
  - use `container` to add snapshot tests
  - use jest --coverage to see coverage
