// 1- "elma, armut, muz, çilek" elemanlarına sahip bir dizi oluşturun.

//let fruits = ["elma", "armut", "muz", "çilek"]

// 2- dizi kaç elemanlıdır?

//let sonuc = fruits.length;

// 3- dizinin ilk ve son elemanı nedir?

//console.log(fruits[0]);
//console.log(fruits[fruits.length - 1])

// 4- elma dizinin bi elemanı mıdır?

//sonuc = fruits.indexOf("elma");

// 5- kiraz meyvesini listenin sonuna ekleyiniz.

//sonuc = fruits.push("kiraz");

// 6- dizinin son 2 elemanını siliniz.

//sonuc = fruits.splice(3, 2)

// 7- aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
    /*
        öğrenci 1: yiğit bilgi  2010  (70,60,80)
        öğrenci 2: ada bilgi  2012  (80,80,90)
        öğrenci 3: ahmet turan  2009  (60,60,70)
    */
//console.log(fruits);
//console.log(sonuc);

/*let ogrenciler = ["yigit bilgi", "ada bilgi", "ahmet turan"];
let yigity = (2010);
let aday = (2012);
let ahmety = (2009);
let yigitp = (70, 60, 80);
let adap = (80, 80, 90);
let ahmetp = (60, 60, 70);
*/   
        //  UYGULAMA

let ogr1 = [];
ogr1[0] = "yiğit bilgi"; 
ogr1[1] = 2010;
ogr1[2] = 70 + 60 + 80;

let ogr2 = [];
ogr2[0] = "ada bilgi"; 
ogr2[1] = 2012;
ogr2[2] = 80 + 80 + 90;
    
let ogr3 = [];
ogr3[0] = "ahmet turan"; 
ogr3[1] = 2009;
ogr3[2] = 60 + 60 + 70;


let sonuc1 = (2022 - ogr1[1])
let sonuc2 = (2022 - ogr2[1])
let sonuc3 = (2022 - ogr3[1])

let sonuc4 = (ogr1[2] / 3);
let sonuc5 = (ogr2[2] / 3);
let sonuc6 = (ogr3[2] / 3);

let yigit = (`Adı ${ogr1[0]}, yaşı ${sonuc1}, ortalaması ${sonuc4} `);
let ada = (`Adı ${ogr2[0]}, yaşı ${sonuc2}, ortalaması ${sonuc5} `);
let ahmet = (`Adı ${ogr3[0]}, yaşı ${sonuc3}, ortalaması ${sonuc6} `);








console.log(yigit);
console.log(ada);
console.log(ahmet);

/*
console.log(sonuc);
console.log(sonuc1);
console.log(sonuc2);
console.log(sonuc3);
console.log(sonuc4);
console.log(sonuc5);
console.log(sonuc6);
*/
