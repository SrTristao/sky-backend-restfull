# 0.0.4
- feature: add `forgot-password` endpoint
- feature: add `js-sha1` library for encript password

# 0.0.3

- feature: create update profile repository

- refactor: all unit tests.

## 0.0.2

- feature: add `.editorconfig` to define a pattern to editor.

- feature: add `.eslintrc` to coverage mistakes on writing code.

- feature: add `.nvmrc` to define nodejs version environment.

- feature: add `.prettierrc` to define consistency of code.

- feature: add `CHANGELOG.md` to create a history of changes.

- refactor: replace `functions` to `arrow functions`.

- refactor: replace `string` to `literal string`.

- refactor: add `export default` when file has unique method.

- refactor: move directory `public/routes/healthcheck` to `public/healthcheck`.

- refactor: helper `Logger` remove unnecessary conditions. now methods receive an attribute with name type instead to call a method with the name of log.

- refactor: helper `Mail` remove unnecessary methods.

- refactor: middleware `handleError` remove unnecessary methods.

- refactor: remove unnecessary returned object and call await inside res.json on all `actions`.
