//es6导入cjs，需要改本文件后缀为mjs，要不然无法识别import静态导入
// import packageMain from './fff.js';
// packageMain.a()


//cjs导入es6，文件后缀js
// import("./fff.mjs").then(b=>console.log(b))
// (async () => {
//     let fff=await import('./fff.js');
//     console.log(fff.b())
//   })();

function CustomError() {
    const oldStackTrace = Error.prepareStackTrace
    try {
      Error.prepareStackTrace = (err, structuredStackTrace) => structuredStackTrace
      Error.captureStackTrace(this)
      this.stack
    } finally {
      Error.prepareStackTrace = oldStackTrace
    }
}
function trigger() {
    const err = new CustomError()
    for (const x of err.stack) {
      console.log(x.getFunction()+"")
    }
}
trigger()