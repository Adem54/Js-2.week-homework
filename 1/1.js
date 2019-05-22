let myString = "hello,this,is,a,difficult,to,read,sentence";

//1.1 Stringi dosyaniza ekleyin ve loglayin.
console.log(myString);

//1.2 myString in uzunlugunu loglayin.
let uzunluk = myString.length;
console.log(uzunluk);

//1.3 Virguller cumlenin okunmasini zorlastiriyor. Virgullerin kaldirilip yerine nasil bosluk konur, arastirip cozmeye calisin.
//1.4 Yukaridaki islemi yapabildiyseniz yeni myString degerinizi yazdirin.

myString = myString.replace(/,/g, " ");
console.log(myString);

//2.1 Varolan diziye Ali'nin favori hayvani 'turtle' ekleyecek bir kod yazin.
// 2.2 Yeni diziyi yazdirin!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");
console.log("Alinin favori hayvanı ", favoriteAnimals[3], " dir!!");

// 2.3 Simdi de Mehmet'in favori hayvani olan 'meerkat' i diziye ekleyin fakat 'blowfish' ile 'capricorn'. arasina eklemeniz

favoriteAnimals.splice(1, 0, "meerkat"); //1.elemandan başla 0 eleman sil ve oraya meerkat ekle demiş oluyoruz
console.log(favoriteAnimals);

// 2.5 Yeni dizinin uzunlugunu su sekilde loglayin: 'Dizinin uzunlugu: ' ....

// let uzunluk = favoriteAnimals.length; Buna aktararak yazdırınca sonuç vermiyo neden olabilir acaba?????
// console.log(uzunluk);
console.log("Dizinin uzunluğu: ", favoriteAnimals.length, "'tir.");

//2.6 Yusuf, dizideki 'giraffe' sevmiyor, bunu diziden silin, cikarin.
//2.7 Yeni olusan diziyi tekrar loglayin.

favoriteAnimals.splice(3, 1); // 3.elemandan başla 1 eleman sil demiş oluyoruz
console.log(favoriteAnimals);

// 2.8 Simdi ornegin 'meerkat' hayvanini sevmiyorsunuz ve diziden cikarmak istiyorsunuz. Fakat kacinci sirada oldugunu bilmiyorsunuz. Adini bildiginiz bu hayvani diziden nasil cikarirsiniz?

for (var i = 0; i < favoriteAnimals.length; i++) {
  const element = favoriteAnimals[i];
  if (element === "meerkat") {
    favoriteAnimals.splice(i, 1);
    console.log(favoriteAnimals);
  }
}

//Tekrar ekliyorum 'meerkat' i dizimize eski yerine  ve bu yöntemle de tekrar meerketid di bulup siliyorum
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
var indis = favoriteAnimals.indexOf("meerkat");
console.log(indis);
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);

//2.9 'meerkat' index numarasini su sekilde loglayin: _'Baktiginiz hayvan su indexte bulunuyor: '.....
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log(
  "Baktığınız hayvan şu indekste bulunuyor: ",
  favoriteAnimals.indexOf("meerkat")
);

// More JavaScript

//1-3 tane arguman (parametre) alan bir fonksiyon olusturun. Uc parametreyi toplasin ve donsun

function test(a, b, c) {
  return a + b + c;
}
let netice1 = test(2, 6, 8);
console.log(netice1);

//2-Parametre olarak color degeri alan colorCar isminde bir fonksiyon olusturun. Aldigi renk parametresine gore ornegin soyle loglasin: 'a red car'.

let colorCar = function(color) {
  return "a " + color + " car";
};

console.log(colorCar("green"));

//3-Parametre olarak bir object alan bir fonksiyon olusturun. Fonksiyonunuz aldigi object in property (key) lerini ve degerlerini (values) loglasin.

function test1(object) {
  var sonuc =
    "Properties:  " +
    Object.keys(object) +
    "- Values:  " +
    Object.values(object);
  console.log(sonuc);
}

let newObject = {
  name: "Ahmet",
  surname: "Kel",
  year: 1982
};

test1(newObject);

//4-color ve code diye iki parametre alan bir fonksiyon olusturun. Code, motosiklet icin 1, araba icin 2 olsun. Fonksiyon vehicleType("blue", 2) bu sekilde cagirildiginda 'a blue motorbike' loglasin ornegin.

