const questions = [
        {
            "question": "1. Dalam data mining, istilah 'asosiasi' digunakan untuk menggambarkan:",
            "options": [
                "a. Hubungan antar atribut dalam dataset",
                "b. Pola hubungan yang sering terjadi antar item dalam dataset",
                "c. Proses penghapusan data duplikat",
                "d. Penataan data dalam urutan tertentu",
                "e. Teknik mengelompokkan data berdasarkan jarak"
            ],
            "answer": "b"
        },
        {
            "question": "2. Apa tujuan utama dari filtering dalam data preprocessing?",
            "options": [
                "a. Mencari data baru",
                "b. Meningkatkan akurasi data",
                "c. Menghapus data yang redundan",
                "d. Menyimpan data lebih efisien",
                "e. Mengurangi ukuran file"
            ],
            "answer": "c"
        },
        {
            "question": "3. Apa fungsi dari GUI (Graphical User Interface) pada sistem data mining?",
            "options": [
                "a. Menyediakan antarmuka untuk interaksi dengan sistem tanpa menulis kode",
                "b. Menyimpan hasil prediksi dalam database",
                "c. Menjalankan algoritma data mining secara otomatis",
                "d. Menghasilkan data dari berbagai sumber",
                "e. Membersihkan data secara otomatis"
            ],
            "answer": "a"
        },
        {
            "question": "4. Apa tujuan utama dari data mining?",
            "options": [
                "a. Menemukan pola dan informasi berguna dalam data besar",
                "b. Menyimpan data dalam database",
                "c. Meningkatkan kecepatan pengolahan data",
                "d. Menghapus data yang tidak relevan",
                "e. Mengumpulkan data dari berbagai sumber"
            ],
            "answer": "a"
        },
        {
            "question": "5. Apa saja task yang didukung oleh WEKA (Waikato Environment for Knowledge Analysis)?",
            "options": [
                "a. Data Cleaning, Data Transformation, dan Text Mining",
                "b. Feature Selection, Data Cleaning, dan Visualization",
                "c. Classification, Regression, Clustering, dan Association",
                "d. Prediksi, Association, dan Text Summarization",
                "e. Clustering, Association, dan Text Mining"
            ],
            "answer": "c"
        },
        {
            "question": "6. Apa yang dimaksud dengan data cleaning dalam proses data warehousing?",
            "options": [
                "a. Menambahkan data baru",
                "b. Menghapus data yang tidak relevan",
                "c. Menyimpan data secara permanen",
                "d. Mengubah format data",
                "e. Menganalisis data"
            ],
            "answer": "b"
        },
        {
            "question": "7. Tool apa yang menyediakan antarmuka GUI untuk analisis data berbasis drag-and-drop dan mendukung berbagai task data mining?",
            "options": [
                "a. Apache Spark",
                "b. KNIME",
                "c. SQL Server",
                "d. Google Analytics",
                "e. RapidMiner"
            ],
            "answer": "b"
        },
        {
            "question": "8. Tabel prediksi dan visualisasi centroid digunakan dalam output dari data mining task jenis apa?",
            "options": [
                "a. Association",
                "b. Regression",
                "c. Classification",
                "d. Clustering",
                "e. Summarization"
            ],
            "answer": "d"
        },
        {
            "question": "9. Lapisan manakah yang bertanggung jawab untuk menyimpan data dalam arsitektur data mining?",
            "options": [
                "a. Lapisan Visualisasi",
                "b. Lapisan Data",
                "c. Lapisan Pemrosesan",
                "d. Lapisan Evaluasi",
                "e. Lapisan Analitik"
            ],
            "answer": "b"
        },
        {
            "question": "10. Apa tujuan dari fase Pemodelan dalam CRISP-DM?",
            "options": [
                "a. Menganalisis kesalahan data",
                "b. Menerapkan teknik modeling untuk membangun model",
                "c. Memvalidasi data dari sumber eksternal",
                "d. Menghapus duplikasi data",
                "e. Memahami kebutuhan bisnis"
            ],
            "answer": "b"
        },
        {
            "question": "11. Algoritma data mining yang sering digunakan untuk mengelompokkan data berdasarkan kesamaan adalah:",
            "options": [
                "a. Decision Tree",
                "b. K-Means Clustering",
                "c. Regresi Linear",
                "d. Algoritma Dijkstra",
                "e. Jaringan Syaraf Tiruan"
            ],
            "answer": "b"
        },
        {
            "question": "12. Apa tujuan dari tahap Preprocessing dalam KDD?",
            "options": [
                "a. Menghapus duplikasi dan memperbaiki kesalahan data",
                "b. Mengurutkan data secara abjad",
                "c. Menyusun data sesuai urutan waktu",
                "d. Menggandakan data",
                "e. Mengganti data yang hilang dengan data baru"
            ],
            "answer": "a"
        },
        {
            "question": "13. Apa output utama yang dihasilkan dari Classification and Prediction?",
            "options": [
                "a. Ringkasan data numerik dalam bentuk visual",
                "b. Cluster dari data numerik",
                "c. Model untuk memprediksi data baru yang belum ada",
                "d. Pola asosiatif antara item-item",
                "e. Data yang telah dibersihkan dari noise"
            ],
            "answer": "c"
        },
        {
            "question": "14. Dalam metodologi CRISP-DM, fase pertama adalah:",
            "options": [
                "a. Pemahaman Data",
                "b. Evaluasi",
                "c. Pemodelan",
                "d. Penyebaran",
                "e. Pemahaman Bisnis"
            ],
            "answer": "e"
        },
        {
            "question": "15. Apa yang dimaksud dengan OLAP (Online Analytical Processing) dalam konteks data mining?",
            "options": [
                "a. Metode untuk membersihkan data yang tidak konsisten",
                "b. Analisis data yang berfokus pada data historis untuk menemukan tren dan pola",
                "c. Teknik untuk mengelola data yang sangat besar",
                "d. Proses visualisasi data yang interaktif",
                "e. Proses pengambilan keputusan secara real-time"
            ],
            "answer": "b"
        },
        {
            "question": "16. Manakah yang BUKAN termasuk dalam data mining task?",
            "options": [
                "a. Normalization",
                "b. Clustering",
                "c. Classification",
                "d. Regression",
                "e. Association"
            ],
            "answer": "a"
        },
        {
                "question": "17. Apa yang dimaksud dengan fase Pemahaman Bisnis dalam CRISP-DM?",
                "options": [
                    "a. Menyajikan data dalam bentuk visual",
                    "b. Menerapkan model pada data mentah",
                    "c. Menghapus data yang tidak relevan",
                    "d. Menyusun ulang data berdasarkan kebutuhan model",
                    "e. Mengidentifikasi kebutuhan bisnis dan tujuan proyek"
                ],
                "answer": "e"
            },
            {
                "question": "18. Data mining adalah teknik untuk mengolah data besar, diharapkan dapat membantu...",
                "options": [
                    "a. Memprediksi dengan baik",
                    "b. Mengambil keputusan",
                    "c. Meningkatkan sebuah kualitas data",
                    "d. Menciptakan data baru",
                    "e. Meningkatkan akurasi"
                ],
                "answer": "b"
            },
            {
                "question": "19. Fungsi utama dari data warehouse dalam arsitektur data mining adalah...",
                "options": [
                    "a. Menyimpan data mentah yang belum diolah",
                    "b. Melakukan pemrosesan data secara real-time",
                    "c. Menyediakan data yang terintegrasi dan konsisten untuk analisis",
                    "d. Menampilkan hasil analisis data",
                    "e. Mengimplementasikan algoritma data mining"
                ],
                "answer": "c"
            },
            {
                "question": "20. Tahap pertama dalam proses Knowledge Discovery Database (KDD) adalah:",
                "options": [
                    "a. Transformasi data",
                    "b. Seleksi data",
                    "c. Evaluasi data",
                    "d. Data mining",
                    "e. Pengolahan data"
                ],
                "answer": "b"
            },
            {
                "question": "21. Proses memilih data yang sesuai dengan kriteria tertentu, seperti menghapus outlier, data yang tidak relevan, atau data yang mengandung noise disebut?",
                "options": [
                    "a. Dimensionality Reduction",
                    "b. Delete",
                    "c. Filtering (Pemilahan Data)",
                    "d. Transformasi",
                    "e. Data cleaning"
                ],
                "answer": "e"
            },
            {
                "question": "22. Dalam konteks data warehouse, apa itu \"dimensi\"?",
                "options": [
                    "a. Struktur penyimpanan data mentah",
                    "b. Proses penghapusan data yang tidak relevan",
                    "c. Tipe data yang disimpan dalam basis data",
                    "d. Alat untuk mengukur performa sistem",
                    "e. Kategori data yang digunakan untuk analisis, seperti waktu, lokasi, dan produk"
                ],
                "answer": "e"
            },
            {
                "question": "23. Metode clustering partisional yang paling umum digunakan adalah:",
                "options": [
                    "a. DBSCAN",
                    "b. Agglomerative clustering",
                    "c. Linkage clustering",
                    "d. K-Means clustering",
                    "e. Dendrogram clustering"
                ],
                "answer": "d"
            },
            {
                "question": "24. Salah satu kelemahan dari metode K-Means clustering adalah:",
                "options": [
                    "a. Tidak bisa menangani jumlah cluster yang besar",
                    "b. Tidak dapat digunakan untuk data string",
                    "c. Membutuhkan waktu yang sangat lama untuk data kecil",
                    "d. Sulit menangani data dengan banyak outlier atau bentuk cluster yang tidak bulat",
                    "e. Tidak dapat digunakan untuk data numerik"
                ],
                "answer": "d"
            },
            {
                "question": "25. Apa tujuan utama dari clustering?",
                "options": [
                    "a. Mengklasifikasikan data berdasarkan label yang ada",
                    "b. Mengelompokkan data untuk analisis statistik",
                    "c. Mengidentifikasi pola dalam data yang tidak berlabel",
                    "d. Mengurutkan data berdasarkan kategori",
                    "e. Mengubah data menjadi label tertentu"
                ],
                "answer": "c"
            },
            {
                "question": "26. Tujuan utama dari Exploratory Data Analysis (EDA) adalah untuk:",
                "options": [
                    "a. Menggunakan algoritma untuk mengklasifikasikan data secara otomatis",
                    "b. Membantu memahami karakteristik data dan menemukan pola atau anomali dalam data",
                    "c. Meningkatkan kecepatan komputasi pada pengolahan data",
                    "d. Memprediksi hasil data berdasarkan model tertentu",
                    "e. Mengintegrasikan data dari berbagai sumber ke dalam satu set data"
                ],
                "answer": "b"
            },
            {
                "question": "27. Dalam metode DBSCAN, titik yang tidak termasuk dalam cluster mana pun disebut sebagai:",
                "options": [
                    "a. Noise",
                    "b. Border Points",
                    "c. Core Points",
                    "d. Centroids",
                    "e. Outliers"
                ],
                "answer": "a"
            },
            {
                "question": "28. Apa kelebihan dari metode partitional clustering dalam proses data mining?",
                "options": [
                    "a. Tidak memerlukan jumlah cluster di awal",
                    "b. Tidak sensitif terhadap outlier dalam data",
                    "c. Dapat digunakan untuk mendeteksi cluster dengan bentuk tidak teratur",
                    "d. Prosesnya cepat dan mudah diimplementasikan",
                    "e. Mampu menangani dataset yang sangat besar jika parameter diatur dengan tepat"
                ],
                "answer": "d"
            },
            {
                "question": "29. Algoritma berikut yang merupakan contoh dari partitional clustering adalah:",
                "options": [
                    "a. DIANA",
                    "b. DBSCAN",
                    "c. K-Means",
                    "d. Hierarchical Clustering",
                    "e. AGNES"
                ],
                "answer": "c"
            },
            {
                "question": "30. Apa yang dimaksud dengan similaritas data?",
                "options": [
                    "a. Mengelompokkan data",
                    "b. Menghitung rata-rata data",
                    "c. Proses penggabungan data",
                    "d. Ukuran seberapa berbeda dua data",
                    "e. Ukuran seberapa mirip dua data"
                ],
                "answer": "e"
            },
            {
                "question": "31. Clustering berbasis densitas seperti DBSCAN cocok digunakan pada data yang:",
                "options": [
                    "a. Hanya terdiri dari data kategorikal",
                    "b. Memiliki bentuk cluster yang kompleks",
                    "c. Tidak memiliki outlier",
                    "d. Berbentuk spheris saja",
                    "e. Berjumlah sangat sedikit"
                ],
                "answer": "b"
            },
            {
                "question": "32. Dalam metode clustering hierarkis, dendrogram digunakan untuk:",
                "options": [
                    "a. Menghitung jumlah cluster yang optimal",
                    "b. Mencari centroid yang terbaik",
                    "c. Mengidentifikasi pola anomali dalam data",
                    "d. Menghitung nilai rata-rata setiap cluster",
                    "e. Menentukan jarak antara cluster dan memvisualisasikan pengelompokan"
                ],
                "answer": "e"
            },
            {
                "question": "33. Proses menghapus atau memperbaiki data yang hilang, duplikat, atau tidak valid disebut:",
                "options": [
                    "a. Normalization",
                    "b. Filtering",
                    "c. Dimensionality Reduction",
                    "d. Cleaning",
                    "e. Diskritisasi"
                ],
                "answer": "d"
            },
            {
                "question": "34. Mengapa algoritma Density-Based Clustering dianggap efisien dalam menangani noise?",
                "options": [
                    "a. Karena hanya menggunakan satu pemindaian",
                    "b. Karena memisahkan objek padat dari area kepadatan rendah",
                    "c. Karena mengabaikan semua data yang tidak terpakai",
                    "d. Karena tidak memerlukan input dari pengguna",
                    "e. Karena mengklasifikasikan semua data sebagai noise"
                ],
                "answer": "b"
            },
            {
                "question": "35. Kelemahan dari metode clustering partisional adalah:",
                "options": [
                    "a. Tidak dapat digunakan untuk data dengan label",
                    "b. Membutuhkan radius yang tepat",
                    "c. Harus selalu memiliki struktur hierarki",
                    "d. Sulit menangani noise",
                    "e. Prosesnya lambat"
                ],
                "answer": "d"
            },
            {
                "question": "36. Apa yang dimaksud dengan 'Drill-down' dalam OLAP?",
                "options": [
                    "a. Menganalisis data pada level yang lebih detail",
                    "b. Membersihkan data yang hilang",
                    "c. Mengubah data menjadi kategori",
                    "d. Menyusun ulang data untuk visualisasi",
                    "e. Mengagregasi data untuk level yang lebih tinggi"
                ],
                "answer": "a"
            },
            {
                "question": "37. Pengertian data adalah...",
                "options": [
                    "a. Informasi yang diperoleh dari hasil analisis",
                    "b. Informasi yang sudah pasti benar",
                    "c. Kumpulan teori yang sudah dipublikasikan",
                    "d. Kumpulan informasi atau fakta mentah yang belum diolah",
                    "e. Hasil akhir dari suatu proses pengolahan informasi"
                ],
                "answer": "d"
            },
    {
                "question": "38. Pada algoritma K-Means, istilah 'centroid' merujuk pada:",
                "options": [
                    "a. Titik pusat dari suatu cluster",
                    "b. Titik acak dalam data yang dianggap sebagai pusat",
                    "c. Titik yang paling jauh dari anggota cluster",
                    "d. Titik yang berada di luar cluster utama",
                    "e. Titik dengan densitas tertinggi dalam dataset"
                ],
                "answer": "a"
            },
            {
                "question": "39. Di bawah ini, manakah yang merupakan ciri utama dari data warehouse:",
                "options": [
                    "a. Data bersifat sementara dan mudah dihapus",
                    "b. Data terdesentralisasi dan mudah dimodifikasi pengguna",
                    "c. Data hanya tersedia dalam waktu nyata (real-time)",
                    "d. Data diorganisasikan untuk mendukung operasi harian",
                    "e. Data bersifat terintegrasi, subjek-orientasi, bersifat historis, dan non volalite"
                ],
                "answer": "e"
            },
            {
                "question": "40. Metode K-Means biasanya melibatkan pemilihan parameter utama yang disebut:",
                "options": [
                    "a. Threshold distance",
                    "b. Mean similarity",
                    "c. Jumlah cluster (k)",
                    "d. Radius cluster",
                    "e. Bobot probabilitas"
                ],
                "answer": "c"
            },
            {
                "question": "41. Dalam metode clustering hierarkis, tahap penggabungan (agglomerative) dimulai dengan:",
                "options": [
                    "a. Setiap data sebagai cluster individual yang kemudian digabungkan",
                    "b. Kelompok berdasarkan nilai densitas",
                    "c. Pengelompokan berdasarkan pusat cluster yang ditentukan",
                    "d. Satu cluster besar yang kemudian dibagi-bagi",
                    "e. Membuat model regresi untuk tiap cluster"
                ],
                "answer": "a"
            },
            {
                "question": "42. Manakah dari pernyataan berikut yang benar tentang clustering berbasis densitas (density based)?",
                "options": [
                    "a. DBSCAN efektif untuk mendeteksi cluster dengan bentuk arbitrer",
                    "b. Metode ini hanya bisa diterapkan pada data dalam dimensi rendah",
                    "c. DBSCAN membagi data berdasarkan nilai tengah (mean)",
                    "d. DBSCAN membutuhkan jumlah cluster sebagai input",
                    "e. Metode ini tidak efektif pada data yang memiliki noise atau outlier"
                ],
                "answer": "a"
            },
            {
                "question": "43. Pada metode Naive Bayes, apa asumsi utama yang digunakan?",
                "options": [
                    "a. Variabel bebas tidak berhubungan satu sama lain",
                    "b. Hanya ada satu variabel independen",
                    "c. Data memiliki distribusi normal",
                    "d. Variabel bebas berhubungan secara linier",
                    "e. Hanya mengandalkan aturan ifthen"
                ],
                "answer": "a"
            },
            {
                "question": "44. Apa keuntungan utama dari algoritma Naive Bayes?",
                "options": [
                    "a. Memiliki hasil akurasi tertinggi dalam semua kasus",
                    "b. Tidak membutuhkan banyak data",
                    "c. Kompleksitas tinggi",
                    "d. Membutuhkan banyak waktu dalam training",
                    "e. Dapat digunakan pada data kecil dan besar dengan cepat"
                ],
                "answer": "e"
            },
            {
                "question": "45. Apa tujuan utama dalam membangun pohon keputusan?",
                "options": [
                    "a. Mengurutkan data berdasarkan variabel numerik",
                    "b. Memisahkan data ke dalam kategori berbasis aturan",
                    "c. Meningkatkan dimensi data",
                    "d. Menentukan semua kemungkinan kombinasi data",
                    "e. Mengelompokkan data ke dalam kelas berbasis nilai median"
                ],
                "answer": "b"
            },
            {
                "question": "46. Salah satu teknik yang digunakan untuk menghindari overfitting pada pohon keputusan adalah:",
                "options": [
                    "a. Menambah cabang secara acak",
                    "b. Menghapus variabel independen",
                    "c. Menggunakan variabel kategori saja",
                    "d. Pruning",
                    "e. Mengatur kelas dalam format aliran"
                ],
                "answer": "d"
            },
            {
                "question": "47. Teknik data mining yang digunakan untuk memprediksi nilai masa depan berdasarkan data historis adalah...",
                "options": [
                    "a. Clustering",
                    "b. Association rule",
                    "c. Summarization",
                    "d. Regression",
                    "e. Classification"
                ],
                "answer": "d"
            },
            {
                "question": "48. Pada pohon keputusan, bagian yang menunjukkan hasil akhir dari keputusan disebut sebagai?",
                "options": [
                    "a. Root Node",
                    "b. Split Node",
                    "c. Branch Node",
                    "d. Leaf Node",
                    "e. Decision Path"
                ],
                "answer": "d"
            },
            {
                "question": "49. Bagaimana cara menangani data yang tidak terdistribusi normal dalam Gaussian Naive Bayes?",
                "options": [
                    "a. Menggunakan Gaussian Naive Bayes tanpa modifikasi",
                    "b. Mengabaikan data yang tidak normal",
                    "c. Melakukan transformasi data, seperti log transform atau normalisasi",
                    "d. Menggunakan algoritma Naive Bayes lainnya",
                    "e. Semua jawaban salah"
                ],
                "answer": "c"
            },
            {
                "question": "50. Metode data mining yang digunakan untuk menemukan hubungan atau keterkaitan antar variabel dalam dataset disebut…",
                "options": [
                    "a. Clustering",
                    "b. Prediction",
                    "c. Summarization",
                    "d. Association rule",
                    "e. Classification"
                ],
                "answer": "d"
            },
            {
                "question": "51. Perbandingan antara Pohon Keputusan dan Naive Bayes adalah…",
                "options": [
                    "a. Keduanya mengelompokkan data tanpa pembelajaran",
                    "b. Pohon Keputusan menggunakan struktur pohon, Naive Bayes menggunakan probabilitas",
                    "c. Naive Bayes selalu lebih akurat daripada Pohon Keputusan",
                    "d. Tidak ada perbedaan di antara keduanya",
                    "e. Naive Bayes cocok untuk data numerik, Pohon Keputusan untuk data teks"
                ],
                "answer": "b"
            },
            {
                "question": "52. Dalam klasifikasi berbasis probabilistik, model utama yang digunakan untuk mengestimasi kemungkinan kelas adalah?",
                "options": [
                    "a. Naive Bayes",
                    "b. K-Nearest Neighbors",
                    "c. Support Vector Machine",
                    "d. K-Means Clustering",
                    "e. Neural Network"
                ],
                "answer": "a"
            },
            {
                "question": "53. Dalam pohon keputusan, \"entropy\" digunakan untuk?",
                "options": [
                    "a. Mengurutkan data berdasarkan frekuensi",
                    "b. Mengukur ketidakpastian atau keacakan data",
                    "c. Menghitung rata-rata nilai target",
                    "d. Menghitung probabilitas tiap kelas",
                    "e. Membagi data berdasarkan jarak"
                ],
                "answer": "b"
            },
            {
                "question": "54. Pada pohon keputusan, pemilihan atribut untuk pembagian data ditentukan dengan menggunakan?",
                "options": [
                    "a. Jarak Manhattan",
                    "b. Bobot fitur",
                    "c. Metode iterasi",
                    "d. Nilai korelasi",
                    "e. Gain informasi"
                ],
                "answer": "e"
            },
            {
                "question": "55. Pada pohon keputusan, tujuan utama dari proses pruning adalah untuk?",
                "options": [
                    "a. Menentukan probabilitas tiap kelas",
                    "b. Menghapus simpul yang tidak relevan untuk mengurangi overfitting",
                    "c. Menambahkan simpul-simpul baru untuk akurasi",
                    "d. Mengubah pohon keputusan menjadi hutan acak",
                    "e. Mempercepat proses pencarian data"
                ],
                "answer": "b"
            },
            {
                "question": "56. Dalam pohon keputusan, \"simpul akar\" atau \"root node\" berfungsi sebagai?",
                "options": [
                    "a. Titik awal untuk klasifikasi",
                    "b. Penentu jumlah kelas",
                    "c. Fitur terakhir yang diperiksa",
                    "d. Nilai rata-rata dari kelas target",
                    "e. Simpul akhir untuk keputusan akhir"
                ],
                "answer": "a"
            },
            {
                "question": "57. Dalam Support Vector Machine (SVM), margin adalah:",
                "options": [
                    "a. Jarak antara satu titik data dengan titik lainnya",
                    "b. Jarak antara hyperplane dan titik terdekat dari setiap kelas",
                    "c. Proses menambah aturan pada classifier",
                    "d. Perhitungan jarak antar tetangga",
                    "e. Nilai prediksi yang dihitung dari aturan tertentu"
                ],
                "answer": "b"
            },
            {
                "question": "58. Apa yang dimaksud dengan algoritma Nearest Neighbor?",
                "options": [
                    "a. Teknik pengurutan data dalam basis data",
                    "b. Metode untuk mencari rata-rata dari sekumpulan data",
                    "c. Algoritma untuk mengklasifikasikan data berdasarkan kedekatan titik-titik data",
                    "d. Metode untuk memprediksi nilai berdasarkan data historis",
                    "e. Algoritma untuk mengurangi dimensi data"
                ],
                "answer": "c"
            },
            {
                "question": "59. Pada algoritma K-Nearest Neighbor, parameter k memiliki peran penting untuk:",
                "options": [
                    "a. Menentukan jumlah tetangga terjauh",
                    "b. Menghitung jarak antara semua titik data",
                    "c. Menentukan jumlah aturan dalam rule-based classifier",
                    "d. Memilih kelas mayoritas secara acak",
                    "e. Menentukan jumlah tetangga terdekat yang akan dipertimbangkan"
                ],
                "answer": "e"
            },
            {
                "question": "60. Apa fungsi utama dari Support Vector Machine (SVM) dalam klasifikasi data?",
                "options": [
                    "a. Mencari hyperplane terbaik yang memisahkan kelas-kelas dalam data",
                    "b. Mencari rata-rata dari setiap kelas untuk memprediksi hasil",
                    "c. Melakukan klasterisasi data berdasarkan jarak antar titik data",
                    "d. Menggabungkan hasil klasifikasi dari beberapa model yang berbeda",
                    "e. Menentukan tetangga terdekat untuk memprediksi kelas dari data baru"
                ],
                "answer": "a"
            },
            {
                "question": "61. Apa yang dimaksud dengan metode klasifikasi Rule Based dalam data mining?",
                "options": [
                    "a. Metode yang mengelompokkan data berdasarkan jarak terdekat",
                    "b. Metode yang menggunakan aturan-aturan yang telah ditetapkan",
                    "c. Metode yang memisahkan data dengan hyperplane terbaik",
                    "d. Metode yang menggunakan kernel untuk data linear",
                    "e. Metode yang memanfaatkan pohon keputusan"
                ],
                "answer": "b"
            },
            {
                "question": "62. Apa yang dilakukan pada langkah pertama dalam metode K-Nearest Neighbor (KNN)?",
                "options": [
                    "a. Menentukan hyperplane",
                    "b. Menghitung jarak data baru dengan data pelatihan",
                    "c. Menentukan jumlah tetangga terdekat yang akan diperhitungkan",
                    "d. Memvalidasi data dengan metode cross-validation",
                    "e. Memilih tetangga terdekat"
                ],
                "answer": "c"
            },
        {
            "question": "63. Manakah yang bukan kelebihan dari metode Support Vector Machine (SVM)?",
            "options": [
                "a. Efektif untuk dimensi tinggi",
                "b. Dapat memisahkan data yang tidak linear",
                "c. Memerlukan tuning parameter",
                "d. Sensitif terhadap outlier",
                "e. Margin maksimal"
            ],
            "answer": "d"
        },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('quiz');
    questionContainer.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');

    question.options.forEach(option => {
        const optionItem = document.createElement('li');
        optionItem.textContent = option;
        optionItem.onclick = () => selectOption(option, optionItem);
        optionsList.appendChild(optionItem);
    });

    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(optionsList);

    // Tambahkan tombol Next dan Previous
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.onclick = () => navigate(-1);
    prevButton.disabled = currentQuestionIndex === 0; // Disable jika di pertanyaan pertama

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.onclick = () => navigate(1);
    nextButton.disabled = currentQuestionIndex === questions.length - 1; // Disable jika di pertanyaan terakhir

    navigation.appendChild(prevButton);
    navigation.appendChild(nextButton);
    questionContainer.appendChild(navigation);
}

