const z = require('zod');

const create=z.object({
    title:z.string(),
    description:z.string()
})
const update=z.object({
    id:z.string()
})

module.exports={
    create:create,
    update:update
}