import { constants } from "../../_shared/constants.js"
import RoomController from "./controller.js"
import RoomSocketBuilder from "./util/roomSocket.js"

const room = {
  id: '0001',
  topic: 'Js Expert'
};

const user = {
  img: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-512.png',
  username: 'Hélvio Filho' + Date.now(),
};

const roomInfo = { user, room };

const socketBuilder = new RoomSocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room
});

const dependencies = {
  socketBuilder,
  roomInfo
}

await RoomController.initialize(dependencies);