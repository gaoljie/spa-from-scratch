## install Sentry

`yarn add @sentry/browser`

## config

edit src/index.jsx

```js
if (process.env.NODE_ENV === "production") {
  Sentry.init({
    /* need to be replaced as an real dsn */
    dsn: process.env.SENTRY_DSN
  });

  try {
    throw new Error("Caught");
  } catch (err) {
    Sentry.captureException(err);
  }
}
```
