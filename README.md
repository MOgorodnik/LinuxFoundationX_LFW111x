# LinuxFoundationX_LFW111x

## Mocking POST Routes (7 - 14)
---
## `index.html`
We've added a form element that contains three inputs (`name, rrp, info`);

It's hidden by default.

---
## `app.js`
In our **app.js** we'll make form is visible when a category is selected.

The updated parts of code in the **app.js** file it is following:

```
const populateProducts = async (category, method = 'GET', payload) => {
```

```
const send = method === 'GET' ? {} : {
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
}
const res = await fetch(${API}/${category}, { method, ...send })
```

```
const add = document.querySelector('#add')
```

```
category.addEventListener('input', async ({ target }) => {
  add.style.display = 'block'
  await populateProducts(target.value)
})
```

```
add.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e
  const payload = {
    name: target.name.value,
    rrp: target.rrp.value,
    info: target.info.value
  }
  await populateProducts(category.value, 'POST', payload)
  target.reset()
})
```
---

## `data-utils.js`

Created a file in the **mock-srv/plugins** folder called `data-utils.js`

The **fastify-plugin** module is used to de-encapsulate a plugin. 

We pass the exported plugin function into `fp` to achieve this. 

What this means is, any modifications we make to the fastify instance will apply across our service. If we did not pass the exported function to **fastify-plugin** any modifications to the fastify instance that is passed to it would only apply to itself and any descendent plugins that it could register. 

Since the plugin is loaded as a sibling to our routes we need to indicate we want our plugin to apply laterally. 

For more information on the **Fastify plugin system** see [Fastify's Documentation](https://www.fastify.io/docs/v3.9.x/Plugins/ " fastify-plugin").

---

### `confectionery/index.js && electronics/index.js`.

Modified our two routes to handle POST requests and use this new request decorator(`fastify.decorateRequest(...)`) from `data-utils.js`

- `mock-srv/routes/confectionery/index.js`
- `mock-srv/routes/electronics/index.js`


---

## Konsole command for run App && Server

> !!! For this example will work correctly you should do instructions from branch [**Chapter-2_4-Mocking_GET_Routes**](https://github.com/MOgorodnik/LinuxFoundationX_LFW111x/tree/Chapter-2_4-Mocking_GET_Routes "Mocking_GET_Routes")
>
> Install **fastify** module, add changes in files, etc.

**App** --> **root** directory
```
serve static -p 3003
```
**Server**  -->  **mock-srv** directory
```
npm run dev
```