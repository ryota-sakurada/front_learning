const calcFactory = (val, ourputFn) => {
    return {
      plus: (target) => {
        const newVal = val + target;
        ourputFn(val, target, newVal)
      },
      minus: (target) => {
        const newVal = val - target;
        ourputFn(val, target, newVal)
      },
    };
  }

  const logOutput = (val, target, newVal) => {
    console.log(`${val} + ${target} = ${newVal}`);
  }
  const alertOutput = (val, target, newVal) => {
    alert(`${val} + ${target} = ${newVal}`);
  }
  
  const calc = calcFactory(10, alertOutput);
  calc.plus(5);
  calc.minus(3);

  const calc2 = calcFactory(10, logOutput);
  calc2.plus(5);
  calc2.minus(3);