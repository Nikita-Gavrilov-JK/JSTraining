let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
  };
  
  alert( sum(1, 2) ); // 3


  let multi = function(a, b){
    let result = a * b;
    return result;
  };

  alert(multi(4, 5));