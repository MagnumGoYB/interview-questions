/* eslint-disable no-unused-vars */

function debounce(fn, delay = 200) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function throttle(func, wait) {
  let previous = 0
  return function () {
    const now = Date.now()
    const context = this
    const args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
