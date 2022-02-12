'use strict'
// start
// +++
const data = [
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]
// end

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // start
    // ---
    // return [
    //   {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
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