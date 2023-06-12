
export function date (time) {
  const localDate = new Date(time)
  return localDate.toLocaleDateString()
}
