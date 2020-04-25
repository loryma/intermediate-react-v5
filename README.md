# Complete Intro to React v5 and Intermediate React v2

**Review**

- Hooks:
  Optimization hooks:
  - useMemo - returns memoized value (function passed to memo runs on every render, to run only when some dependency changes pass array of dependendies);
  - Memo - `js const MyComponent = React.memo(function MyComponent(props) { /* render using props */ });` Similar React.PureComponent - renders same result given same props so it will not be unmounted when it's parent changes as usually happend when all child components are unmounted when parent re-renders
