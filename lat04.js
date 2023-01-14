zodiak (2, 30);

function zodiak(bln, tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";
        if (bln == 1) {
            hasil = "capricorn";
            if (tgl > 21) {
                hasil = "aquarius";
            }
        }
        if (bln == 2) {
            hasil = "aquarius";
            if (tgl > 19 && tgl < 31) {
                hasil = "pisces";
            }
        }
        if (bln == 3) {
            hasil = "aries";
            if (tgl > 18 && tgl < 31) {
                hasil = "taurus";
            }
        }
    }
    console.log(hasil);
}
// -------------------------------------------------------------
lulus(60);
function lulus(nilai) {
    let kkm =75;
    let batasatas = 100;
    let batasbawah = 0;

    if (nilai <= batasatas && nilai >= batasbawah) {
        if (nilai >= kkm) {
            input = "lulus";
        }else{
            input = "tidak lulus";
        }
    }else{
        input = "diluar batas nilai";
    }
    console.log(input);
}

function terbilang(angka) {
    console.log(terbilang(299));
function terbilang(angka) {
    let bilangan=[
        " ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"
    ];

		if(angka < 12){

			return bilangan[angka];

		}else if(angka < 20){

			return terbilang(angka-10)+" belas";

		}else if(angka < 100){

			return terbilang(Math.floor(parseInt(angka)/10))+" puluh "+terbilang(parseInt(angka)%10);

		}else if(angka < 200){

			return "seratus "+terbilang(parseInt(angka)-100);

		}else if(angka < 1000){

			return terbilang(Math.floor(parseInt(angka)/100))+" ratus "+terbilang(parseInt(angka)%100);

		}else if(angka < 2000){

			return "seribu "+terbilang(parseInt(angka)-1000);

		}else if(angka < 1000000){

			return terbilang(Math.floor(parseInt(angka)/1000))+" ribu "+terbilang(parseInt(angka)%1000);

		}else if(angka < 1000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000))+" juta "+terbilang(parseInt(angka)%1000000);

		}else if(angka < 1000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000))+" milyard "+terbilang(parseInt(angka)%1000000000);

		}else if(angka < 1000000000000000){

			return terbilang(Math.floor(parseInt(angka)/1000000000000))+" triliun "+terbilang(parseInt(angka)%1000000000000);

		}
}
}

function prima(bilangan) {
    prima(2345)
function prima(bilangan) {
    let prima = true
    let hasil = "";
    if (bilangan < 2) {
        hasil = "Tidak Valid (Bil Prima dimulai dari angka 2)";
    } else if (bilangan > 1) {
        for (let i = 2; i < bilangan; i++) {
            if (bilangan % i === 0) {
                prima = false;
            }
        }
        if (prima) {
            hasil = bilangan + " Merupakan bilangan Prima";
        }else{
            hasil = bilangan + " Bukan bilangan Prima";
        }
    }
    console.log(hasil);
}
}