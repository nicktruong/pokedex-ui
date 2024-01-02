// Since the API does not provide types' color
export const typeToColorMapper = new Map([
  ["grass", ["#9bcc50"]],
  ["poison", ["#b97fc9"]],
  ["fire", ["#fd7d24"]],
  ["water", ["#4592c4"]],
  ["bug", ["#729f3f"]],
  ["flying", ["#3dc7ef", "#bdb9b8"]],
]);

export function isDark(color: string) {
  const c = color.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 150) {
    return true;
  }
}
