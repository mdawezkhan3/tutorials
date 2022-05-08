let finalObj = {};
let magic = (obj, parent) => {
  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObj[parent+"_"+key] = obj[key];
    }
  }
}

let user = {
  name: "Akshay",
  address: {
    personal: {
      city: "Dehradun",
      area: "Majra"
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hitech"
      }
    }
  }
}