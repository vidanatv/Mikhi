// copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/ka/g, "๐ฃ");
car = car.replace(/ku/g, "๐ค");
car = car.replace(/ga/g, "๐ฅ");
car = car.replace(/gu/g, "๐ฆ");
car = car.replace(/ja/g, "๐ฉ");
car = car.replace(/ji/g, "๐ช");
car = car.replace(/ta/g, "๐ซ");
car = car.replace(/tu/g, "๐ฌ");
car = car.replace(/da/g, "๐ญ");
car = car.replace(/di/g, "๐ฎ");
car = car.replace(/du/g, "๐ฏ");
car = car.replace(/na/g, "๐ด");
car = car.replace(/nu/g, "๐ต");
car = car.replace(/ma/g, "๐ถ");
car = car.replace(/mi/g, "๐ท");
car = car.replace(/mu/g, "๐ธ");
car = car.replace(/va/g, "๐บ");
car = car.replace(/vi/g, "๐ป");
car = car.replace(/ra/g, "๐ผ");
car = car.replace(/ru/g, "๐ฝ");
car = car.replace(/๐ฟh/g, "๐");
car = car.replace(/[ลกS]/g, "๐");
car = car.replace(/๐ฟs/g, "๐");
car = car.replace(/[รงC]/g, "๐");
car = car.replace(/th/g, "๐ฐ");
car = car.replace(/T/g, "๐ฐ");
car = car.replace(/x/g, "๐ง");
car = car.replace(/c/g, "๐จ");
car = car.replace(/p/g, "๐ฑ");
car = car.replace(/b/g, "๐ฒ");
car = car.replace(/f/g, "๐ณ");
car = car.replace(/y/g, "๐น");
car = car.replace(/l/g, "๐พ");
car = car.replace(/s/g, "๐ฟ");
car = car.replace(/h/g, "๐");
car = car.replace(/z/g, "๐");

car = car.replace(/[aรข]/g, "๐ ");
car = car.replace(/[iรฎ]/g, "๐ก");
car = car.replace(/[uรป]/g, "๐ข");
car = car.replace(/๐ ๐ /g, "๐ ");
car = car.replace(/๐ก๐ก/g, "๐ก");
car = car.replace(/๐ข๐ข/g, "๐ข");
car = car.replace(/=/g, "๐");
car = car.replace(/1/g, "๐");
car = car.replace(/2/g, "๐");
car = car.replace(/๐0/g, "๐");
car = car.replace(/๐0/g, "๐");
car = car.replace(/๐0/g, "๐");

startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
} 