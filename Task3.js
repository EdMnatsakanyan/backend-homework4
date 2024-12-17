const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')

 const server = http.createServer((req, res) => {
    const method = req.method

    if(method === 'GET'){
        const reqFile = path.basename(req.url)
        try {
            const readFile = fs.readFileSync('./' + reqFile + '.JSON', 'utf-8')
            res.writeHead(300, {'content-type': 'application/json'})
            res.end(readFile)
        } catch {
            res.writeHead(404, {'content-type': 'application.json'})
            res.end(JSON.stringify({message:'NOT FOUND'}))
        }
    }

    if(method === 'POST'){
        const reqFile = path.basename(req.url)

        let readFile
        try {
            readFile = fs.readFileSync('./' + reqFile + '.JSON', 'utf-8')
            readFile = JSON.parse(readFile)
        } catch {
            res.writeHead(404, {'content-type': 'application.json'})
            res.end(JSON.stringify({message:'NOT FOUND'}))
        }

        let data = ''
        req.on('data', (chunk) => data+=chunk)

        req.on('end', () => {
            try {
                const parsed = JSON.parse(data)
                readFile.users.push(parsed)
                fs.writeFileSync('./users.JSON',JSON.stringify(readFile))
                res.writeHead(200, 'application/json')
                res.end(JSON.stringify({message:'OK'}))
            } catch {
                res.writeHead(400, {'content-type': 'application.json'})
                res.end(JSON.stringify({message:'NOT JSON FORMAT'}))
            }
        })
    }
 })

 const PORT = 3000
 server.listen(PORT, '0.0.0.0', () => {
    console.log('start')
 })