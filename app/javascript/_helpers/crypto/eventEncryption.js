import { encrypt } from "./tweetNACL";
import { newEvent } from "../Fetch";

export const encryptEvent = (event, privKey, creator_id) => {
  event.invites.forEach((invite) => {
    title = encrypt(privKey, event.title, invite.public_key);
    location = encrypt(privKey, event.location, invite.public_key);
    description = encrypt(privKey, event.description, invite.public_key);
    date = encrypt(privKey, event.date, invite.public_key);
    encryptedEvent = {
      title: title,
      location: location,
      description: description,
      date: date,
    };
    newEvent(encryptEvent, creator_id, setter);
  });
};
