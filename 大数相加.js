const a = '9007199254740991'
const b = '1234567899999999999'

function add(a, b) {
  // 取两个数字的最大长度
  const maxLength = Math.max(a.length, b.length)
  // 用 0 补齐长度
  a = a.padStart(maxLength, 0) // "0009007199254740991"
  b = b.padStart(maxLength, 0) // "1234567899999999999"
  // 定义加法过程中需要用到的变量
  let t = 0
  let f = 0 // 进位
  let sum = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    t = parseInt(a[i]) + parseInt(b[i]) + f // 对位相加 有进位加 1
    f = Math.floor(t / 10) // 相加结果如果超过 10 进位 1
    sum = (t % 10) + sum // 相加结果取余为当前下标结果
  }
  if (f === 1) { // 如果进位则在结果前加 1
    sum = '1' + sum
  }
  return sum
}

console.log(add(a, b))
