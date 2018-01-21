function assignProp(properties) {
    let obj = {};
    for (let i = 0; i < properties.length; i+=2) {
        obj[properties[i]]=properties[i+1];
    }
  console.log(obj);
}

assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProp(['ssid', '90127461', 'status', 'admin', 'expires', '600']);