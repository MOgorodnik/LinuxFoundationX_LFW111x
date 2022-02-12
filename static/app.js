const API = 'http://localhost:3000'

// start
// ---
// const populateProducts = async (categoryName) => {
// +++
const populateProducts = async (categoryName, method = 'GET', payload) => {
// end
  const products = document.querySelector('#products')
  products.innerHTML = ''
  // start
  // +++
  const send = method === 'GET' ? {} : {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }
  // ---
  // const res = await fetch(`${API}/${categoryName}`)
  // +++
  const res = await fetch(`${API}/${categoryName}`, { method, ...send })
  // end
  const data = await res.json()
  // **
  for (const product of data) {
    const item = document.createElement('product-item')
    for (const key of ['name', 'rrp', 'info']) {
      const span = document.createElement('span')
      span.slot = key
      span.textContent = product[key]
      item.appendChild(span)
    }
    products.appendChild(item)
  }
}
  
const category = document.querySelector('#category')
// start
// +++
const add = document.querySelector('#add')
// end

category.addEventListener('input', async ({ target }) => {
  // start
  // +++
  add.style.display = 'block'
  // end
  await populateProducts(target.value)
})

// start
// +++
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
// end

customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})