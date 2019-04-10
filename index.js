const {send} = require('micro')
const {router, get, post, put, del} = require('microrouter')

module.exports = router(
    get('/', (req, res) => "hello world"),
    get('/:id', (req, res)=>'123'),
    post('/', (req,res) => send( res,201,{message: 'Created'} ))
)