function selectOption(selectedOption, optionItem) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');

    // Tandai jawaban yang dipilih
    if (selectedOption === question.answer) {
        score++;
        optionItem.style.backgroundColor = "green"; // Warna hijau untuk jawaban benar
        feedbackElement.textContent = "Jawaban Anda benar!";
        feedbackElement.style.color = "green";
    } else {
        optionItem.style.backgroundColor = "red"; // Warna merah untuk jawaban salah
        feedbackElement.textContent = `Jawaban Anda salah! Jawaban yang benar adalah: ${question.answer}`;
        feedbackElement.style.color = "red";

        // Tandai jawaban yang benar
        const optionsList = document.querySelectorAll('.options li');
        optionsList.forEach(item => {
            if (item.textContent.startsWith(question.answer)) {
                item.style.backgroundColor = "green"; // Warna hijau untuk jawaban benar
            }
        });
    }

    const questionContainer = document.getElementById('quiz');
    questionContainer.appendChild(feedbackElement);

    // Tampilkan tombol Next setelah memilih jawaban
    const nextButton = document.querySelector('.navigation button:nth-child(2)');
    nextButton.style.display = 'inline-block';
}

function navigate(direction) {
    currentQuestionIndex += direction;
    loadQuestion();
}

function showResult() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Anda mendapatkan ${score} dari ${questions.length} jawaban.`;
}

// Load the first question
loadQuestion();
