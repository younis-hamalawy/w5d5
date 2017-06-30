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

function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((a, b) => a + b, 0);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

// const csum = curriedSum(4);
// console.log(csum(5)(30)(20)(1));


Function.prototype.curry = function (numArgs, ...curryArgs) {
  let things = curryArgs;
  let _result = (...args) => {
    things = things.concat(args);
    if (things.length >= numArgs) {
      return this(...things);
    } else {
      return _result;
    }
  };
  return _result;
};

function addFive(one,t,th,f,fi) {
  return one + t + th + f + fi;
}
let curriedaddFive = addFive.curry(5, 9);
curriedaddFive(5,6);
console.log(curriedaddFive(3,100,7));
// let m = curriedSum.curry(4)();
//
// console.log(m(5)(30)(20)(1));
