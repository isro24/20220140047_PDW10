function kirimData(event) {
    event.preventDefault();
    
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    
    Swal.fire({
        title: 'Data Submitted',
        html: `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>NIM:</strong> ${nim}</p>
            <p><strong>Peminatan:</strong> ${peminatan}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Angkatan:</strong> ${angkatan}</p>
            <p><strong>Tanggal:</strong> ${tanggal}</p>
        `,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
