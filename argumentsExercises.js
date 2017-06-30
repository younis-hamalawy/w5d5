function sum (...args) {
  let result = 0;
  args.forEach((el) => (result += el));
  return result;
}

// console.log(sum(1,2,3,4,5,6));
Function.prototype.myBind = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};
