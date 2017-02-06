export const modifierFunc = (value) => {
  let m = value < 10 ? 1 : 0;
  return parseInt(((value - m) / 2) - 5)
}
