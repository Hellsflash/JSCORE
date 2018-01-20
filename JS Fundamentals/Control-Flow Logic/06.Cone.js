function cone(radius,height) {
    let slent =Math.sqrt(height*height+radius*radius);
    let volume =(Math.PI*radius*radius*height)/3;
    let surfArea =(Math.PI*radius*slent)+(Math.PI*radius*radius);

    console.log("volume = "+volume.toFixed(4));
    console.log("area = "+surfArea.toFixed(4));
}

cone(3.3,7.8);