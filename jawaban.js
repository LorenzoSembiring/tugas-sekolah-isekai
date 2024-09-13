function isPrime(number) {
  if (number <= 3) {
    return true;
  }
  for (let i = 4; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

async function jawaban() {
  const url = "https://bachood.beit.co.id/api/Test/TestBEIT";
  try {
    const response = await fetch(url);
    data = response;
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    var listNilai = [];
    var listNama = [];
    listNilai = json.listNilai;
    listNama = json.listNama;

    var indexKelas6 = [];
    var nilaiKelas6 = [];
    var namaKelas6 = [];


    var namaNilaiBulanMati = {};
    namaNilaiBulanMati.data = [];

    const date = new Date();
    let month = date.getMonth();

    for (let i = 0; i < listNilai.length; i++) {
      if (isPrime(listNilai[i])) {
        const bulan = String(listNilai[i]).charAt(0);
        if (Number(bulan) <= month) {
          var tahun = "depan";
        } else {
          var tahun = "ini";
        }
        namaNilaiBulanMati.data.push({
          nama: listNama[i],
          nilai: listNilai[i],
          bulan_kematian: `Bulan ${bulan} tahun ${tahun}`,
        });
      }
    }

    console.log("Daftar siswa yang akan mati:");
    console.log("------------------------------------------------");
    console.log(namaNilaiBulanMati);

    for (let i = 0; i < listNama.length; i++) {
      if (listNama[i].includes("C") && listNama[i].includes("O")) {
        indexKelas6.push(i);
        namaKelas6.push(listNama[i]);
        nilaiKelas6.push(listNilai[i]);
        listNama.splice(i, 1);
        listNilai.splice(i, 1);
      }
    }

    var nilaiKelas6Menikah = [];
    var namaKelas6Menikah = [];
    nilaiKelas6.forEach((element, index) => {
      if (element % 7 === 0) {
        nilaiKelas6Menikah.push(element);
        namaKelas6Menikah.push(namaKelas6[index]);
      }
    });

    var nilaiKelas1 = [];
    var indexKelas1 = [];
    var namaKelas1 = [];
    var nilaiKelas2 = [];
    var indexKelas2 = [];
    var namaKelas2 = [];
    var nilaiKelas3 = [];
    var indexKelas3 = [];
    var namaKelas3 = [];
    var nilaiKelas4 = [];
    var indexKelas4 = [];
    var namaKelas4 = [];
    var nilaiKelas5 = [];
    var indexKelas5 = [];
    var namaKelas5 = [];

    listNilai.forEach((element, index) => {
      if (50 < element && element < 60) {
        nilaiKelas1.push(element);
        indexKelas1.push(index);
        namaKelas1.push(listNama[index]);
      } else if (60 < element && element < 70) {
        nilaiKelas2.push(element);
        indexKelas2.push(index);
        namaKelas2.push(listNama[index]);
      } else if (70 < element && element < 80) {
        nilaiKelas3.push(element);
        indexKelas3.push(index);
        namaKelas3.push(listNama[index]);
      } else if (80 < element && element < 90) {
        nilaiKelas4.push(element);
        indexKelas4.push(index);
        namaKelas4.push(listNama[index]);
      } else if (90 < element && element < 100) {
        nilaiKelas5.push(element);
        indexKelas5.push(index);
        namaKelas5.push(listNama[index]);
      }
    });

    const objectKelas1 = namaKelas1.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas1[index],
    }));
    const objectKelas2 = namaKelas2.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas2[index],
    }));
    const objectKelas3 = namaKelas3.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas3[index],
    }));
    const objectKelas4 = namaKelas4.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas4[index],
    }));
    const objectKelas5 = namaKelas5.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas5[index],
    }));
    const objectKelas6 = namaKelas6.map((name, index) => ({
      nama: name,
      nilai: nilaiKelas6[index],
    }));
		
    console.log("---------Kelas 1---------")
    console.log(objectKelas1)
    console.log("---------Kelas 2---------")
    console.log(objectKelas2)
    console.log("---------Kelas 3---------")
    console.log(objectKelas3)
    console.log("---------Kelas 4---------")
    console.log(objectKelas4)
    console.log("---------Kelas 5---------")
    console.log(objectKelas5)
    console.log("---------Kelas 6---------")
    console.log(objectKelas6)

    const objectKelas6Menikah = namaKelas6Menikah.map((name, index) => ({
        nama: name,
        nilai: nilaiKelas6[index],
      }));

    console.log("Menikah Tahun Depan:")
    if (objectKelas6Menikah[0]) {
        console.log(objectKelas6Menikah)
    } else {
        console.log("Tidak ada yang menikah")
    }
  } catch (error) {
    console.error(error.message);
  }
}
jawaban();
