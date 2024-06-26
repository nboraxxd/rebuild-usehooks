# `useMediaQuery`

`useMediaQuery` allows you to determine if the `document`'s dimensions match a specific media query string. It also listens for changes in the `document`'s dimensions in order to detect when it matches or stops matching the same media query string.

It uses the browser's [`matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API under the hood.

```js
const isSmallDevice = useMediaQuery('only screen and (max-width: 768px)')
```

For the full documentation, see [usehooks.com/usemediaquery](https://usehooks.com/usemediaquery).

## TASKS

- `useMediaQuery` should return a boolean representing if the `document`'s dimensions match the media query string that was passed to `useMediaQuery`
- `useMediaQuery` should re-calculate if the media query string matches the `document`'s dimensions when the `document`'s dimensions change
- `useMediaQuery` should remove any listeners it established when the component using it is removed from the DOM

## THE RESULT

The final version of your app should look and behave like [this](https://codesandbox.io/p/sandbox/usemediaquery-qu6bcp).
