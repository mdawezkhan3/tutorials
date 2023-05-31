const finalObj = {};
const magic = (obj, parent) => {
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

const resultObj = {
  user_name: 'Akshay',
  user_address_personal_city: 'Dehradun',
  user_address_personal_area: 'Majra',
  user_address_office_city: 'Hyderabad',
  user_address_office_area_landmark: 'Hitech'
}