# LinuxFoundationX_LFW111x

## Mocking GET Routes (1 - 6)

### Actions for install needed modules after branch was pulling

!!! **mock-srv** should be our current working directory

If you on the root directory do **Step 1**.

If you on `mock-srv` already do **Step 2**.
```
// Step 1 
cd mock-srv

// Step 2
npm init fastify
```

- Install dependencies
- Setup CORS access
- Create our two GET routes

```
// Step 3
npm install

// Step 4
npm install fastify-cors
```

At this Chapter was modified `mock-srv/app.js`
```
const path = require('path')
const AutoLoad = require('fastify-autoload')
+++ const cors = require('fastify-cors')

module.exports = async function (fastify, opts) {
+++  fastify.register(cors)

  fastify.register(AutoLoad, {
      ...
```
Was created route's folders inside our current working directory `mock-srv/routes`
- ***confectionery***
- ***electronics***

Was created the `index.js` files inside both of folders from step above:
- `mock-srv/routes/confectionery/index.js`
- `mock-srv/routes/electronics/index.js`

---

## Konsole command for run App && Server

**App** --> **root** directory
```
serve static -p 3003
```
**Server**  -->  **mock-srv** directory
```
npm run dev
```