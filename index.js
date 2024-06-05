
const jsonServer = require('json-server')

const ChatServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3001 || process.env.PORT


ChatServer.use(middleware)
ChatServer.use(route)
ChatServer.listen(PORT,()=>{
    console.log(`Chat app Server Started at port ${PORT} and waiting for client request`);
})
