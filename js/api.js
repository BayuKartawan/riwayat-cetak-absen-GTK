$(document).ready(function () {
    $('#gtkTable').DataTable({
        ajax: {
            url: "https://script.google.com/macros/s/AKfycbyNZTUAUJpeObgPEBxxYbYgnMI26DumsUY_n3NLkpzp40c_M1ZsfNBsKiA-4nMGu4VZEA/exec?route=api_riwayatCetak",
            dataSrc: ""
        },
        columns: [
            {
                data: "tanggal_generate",
                className: 'dtr-control'
            },
            { data: "nama_gtk" },
            { data: "bulan" },
            { data: "tahun" },
            { data: "tahun_pelajaran" },
            {
                data: "link_dokumen",
                render: function (data) {
                    return `<a href="${data}" target="_blank" class="text-yellow-400 hover:text-yellow-300 ">Lihat Dokumen</a>`;
                }
            }
        ],
        columnDefs: [
            {
                targets: 0, // Kolom pertama (Tanggal Generate)
                responsivePriority: 1 // Menjamin kolom ini tetap muncul pada layar besar
            },
            {
                targets: '_all', // Semua kolom tetap responsif
                responsivePriority: 0 // Menjamin kolom lainnya dapat disembunyikan dengan responsivitas
            }
        ],
        responsive: true, // Mode responsif aktif
        order: [[0, 'desc']], // Urutkan berdasarkan kolom pertama (Tanggal Generate)
        paging: true,
        searching: true,
        language: {
            search: "Cari:",
            lengthMenu: "Tampilkan _MENU_ entri",
            info: "Menampilkan _START_ hingga _END_ dari _TOTAL_ entri",
            infoFiltered: "(disaring dari _MAX_ total entri)",
            paginate: {
                first: "Pertama",
                last: "Terakhir",
                next: "Berikutnya",
                previous: "Sebelumnya"
            }
        }
    });
});
