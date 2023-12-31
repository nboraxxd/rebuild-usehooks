# useDocumentTitle

`useDefault` hook hoạt động tương tự như `useState` nhưng có một điểm khác biệt. Nếu state của hook là `undefined` hoặc `null`, `useDefault` sẽ mặc định state trở về giá trị mặc định được cung cấp.

```js
const [state, setState] = useDefault(initialValue, defaultValue)
```

For the full documentation, see [usehooks.com/usedefault](https://usehooks.com/usedefault).

