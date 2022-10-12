/*
//let urun1 = "iphone 12"; 
//let urun2 = "iphone 13";
//let urun3 = "iphone 13 pro";

let urunler = ["iphone 12","iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];
//  veya
urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 12000;
urun2[2] = "siyah";

let urun3 = [
    "iphone 13 pro",
    20000,
    ["siyah", "beyaz", "mavi"]
];

console.log(urun3[2]);
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
console.log(typeof urun3[2]);


console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${urunler[0]}-${urunler[0]}`);
console.log(`${urunler[1]}-${urunler[1]}-${urunler[1]}`);
console.log(`${urunler[2]}-${urunler[2]}-${urunler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]);
*/


//ARRAY METHODLARI
/*
let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string 

sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-");


// eleman silme
//sonuc = ogrenciler.pop();      // son eleman silinir ve silinen eleman geri döndürülür
//sonuc = ogrenciler.shift();    // ilk eleman silinir

// eleman ekleme
//sonuc = ogrenciler.push("sena");  // dizinin sonuna eleman eklenir
sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman ekler
*/
let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3);
sonuc = markalar1.splice(0, 0, markalar2);
sonuc = markalar1.splice(2, 1, "bmw", "audi");


console.log(sonuc);
console.log(markalar1);
