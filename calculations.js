export function add(x, y){
    return(x + y);
}

export function subtract(x, y){
    return(x - y);
}

export function multiply(x, y){
    return(x * y);
}

export function divide(x, y){
    return(x / y);
}

export function modulo(x, y){
    return(x % y);
}

export function integerDivision(x, y){
    return(Math.floor(x / y));
}

export function hypotenuse(x, y){
    return(Math.sqrt((x * x) + (y * y)));
}

export function volOfSphere(x){
    return((4 / 3) * Math.PI * Math.pow(x, 3));
}

export function volOfCylinder(r, h){
    return(Math.PI * Math.pow(r, 2) * h);
}

export function areaOfTriangle(x, y){
    reurn((x * y) / 2);
}