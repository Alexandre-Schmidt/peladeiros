import { v4 as uuidv4 } from "uuid";

export function createID() {
  const id = uuidv4();

  return id;
}
