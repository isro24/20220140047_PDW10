function kirimData(event) {
    event.preventDefault();
    
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=pemintatan]:checked").value;
    var alamat = document.getElementById("alamat").value;
    
    Swal.fire({
        title: 'Data Submitted',
        html: `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>NIM:</strong> ${nim}</p>
            <p><strong>Peminatan:</strong> ${peminatan}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
        `,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
