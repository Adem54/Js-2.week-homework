// İKi objeyi birbiri ile nasıl karşılaştırırız

// 16-o2 yi degistirince o3 degisir mi degismez mi, gosterin. o1 degistirdigimizde o3 degisir mi degismez mi gosterin.
//Bu atama sirasi (o3 = o2 or o2 = o3) onemli??????Buna bakalım

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

Object.compare = function(obj1, obj2) {
  //Loop through properties in object 1
  for (var p in obj1) {
    //Check property exists on both objects
    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

    switch (typeof obj1[p]) {
      //Deep compare objects
      case "object":
        if (!Object.compare(obj1[p], obj2[p])) return false;
        break;
      //Compare function code
      case "function":
        if (
          typeof obj2[p] == "undefined" ||
          (p != "compare" && obj1[p].toString() != obj2[p].toString())
        )
          return false;
        break;
      //Compare values
      default:
        if (obj1[p] != obj2[p]) return false;
    }
  }

  //Check object 2 for any extra properties
  for (var p in obj2) {
    if (typeof obj1[p] == "undefined") return false;
  }
  return true;
};

console.log(Object.compare(o1, o2));
console.log(Object.compare(o2, o3));
console.log(Object.compare(o1, o3));
