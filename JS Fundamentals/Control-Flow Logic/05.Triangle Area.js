function triangleArea(a,b,c) {
    let parameter =(a+b+c)/2;
    let area =Math.sqrt(parameter*(parameter-a)*(parameter-b)*(parameter-c));
    console.log(area);
}
triangleArea(2,3.5,4);