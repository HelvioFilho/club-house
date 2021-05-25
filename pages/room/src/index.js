import { constants } from "../../_shared/constants.js";
import RoomController from "./controller.js";
import RoomSocketBuilder from "./util/roomSocket.js";
import View from "./view.js";

const urlParams = new URLSearchParams(window.location.search);
const keys = ['id', 'topic'];
const urlData = keys.map((key) => [key, urlParams.get(key)]);

const user = {
    img: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-512.png',
    username: 'Hélvio ' + Date.now()
}

const roomInfo = {
    room: { ...Object.fromEntries(urlData) },
    user
}

const peerBuilder = new PeerBuilder({
    peerConfig: constants.peerConfig
})

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
});

const roomService = new RoomService({
    media: Media
})

const dependencies = {
    view: View,
    socketBuilder,
    roomInfo,
    roomService,
    peerBuilder
};

RoomController.initialize(dependencies)
    .catch(error => {
        alert(error.message);
    })