let test2 = function(color, code) {
  if (code === 1) {
    console.log("a ", color, " motosiklet");
  } else {
    console.log("a ", color, "araba");
  }
};

test2("yellow", 1); //Eğer text türünden bir paramtetre vermişsek fonksiyona parametre yazarken tırnağa alınmaz ama o fonksiyonu kullanırken yazacağımız textleri tırnak içine almalıyız yoksa fonksiyon tanımaz yazdığımız ı parametre olarak

/* 5- Asagidaki ifadeyi if kullanmadan tek bir satirda nasil yazabilirsiniz??

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}    */

//Ternary opeations
3 === 3 ? console.log("yes") : console.log("no");

// 6-Bir vehicle fonksiyon olusturun daha once oldugu gibi fakat age adinda bir parametre daha alsin: Boylece vehicle("blue", 1, 5) cagirdigimizda 'a blue used car' seklinde loglasin. (Yasi 0 ise new demeli).

function vehicle(color, code, age) {
  if (code === 1 && age === 0) {
    console.log("a ", color, " new motorbike");
  } else if (code === 1 && age !== 0) {
    console.log("a ", color, " used motorbike");
  } else if (code === 2 && age === 0) {
    console.log("a ", color, " new car");
  } else {
    console.log("a ", color, " used car ");
  }
}

vehicle("green", 2, 3);

//7-Bir arac listesi yapin. "motorbike", "caravan", "bike", veya daha fazla ekleyebilirsiniz.

let vehicles = ["motorbike", "bike", "caravan", "limuzin", "jeep"];
//8-Listenin 2. elemanini nasil elde edersiniz?
console.log(vehicles[1]);

// 9-  6.sorudaki vehicle fonksiyonunu degistirin. Fonksiyonda code yerine 7. sorudaki listeyinin indexlerini kullanin. Mesela vehicle("green", 3, 0) cagirdigimizda "a green new bike" loglasin.

function vehicle1(color, code, age) {
  if (age === 0) {
    console.log("a ", color, " new", vehicles[code]);
  } else {
    console.log("a ", color, " used", vehicles[code]);
  }
}

vehicle1("cyan", 1, 0);

// 10- Vehicle listesini kullanarak bir reklam cumlesi olusturun. Mesela soyle bir sey loglasin: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
// Cumleyi dilbigisine uygun olusturmaniz gerekiyor. Cogul kelimelerin sonuna 's' gelmesi, son kelime haric listedeki diger kelimelerin sonuna virgul, son kelimenin sonuna ise nokta gelmesi gibi..

let vehicles1 = ["motorbike", "bike", "caravan", "limuzin", "jeep"];
vehicles1 = ["motorbike", "bike", "caravan", "cooper", "limuzin", "jeep"]; //Buraya 11.soru için cooper diye bir araç ekledik koda hiç dokunmadan direk ekleme yapınca araç içerisinde göremiyoruz
let reklam = []; //for döngüsü içerisinde dönen bir sonucu ancak dizi içine döndürebiliriz yoksa öbür türlü ancak en son alınan değeri görürüz
let sonuc1;
let sonuc2;
for (let i = 0; i < vehicles1.length; i++) {
  const element = vehicles1[i];
  sonuc1 = element + "s";
  sonuc2 = element + "s.";
  i !== vehicles1.length - 1 ? reklam.push(sonuc1) : reklam.push(sonuc2);
}
console.log("Amazing Joe's Garage, we service " + reklam);

// 11-Eger vehicle listesine yeni bir arac eklerseniz 10. soruda olusturdugunuz koda dokunmadan ayni cumle yapisini loglayabilir misiniz?
// İçerisine kendimiz  coooper diye bir araç türü ekliyoruz ama ekleme işlemini kodları yazdığımız kısmın üzerinde ekliyoruz ki  eklediğimiz dizi den sonra kod okusun ve sonuca yansısın

console.log("Amazing Joe's Garage, we service " + reklam);
// 12-Bos bir object olusturun.

let myObject = {};

// 13-Takim arkadaslarinizi iceren bir object olusturun.

