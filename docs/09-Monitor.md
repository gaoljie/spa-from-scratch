## install Sentry

`yarn add @sentry/browser`

## config

edit src/index.tsx

```tsx
Sentry.init({
  dsn: "https://sentry.dsn"
});
```
