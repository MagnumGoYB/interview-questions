class Scheduler {
  constructor() {
    this.max = 2
    this.count = 0
    this.q = []
  }

  async add(promiseCreator) {
    if (this.count >= this.max) {
      await new Promise((resolve) => {
        this.q.push(resolve)
      })
    }
    this.count++
    const result = await promiseCreator()
    this.count--
    if (this.q.length > 0) {
      this.q.shift()()
    }
    return result
  }
}

const scheduler = new Scheduler()

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const addTask = (time, val) => {
  scheduler.add(() => {
    return timeout(time).then(() => {
      console.info(val)
    })
  })
}

addTask(3000, '1')
addTask(500, '2')
addTask(1000, '3')
addTask(200, '4')
addTask(1000, '5')
addTask(0, '6')
