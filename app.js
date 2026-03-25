const keadaan = {
  julat: 100000,
  sasaran: 3,
  skorKiri: 0,
  skorKanan: 0,
  jawapanKiri: '',
  jawapanKanan: '',
  soalanKiri: null,
  soalanKanan: null,
  pemasa: null,
  tamat: false,
  kedudukan: 0,
  saat: 0
};

const elemen = {
  pilihanJulat: document.getElementById('pilihanJulat'),
  pilihanSasaran: document.getElementById('pilihanSasaran'),
  skorKiri: document.getElementById('skorKiri'),
  skorKanan: document.getElementById('skorKanan'),
  angkaKiri: document.getElementById('angkaKiri'),
  angkaKanan: document.getElementById('angkaKanan'),
  soalanKiri: document.getElementById('soalanKiri'),
  soalanKanan: document.getElementById('soalanKanan'),
  paparKiri: document.getElementById('paparKiri'),
  paparKanan: document.getElementById('paparKanan'),
  masa: document.getElementById('masa'),
  mesej: document.getElementById('mesej'),
  hadiah: document.getElementById('hadiah'),
  lapisanMenang: document.getElementById('lapisanMenang'),
  tajukMenang: document.getElementById('tajukMenang'),
  teksMenang: document.getElementById('teksMenang'),
  butangMula: document.getElementById('butangMula'),
  butangTukar: document.getElementById('butangTukar'),
  butangMainLagi: document.getElementById('butangMainLagi'),
  padKiri: document.getElementById('padKiri'),
  padKanan: document.getElementById('padKanan')
};

