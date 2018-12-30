import RoomService from '../services/RoomService';
import { sendToUser } from './WebSocketController';

async function messageReceived(data, user, channel) {
  const room = await RoomService.getRoom(data.roomName);
  if (room) {
    const users = room.users.filter(roomUser => roomUser.cuid === user.cuid);

    if (!users.empty()) {
      room.users.forEach((user) => {
        sendToUser(user, data, channel);
      });
    }
  }
}

export default () => messageReceived;
