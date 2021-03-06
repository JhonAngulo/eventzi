const FormatDate = (fullDate) => {
  if (fullDate === null) {
    return ''
  }
  fullDate = fullDate.split('T')
  let time = fullDate[1].split('.')
  time = time[0].split(':')

  const formated = fullDate[0] + ' / ' + time[0] + ':' + time[1]
  return formated
}
const PostFormat = (fullDate) => {
  fullDate = fullDate.split('T')

  const formated = fullDate[0] + ' ' + fullDate[1] + ':00'
  return formated
}
const TalkDay = (fullDate) => {
  fullDate = fullDate.split('T')

  const formated = fullDate[0]
  return formated
}
const TalkTime = (fullDate) => {
  fullDate = fullDate.split('T')
  let time = fullDate[1].split('.')
  time = time[0].split(':')

  const formated = time[0] + ':' + time[1]
  return formated
}

export default FormatDate
export { PostFormat, TalkDay, TalkTime }
