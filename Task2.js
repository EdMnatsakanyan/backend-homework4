const http = require('node:http')

const server = http.createServer((req, res) => {
    const method = req.method

    if(method === 'GET') {
        const htmlData = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test server</title>
        </head>
        <body>
            <h1>Welcome to My HTTP Server</h1>
            <p>Server return html</p>
        </body>
        </html>
        `

        res.writeHead(200, {'content-type':'text/html'})
        res.end(htmlData)
    } else {
        res.writeHead(405, {"content-type" : "application/json"})
        res.end( JSON.stringify( { "message": "Not allowed requst" } ) )
    }
})

const PORT = 3000
server.listen(PORT, '0.0.0.0', () => {
    console.log('start')
})