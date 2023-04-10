export function createID() {
  const max = 999;
  const id = Math.floor(Math.random() * max);

  return id;
}
