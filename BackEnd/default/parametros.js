/**
 * 
 * Retornando em funcoes 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * 
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns x + y
 */
function soma(x = 0, y = 0) {
    return x + y;
}

/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function multiply(x = 1, y = 1) { // em caso de multip a gente passa 1.
    return x * y
}
console.log(multiply(soma(1,1) , soma(3,3)));

