//İki dizinin eşit olup  olmadığının nasıl yapılacağı ile örnekler

var a = [1, 2, 6, 4];
var b = [1, 2, 3, 4];

function esitmi(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

function isBelowThreshold(element) {
  return element < 40;
}

var array1 = [1, 30, 39, 29, 50, 13];

console.log(array1.every(isBelowThreshold));

function kıyasla(deger) {
  return deger < 20;
}

var a1 = [2, 4, 6, 7, 12];
var a2 = [2, 4, 6, 5, 12];

console.log(a1.every(kıyasla));

//Direk bu şekilde de kıyasalayabiliriz kıyaslayacağımız nesneleri hemen yanda oluşturuyoruz
console.log([3, 4, 6, 7].every(x => x > 2));

//Şimdi de herhangi a2 dizisi ile herhangi bir dizinin elemanlarının teker teker eşit olup olmadığını test eden  fonksiyon oluşturalım
//Önceli

function dene1(element, index) {
  return element === a2[index];
}

console.log(a1.every(dene1));

//Ternary ile denedik

a1.length === a2.length && a1.every(dene1)
  ? console.log(
      "a1 ve a2 dizisinin elemen sayıları ve elemanları birbirine eşittir"
    )
  : console.log("a1 ve a2 dizisi birbirine eşit değildir");

//if ile kontrol ettik
if (a1.length === a2.length && a1.every(dene1)) {
  console.log(
    "a1 ve a2 dizisinin elemen sayıları ve elemanları birbirine eşittir"
  );
} else {
  console.log("a1 ve a2 dizisi birbirine eşit değildir");
}
