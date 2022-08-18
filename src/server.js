import express from 'express'

class startup{
    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }
    config(){
        this.app.set('port', process.env.PORT || 3000)
    }
    routes(){
        this.app.get('/', (req, res) => res.send('chat.io'))
    }
    start(){
        this.app.listen(this.app.get('port'), () => console.log('Server on port', this.app.get('port')))
    }
}

const server = new startup()
server.start();