let myTeamFriends = {
  designer: "Ahmet",
  developer: "Kemal",
  editor: "Serkan",
  writer: "Hakan"
};

// 14- Takim arkadaslarinizin nereli oldugunu belirten sehir isminde bir property ekleyin

myTeamFriends.city = "Ankara";
console.log(myTeamFriends);

// 15-Asagidaki dizilerin esit olup olmadigini == ve === ile karsilastiran bir kod yazin.

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

if (x == y) {
  console.log("x ye değer açısından eşittir");
} else if (x === y) {
  console.log("x ye ye hem değer hem veri türü açısından eşittir");
} else if (z == x) {
  console.log("z x e değer açısından eşittir");
} else if (z == y) {
  console.log("z y'ye ye değer açısından eşittir ");
}

//İlk aklımıza gelen şey (x == y) veya (x === y) karşılaştırması oluyor. Fakat bu kullanılabilir bir syntax değil. Bunun temel sebebi, x ve y'nin temsil ettiği verilerin bir tür yapıya sahip olmasıdır.

//NOT: Javascript'teki mantık operatörleri, sayısal ve string değişkenlerinin birbiriyle ilişkilerini kontrol edebilir
//Çıkarım: Bu durumda kontrolünü yapacağımız veri yapısının string veya sayı formuna indirgenmiş olması gerekiyor.
//NOT: Javascript'te birbirine eşit sayıda elemanı olan ve sırası ile her elemanı birbirine eşit olan arrayler birbirine eşittir.
//Çıkarım: Her elemanın birbirinine eşitliği kontrol edilirse, 2 array'in birbirine eşit olduğu belirlenebilir.
//Buna göre ilk akla gelen çözüm; 2 array'in eleman sayısı birbirine eşitse, bir döngü ile elemanların her birinin birbirine eşitliğini kontrol et;

function esitmi(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    var durum = true;

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        durum = false;

        break;
      }
    }
  } else {
    durum = false;
  }
  return durum;
}

console.log(esitmi(x, z));

ab1 = ["ahmet", 23, 45];
ab2 = ["Samet", 34, 56];
console.log(esitmi(ab1, ab2));

//Every () yöntemi, dizideki tüm öğelerin sağlanan işlev tarafından uygulanan testi geçip geçmediğini test eder. Bir Boolean değeri döndürür.
//Dizi içindeki sayıların 40 tan küçük olup olmadığını kontrol ediyor
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//Array in fonksiyon içinde kullanılması element dizi içindeki elemanlar,index dizi içindeki indis dizi sırası,array ise dizi

function isBigEnough(element, index, array) {
  return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

//Bu da every ile iki dizinin eşit olup olmadığının kontrol edilmesi
var array1 = [4, 8, 9, 10];
var array2 = [4, 8, 9, 10];

var is_same =
  array1.length == array2.length &&
  array1.every(function(element, index) {
    //element dizi içerisindeki eleman demektir index ise elemanların indisleri demektir
    return element === array2[index];
  });
console.log(is_same);

//Bu şekilde de karşılaştırabiliriz
function _esitmi(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      //Burada biz eğer eşit demiş olsak yani elemanların hepsini eşit mi diye karşılaştırırsak return ile sonuç dönünce return ün başka görevi de işlemi sonlandırmaktı ondan dolayı daha ilk doğrusunda sonucu döndürüp işlemi sonlandırır ondan dolayı biz eşit mi değilde eşit değil mi üzerinden gitmliyiz ki ilk yanlışta işlemi sonlandırsın
      return false;
    }
  }
  return true;
}

console.log(_esitmi(array1, array2));

// 16-o2 yi degistirince o3 degisir mi degismez mi, gosterin. o1 degistirdigimizde o3 degisir mi degismez mi gosterin.
//Bu atama sirasi (o3 = o2 or o2 = o3) onemli??????Buna bakalım

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.foo = "bak";
o2.faa = "car";
o1.foo = "bal";
console.log(o2);
console.log(o3);
console.log(o1);

// Asagidaki kod ne dondurur? (ve neden?)

let bar = 42;
console.log(typeof bar);
console.log(typeof "number");
console.log(typeof typeof bar);
typeof typeof 1 === "string"; // typeof always returns a string
