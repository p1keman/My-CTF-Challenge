function a(){
    console.log("fff.mjsxxx");
}
//cjs风格 需要把文件后缀改成js
module.exports ={
    a
}



//mjs风格，需要把文件后缀改成mjs
// export default a
// export const b= function b(){
//     console.log("fff.mjsxxx");
// }



//还可以在package.json文件中增加下面的字段
// "exports"：{ 
//     "require": "./index.js"，
//     "import": "./esm/wrapper.js" 
// }