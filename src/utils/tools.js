// 防抖
export const debounce = (fn, delay = 500) => {
  // timer是在闭包中的 => 下面的if(timer)
  // 这样不会被外界轻易拿到 => 即不对外暴露
  // 我们在外面使用不需要关心
  // 同时也是在debounce的作用域中
  // 闭包的使用场景：函数当做返回值或者参数传入
  let timer = null

  // 函数作为返回值，这就形成闭包了
  return function () {
    // 这里面的timer需要在它定义的作用域往上寻找
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      // 触发change事件
      // 第一个参数是改变this指向
      // 第二个参数是获取所有的参数
      // apply第二个参数开始，只接收数组
      // fn函数在执行的时候，argument传进来
      // debounce返回的函数可能会传进来一些参数
      // 面试使用fn()也没问题
      // fn()
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments)

      // 清空定时器
      timer = null
    }, delay)
  }
}
