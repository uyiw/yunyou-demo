export default {
  pxToRem(content) {
    if(!content) return;
    let reg = /([:|(]*)(\s*)([-|+\d+.*\d+]+)(px)/g;
    let str = content.replace(reg, (content, $1, space, $2) => {
      return $1 + space + (parseInt($2) / 75) + 'rem'
    })
    let regSpace = /(>)(\s)+(<)/g;
    str = str.replace(regSpace, (content, $1, space, $2) => {
      return $1 + $2;
    })
    return str
  }
}
