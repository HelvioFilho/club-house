import { constants } from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import LobbySocketBuilder from "./util/lobbySocketBuilder.js";
import View from "./view.js";

const user = {
  img: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-512.png',
  username: 'Hélvio ' + Date.now()
}

const socketBuilder = new LobbySocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.lobby
})

const dependencies = {
  socketBuilder,
  user,
  view: View
}
LobbyController.initialize(dependencies)
  .catch(error => {
    alert(error.message);
  })