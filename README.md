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