function rawakDaripada(senarai){
  return senarai[Math.floor(Math.random() * senarai.length)];
}
function rawak(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatMasa(saat){
  const minit = String(Math.floor(saat / 60)).padStart(2, '0');
  const baki = String(saat % 60).padStart(2, '0');
  return minit + ':' + baki;
}
function formatNombor(n){
  return n.toLocaleString('en-US');
}
function janaSoalan100(){
  const operasiTambah = Math.random() > 0.5;
  let a = rawak(10, 80);
  let b = rawak(1, 19);
  if (!operasiTambah && b > a) b = rawak(1, 9);
  return { teks: formatNombor(a) + (operasiTambah ? ' + ' : ' - ') + formatNombor(b) + ' = ?', jawapan: operasiTambah ? a + b : a - b };
}
function janaSoalan1000(){
  const operasiTambah = Math.random() > 0.5;
  let a = rawakDaripada([120,150,180,210,240,320,350,410,430,520,560,610,720,810]);
  let b = rawakDaripada([10,20,30,40,50,60,70,80,90]);
  if (!operasiTambah && b > a) b = 10;
  return { teks: formatNombor(a) + (operasiTambah ? ' + ' : ' - ') + formatNombor(b) + ' = ?', jawapan: operasiTambah ? a + b : a - b };
}
function janaSoalan10000(){
  const operasiTambah = Math.random() > 0.5;
  let a = rawakDaripada([1200,1300,1400,1500,1600,1700,1800,2200,2300,2400,2500,2600,3200,3300,3400,3500]);
  let b = rawakDaripada([100,200,300,400,500,600]);
  if (!operasiTambah && b > a) b = 100;
  return { teks: formatNombor(a) + (operasiTambah ? ' + ' : ' - ') + formatNombor(b) + ' = ?', jawapan: operasiTambah ? a + b : a - b };
}
function janaSoalan100000(){
  const nilaiBesar = [11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82,83,84];
  const nilaiKecil = [10,11,12,13,14,15,16,17,18,19];
  const operasiTambah = Math.random() > 0.5;
  let a = rawakDaripada(nilaiBesar) * 1000;
  let b = rawakDaripada(nilaiKecil) * 1000;
  if (!operasiTambah && b > a) b = rawakDaripada([10,11,12,13]) * 1000;
  return { teks: formatNombor(a) + (operasiTambah ? ' + ' : ' - ') + formatNombor(b) + ' = ?', jawapan: operasiTambah ? a + b : a - b };
}
function janaSoalan1000000(){
  const operasiTambah = Math.random() > 0.5;
  let a = rawakDaripada([110000,120000,130000,140000,150000,160000,210000,220000,230000,240000,250000,310000,320000,330000,410000,420000,430000,510000,520000,620000]);
  let b = rawakDaripada([10000,20000,30000,40000,50000,60000,70000,80000]);
  if (!operasiTambah && b > a) b = 10000;
  return { teks: formatNombor(a) + (operasiTambah ? ' + ' : ' - ') + formatNombor(b) + ' = ?', jawapan: operasiTambah ? a + b : a - b };
}
function janaSoalan(){
  if (keadaan.julat === 100) return janaSoalan100();
  if (keadaan.julat === 1000) return janaSoalan1000();
  if (keadaan.julat === 10000) return janaSoalan10000();
  if (keadaan.julat === 100000) return janaSoalan100000();
  return janaSoalan1000000();
}
function paparSemula(){
  elemen.skorKiri.textContent = keadaan.skorKiri;
  elemen.skorKanan.textContent = keadaan.skorKanan;
  elemen.angkaKiri.textContent = keadaan.skorKiri;
  elemen.angkaKanan.textContent = keadaan.skorKanan;
  elemen.paparKiri.textContent = keadaan.jawapanKiri === '' ? '0' : keadaan.jawapanKiri;
  elemen.paparKanan.textContent = keadaan.jawapanKanan === '' ? '0' : keadaan.jawapanKanan;
  elemen.masa.textContent = formatMasa(keadaan.saat);
  elemen.soalanKiri.textContent = keadaan.soalanKiri ? keadaan.soalanKiri.teks : '';
  elemen.soalanKanan.textContent = keadaan.soalanKanan ? keadaan.soalanKanan.teks : '';
  const langkah = 72;
  const alih = keadaan.kedudukan * langkah;
  elemen.hadiah.style.transform = 'translateX(calc(-50% + ' + alih + 'px))';
}
function setMesej(teks){
  elemen.mesej.textContent = teks;
}
function semakMenang(){
  if (keadaan.skorKiri >= keadaan.sasaran){
    tamatPermainan('Pasukan Biru');
    return true;
  }
  if (keadaan.skorKanan >= keadaan.sasaran){
    tamatPermainan('Pasukan Merah');
    return true;
  }
  return false;
}
function tarikKeKiri(){
  keadaan.skorKiri += 1;
  keadaan.kedudukan -= 1;
  setMesej('Pasukan Biru menjawab dengan betul dan menarik coklat.');
  paparSemula();
  if (!semakMenang()){
    keadaan.soalanKiri = janaSoalan();
    keadaan.jawapanKiri = '';
    paparSemula();
  }
}
function tarikKeKanan(){
  keadaan.skorKanan += 1;
  keadaan.kedudukan += 1;
  setMesej('Pasukan Merah menjawab dengan betul dan menarik coklat.');
  paparSemula();
  if (!semakMenang()){
    keadaan.soalanKanan = janaSoalan();
    keadaan.jawapanKanan = '';
    paparSemula();
  }
}
function semakJawapanKiri(){
  if (keadaan.tamat) return;
  if (Number(keadaan.jawapanKiri.replaceAll(',', '')) === keadaan.soalanKiri.jawapan){
    tarikKeKiri();
  } else {
    setMesej('Jawapan Pasukan Biru belum tepat.');
  }
}
function semakJawapanKanan(){
  if (keadaan.tamat) return;
  if (Number(keadaan.jawapanKanan.replaceAll(',', '')) === keadaan.soalanKanan.jawapan){
    tarikKeKanan();
  } else {
    setMesej('Jawapan Pasukan Merah belum tepat.');
  }
}
function binaPad(bekas, sisi){
  bekas.innerHTML = '';
  const susunan = ['1','2','3','4','5','6','7','8','9','hapus','0','sah'];
  susunan.forEach(function(item){
    const butang = document.createElement('button');
    butang.className = 'kekunci';
    if (item === 'hapus'){
      butang.textContent = '✕';
      butang.classList.add('hapus');
      butang.addEventListener('click', function(){
        if (keadaan.tamat) return;
        if (sisi === 'kiri') keadaan.jawapanKiri = keadaan.jawapanKiri.slice(0, -1);
        else keadaan.jawapanKanan = keadaan.jawapanKanan.slice(0, -1);
        paparSemula();
      });
    } else if (item === 'sah'){
      butang.textContent = '✓';
      butang.classList.add('sah');
      butang.addEventListener('click', function(){
        if (sisi === 'kiri') semakJawapanKiri();
        else semakJawapanKanan();
      });
    } else {
      butang.textContent = item;
      butang.addEventListener('click', function(){
        if (keadaan.tamat) return;
        if (sisi === 'kiri') keadaan.jawapanKiri += item;
        else keadaan.jawapanKanan += item;
        paparSemula();
      });
    }
    bekas.appendChild(butang);
  });
}
function mulaJam(){
  hentiJam();
  keadaan.saat = 0;
  paparSemula();
  keadaan.pemasa = setInterval(function(){
    keadaan.saat += 1;
    paparSemula();
  }, 1000);
}
function hentiJam(){
  if (keadaan.pemasa){
    clearInterval(keadaan.pemasa);
    keadaan.pemasa = null;
  }
}
function tamatPermainan(pemenang){
  keadaan.tamat = true;
  hentiJam();
  elemen.tajukMenang.textContent = pemenang + ' Menang';
  elemen.teksMenang.textContent = 'Tahniah! ' + pemenang + ' berjaya menarik coklat ke kawasan kemenangan.';
  elemen.lapisanMenang.classList.add('tunjuk');
}
function mulaBaharu(){
  keadaan.julat = Number(elemen.pilihanJulat.value);
  keadaan.sasaran = Number(elemen.pilihanSasaran.value);
  keadaan.skorKiri = 0;
  keadaan.skorKanan = 0;
  keadaan.kedudukan = 0;
  keadaan.jawapanKiri = '';
  keadaan.jawapanKanan = '';
  keadaan.soalanKiri = janaSoalan();
  keadaan.soalanKanan = janaSoalan();
  keadaan.tamat = false;
  elemen.lapisanMenang.classList.remove('tunjuk');
  setMesej('Permainan baharu bermula. Jawab soalan mudah dengan cepat.');
  paparSemula();
  mulaJam();
}
elemen.butangMula.addEventListener('click', mulaBaharu);
elemen.butangMainLagi.addEventListener('click', mulaBaharu);
elemen.butangTukar.addEventListener('click', function(){
  if (keadaan.tamat) return;
  keadaan.soalanKiri = janaSoalan();
  keadaan.soalanKanan = janaSoalan();
  keadaan.jawapanKiri = '';
  keadaan.jawapanKanan = '';
  setMesej('Soalan baharu yang mudah telah diberikan kepada kedua-dua pasukan.');
  paparSemula();
});
binaPad(elemen.padKiri, 'kiri');
binaPad(elemen.padKanan, 'kanan');
mulaBaharu();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  });
}
