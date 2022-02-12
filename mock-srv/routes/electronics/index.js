'use strict'
// start
// +++
const data = [
  {id: 'A10', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The suckiest vacuum in the world.'},
  {id: 'A11', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'}
]
// end

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // start
    // ---
    // return [
    //   {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The suckiest vacuum in the world.'},
    //   {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'}
    // ]

    // +++
    return data
    // end
  })
  
  // start
  // +++
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
  // end
}