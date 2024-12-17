const http = require('node:http')

const users = [
    {name:"Ashot", age:22},
    {name:"Ano", age:31},
    {name:"Vachik", age:33}
]

const server = http.createServer((req, res) => {
    const method = req.method

    if(method === 'GET') {
        res.writeHead(200, {"content-type" : "application/json"}) 
        res.end(JSON.stringify({ "message": "Welcome to the backend server" }))
        console.log('GET')
    }

    if(method === 'POST'){
        console.log('POST')
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "You sent a POST request" } ) )
    }

    if(method === 'PUT'){
        console.log('PUT')
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "You sent a PUT request" } ) )
    }

    if(method === 'PATCH'){
        console.log('PATCH')
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "You sent a PATCH request" } ) )
    }

    if(method === 'DELETE'){
        console.log('DELETE')
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "You sent a DELETE request" } ) )
    }

    if(method === 'OPTIONS'){
        console.log('OPTIONS')
        res.writeHead(200, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "You sent a OPTIONS request" } ) )
    }

    if(method === 'HEAD'){
        console.log('HEAD')
        res.writeHead(405, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "Not allowed requst" } ) )
    }
})

const PORT = 3000
server.listen(PORT, '0.0.0.0', () => {
    console.log('start')
})