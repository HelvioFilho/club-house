import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected', user))
  .setOnUserDisconnected((user) => console.log('user disconnected', user))
  .build()

const room = {
  id: Date.now(),
  topic: 'Js Expert'
}

const user = {
  img: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-512.png',
  username: "Hélvio Filho",
}

socket.emit(constants.events.JOIN_ROOM, {user, room})