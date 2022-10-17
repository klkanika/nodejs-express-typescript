import { Server, Socket } from 'socket.io'
import _ from 'lodash'
const LogGroup = "[WebSocket]"
class WebSocket {
  id: string
  broadcast?: _.DebouncedFunc<() => Promise<void>>
  io?: Server
  constructor() {
    this.id = Math.random().toString()

  }

  init = async (server: Express.Application) => {

    this.io = new Server(server, {
      cors: {
        origin: '*',
      }
    })
    const io = this.io
    console.log(LogGroup, 'Init Websocket')
    io.on('connection', (socket) => {
      console.log(LogGroup, 'Socket Connect', socket.id, io.sockets.sockets.size)
    })
  }

}
export const kdsSocket = new WebSocket()
export const initWebsocket = async (server: Express.Application) => {
  kdsSocket.init(server)
}
