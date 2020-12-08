import { encrypt } from "./secretbox";
import { newEvent } from "../Fetch";

export const encryptEvent = (eventJson, key) => {
  encryptedEvent = encrypt(eventJson, privKey);
  newEvent(encryptedEvent, creator_id, setter);
};
