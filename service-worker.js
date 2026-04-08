// 1. UBAH VERSI CACHE DI SINI (Naikkan menjadi v2)
const CACHE_NAME = 'STS-K3-S2-HOTS-v1';

const urlsToCache = [
  './index.html',
  './icon-512.png',
  './baner-sbs.png',
  './rekap.html',
  
  // Daftar file :
  '/soal/IND-STS-K3-S2-HOTS.html',
  '/soal/JWA-STS-K3-S2-HOTS.html',
  '/soal/MTK-STS-K3-S2-HOTS.html',
  '/soal/ENG-STS-K3-S2-HOTS.html',
  '/soal/IPAS-STS-K3-S2-HOTS.html',
  '/soal/PJOK-STS-K3-S2-HOTS.html',
  '/soal/PAI-STS-K3-S2-HOTS.html',
  '/soal/PNC-STS-K3-S2-HOTS.html',
  '/soal/gambar/belajar_bahasa.jpg',
  '/soal/gambar/baju_adat_berbeda.jpg',
  '/soal/gambar/tempat_ibadah.jpg',
  '/soal/gambar/kerja_bakti_suku.jpg',
  '/soal/gambar/makanan_tradisional.jpg',
  '/soal/gambar/ipas-gambar-soal-18.jpg',
  '/soal/gambar/ipas-gambar-soal-17.jpg',
  '/soal/gambar/ipas-gambar-soal-14.jpg',
  '/soal/gambar/gambar-soal-13.jpg',
  '/soal/gambar/ipas-gambar-soal-12.jpg',
  '/soal/gambar/ipas-gambar-soal-8.jpg',
  '/soal/gambar/ipas-gambar-soal-7.jpg',
  '/soal/gambar/ipas-gambar-soal-2.jpg',
  '/soal/gambar/ipas-gambar-soal-3.jpg',
  '/soal/gambar/ipas-gambar-soal-5.jpg',
  '/soal/gambar/gambar_jendela.jpg',
  '/soal/gambar/gambar_atap.jpg',
  '/soal/gambar/gambar_denah.jpg',
  '/soal/gambar/gambar_rambu.jpg',
  '/soal/gambar/gambar_pizza.jpg',
  '/soal/gambar/gambar_kue.jpg',
  '/soal/gambar/livingroom.jpg',
  '/soal/gambar/breakfast.jpg',
  '/soal/gambar/zoo.jpg',
  '/soal/gambar/weather.jpg',
  '/soal/gambar/body.jpg',
  '/soal/gambar/gambar_soal_1.jpg',
  '/soal/gambar/gambar_soal_2.jpg',
  '/soal/gambar/gambar_soal_4.jpg',
  '/soal/gambar/gambar_soal_5.jpg',
  '/soal/gambar/gambar_soal_3.jpg',
  '/soal/gambar/renang-napas.jpg',
  '/soal/gambar/lompat-mendarat.jpg',
  '/soal/gambar/senam-simpai.jpg',
  '/soal/gambar/roll-depan.jpg',
  '/soal/gambar/lari-zigzag.jpg',
  '/soal/gambar/salat-jamaah.jpg',
  '/soal/gambar/imam-salat.jpg',
  '/soal/gambar/gunung-indah.jpg',
  '/soal/gambar/kitab-suci.jpg',
  '/soal/gambar/anak-berjanji.jpg',
  '/soal/gambar/ipas-gambar-soal-13.jpg'
];

// Menyimpan file ke cache saat aplikasi pertama kali dibuka (atau saat ada versi baru)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. KODE TAMBAHAN: Menghapus cache versi lama agar memori tidak penuh
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Jika nama cache tidak sama dengan CACHE_NAME yang baru, hapus!
          if (cacheName !== CACHE_NAME) {
            console.log('Menghapus cache lama:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Mengambil file dari cache saat aplikasi berjalan offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Gunakan file dari cache
        }
        return fetch(event.request); // Ambil dari internet jika tidak ada di cache
      })
  );
});

// 3. KODE WAJIB: Menerima perintah dari index.html untuk langsung menerapkan pembaruan (SKIP_WAITING)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});