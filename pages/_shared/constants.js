export const constants = {
  socketUrl: 'http://localhost:3000',
  socketNamespaces: {
    room: 'room',
    lobby: 'lobby'
  },
  peerConfig: Object.values({
    id: undefined,
    // config: {
    //     port: 9000,
    //     host: 'localhost',
    //     path: '/'
    // }
  }),
  pages: {
    lobby: '/pages/lobby',
    login: '/pages/login',
  },
  events: {
    USER_CONNECTED: 'userConnection',
    USER_DISCONNECTED: 'userDisconnection',

    JOIN_ROOM: 'joinRoom',
    LOBBY_UPDATED: 'lobbyUpdated',
    UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

    SPEAK_REQUEST: 'speakRequest',
    SPEAK_ANSWER: 'speakAnswer'
  },
  firebaseConfig : {
    apiKey: "AIzaSyAylUr6QGoLkDMIqartaxYlGwjmuE4vSLU",
    authDomain: "club-house-e4468.firebaseapp.com",
    projectId: "club-house-e4468",
    storageBucket: "club-house-e4468.appspot.com",
    messagingSenderId: "447200190895",
    appId: "1:447200190895:web:8c8a8fb03c7453c7e1cf5a",
    measurementId: "G-6P0RRDH3SM"
  },
  storageKey: 'jsexpert:storage:user',
}