# Week assignment - Socket.io

App is divided to 2 components: client, server..

Server 
 - websocket routes:
    - add room - sends note to add connected clients to register a new room
    - join room - assign user an other room
    - message - sends message to all users assigned to given room

Client
    - asks you for a username in prompt form
    - it sends message notifying other that you connected, sets "default" room as your current
    - now you can send messages
    - now you can create rooms and switch there
        - you always have only one room active, that means that content in other channels in not changed until you switch the room back



Assignment task 5:
Creating new namespaces means creating new endpoint, which can communicate differently with client, e.g. setting up different listeners, altought it is both running on the same WebSocket connection. 

Rooms are parts of namespaces and if client connects to a namespace, he can't use other namespaces rooms.


Assignment task 6:
I will definitely implement chatting between users. 