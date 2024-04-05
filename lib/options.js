const options = {
	// Jumlah Postingan yang Harus Discrape: {int default: 20}
	number: 50,

	// Tetapkan Sesi: {string[] default: ['']}
	// Nilai Cookie Sesi yang Diautentikasi Diperlukan untuk Meng-scrape Umpan Pengguna, Trend, Musik, Hastag, dsb
	// Anda Dapat Memasukkan Sejumlah Sesi Di Sini, Setiap Permintaan Akan Memilih Sesi Acak Dari Daftar
	sessionList: ["sid_tt=21312213"],

	// Atur Proksi {string[] | string default: ''}
	// HTTP Proxy: 127.0.0.1:8080
	// Socks Proxy: socks5://127.0.0.1:8080
	// Anda Dapat Meneruskan Proxy Sebagai Array dan Scraper Akan Memilih Proxy Secara Acak Dari Array Untuk Menjalankan Permintaan
	proxy: "",

	// Setel Ke {true} Untuk Menelusuri Berdasarkan ID User: {boolean default: false}
	by_user_id: false,

	// Berapa Banyak Postingan yang Harus Diunduh Secara Asinkron. Hanya Jika {download:true}: {int default: 5}
	asyncDownload: 5,

	// Berapa Banyak Postingan yang Harus Di-scrap Secara Asinkron: {int default: 3}
	// Opsi Saat Ini Hanya Akan Diterapkan Dengan Jenis Saat Ini: Musik Dan Hashtag
	// Dengan Tipe Lain Selalu 1 Karena Setiap Respons Permintaan Ke API TikTok Memberikan Nilai "maxCursor".
	// yang Diperlukan Untuk Mengirim Permintaan Berikutnya
	asyncScraping: 3,

	// Jalur File Tempat Semua File Akan Disimpan: {string default: 'CURRENT_DIR'}
	filepath: "CURRENT_DIR",

	// Nama File Khusus Untuk File Keluaran: {string default: ''}
	fileName: `CURRENT_DIR`,

	// Output Dengan Informasi Dapat Disimpan Ke File CSV Atau JSON: {string default: 'na'}
	// 'csv' Untuk Menyimpan Dalam Csv
	// 'json' Untuk Menyimpan Dalam Json
	// 'all' Untuk Menyimpan Dalam Json Dan Csv
	// 'na' Untuk Melewati Langkah Ini
	filetype: `na`,

	// Tetapkan Tajuk Khusus: Agen Pengguna, Cookie, dsb
	// CATATAN: Saat Anda Mengurai Umpan Video Atau Metadata Video Tunggal, Sebagai Imbalannya Anda Akan Menerima Objek {headers}
	// yang Digunakan Untuk Mengekstrak Informasi dan Untuk Mengakses Serta Mengunduh Video Melalui Nilai {Videourl} yang Diterima, Anda Perlu Menggunakan Header yang Sama
	headers: {
		"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
		referer: "https://www.tiktok.com/",
		cookie: `tt_webid_v2=689854141086886123`,
	},

	// Unduh Video Tanpa Tanda Air: {boolean default: false}
	// Setel Ke True Untuk Mengunduh Tanpa Tanda Air
	// Opsi Ini Akan Mempengaruhi Kecepatan Eksekusi
	noWaterMark: true,

	// Buat Tautan Ke Video HD: {boolean default: false}
	// Opsi Ini Hanya Akan Berfungsi Jika {noWaterMark} Disetel Ke {true}
	hdVideo: false,

	// verifyFp Digunakan Untuk Memverifikasi Permintaan dan Menghindari Captcha
	// Saat Anda Menggunakan Proxy Maka Kemungkinan Besar Permintaan Tersebut Akan Diterima
	// Diblokir Dengan Captcha
	// Anda Dapat Mengatur Nilai verifyFP Anda Sendiri Atau Default (hardcode) Akan Digunakan
	verifyFp: "",
};

exports.options = options;
