const docPrincipal = require("./EjercicioPolinomio");



// 1.el valor de A debe ser distinto de cero 
test("el valor de A debe ser distinto de cero ", () => {
    expect(funcionPolinomio(0,2,3));
});

// 2.el valor ingresado no es un numero 

test("el valor ingresado no es un numero", () => {
    expect(funcionPolinomio("a",2,3));
});

// 3. el discriminante negativo 
test("el discriminante negativo  ", () => {
    expect(funcionPolinomio(1,1,1));
});


// 

// delta negativo 

//4. a=1 b=3 c=2 

test("a=1 b=3 c=2  ", () => {
    expect(funcionPolinomio(1,3,2));
});

//5. a=5 b=-20 c=15 

test("a=5 b=-20 c=15  ", () => {
    expect(funcionPolinomio(1,3,2));
});
//5. no se permitira datos mayores a 100 

test("no se permitira datos mayores a 100  ", () => {
    expect(funcionPolinomio(101,3,2));
});

