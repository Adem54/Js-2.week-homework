// 10- Vehicle listesini kullanarak bir reklam cumlesi olusturun. Mesela soyle bir sey loglasin: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
// Cumleyi dilbigisine uygun olusturmaniz gerekiyor. Cogul kelimelerin sonuna 's' gelmesi, son kelime haric listedeki diger kelimelerin sonuna virgul, son kelimenin sonuna ise nokta gelmesi gibi..

let vehicles = ["motorbike", "bike", "caravan", "limuzin", "jeep"];
let reklam = []; //for döngüsü içerisinde dönen bir sonucu ancak dizi içine döndürebiliriz yoksa öbür türlü ancak en son alınan değeri görürüz
let sonuc1;
let sonuc2;
for (let i = 0; i < vehicles.length; i++) {
  const element = vehicles[i];
  sonuc1 = element + "s";
  sonuc2 = element + "s.";
  i !== vehicles.length - 1 ? reklam.push(sonuc1) : reklam.push(sonuc2);
}
console.log("Amazing Joe's Garage, we service " + reklam);

// 11-Eger vehicle listesine yeni bir arac eklerseniz 10. soruda olusturdugunuz koda dokunmadan ayni cumle yapisini loglayabilir misiniz?
