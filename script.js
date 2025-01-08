function orderItem(button) {
    // Mendapatkan nama dan harga item dari atribut data pada tombol
    const itemName = button.getAttribute("vina-data-item-name");
    const itemPrice = button.getAttribute("vina-data-item-price");
    
    // Menampilkan prompt untuk meminta quantity
    const quantity = prompt(`Masukkan jumlah pesanan untuk ${itemName}:`, "1");

    // Memvalidasi input quantity
    if (quantity && !isNaN(quantity) && parseInt(quantity) > 0) {
        // Membuat teks pesan untuk WhatsApp
        const message = `Halo, saya ingin memesan:\n\n*Item:* ${itemName}\n*Harga:* ${itemPrice}\n*Jumlah:* ${quantity}\n\nTerima kasih.`;
        
        // Mengonversi teks pesan ke format URL
        const encodedMessage = encodeURIComponent(message);

        // Nomor WhatsApp tujuan (ganti dengan nomor WhatsApp toko kamu)
        const phoneNumber = "6282316393420"; // Ganti dengan nomor tujuan kamu (gunakan format internasional tanpa tanda "+")

        // Membuat tautan WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Membuka tautan WhatsApp
        window.open(whatsappUrl, "_blank");
    } else if (quantity !== null) {
        // Jika input tidak valid, menampilkan pesan kesalahan
        alert("Silakan masukkan jumlah pesanan yang valid.");
    }
}

function addReview() {
    // Mendapatkan nilai input dari form
    const name = document.getElementById("reviewName").value;
    const rating = document.getElementById("reviewRating").value;
    const text = document.getElementById("reviewText").value;

    // Validasi input
    if (name && text) {
        // Membuat elemen ulasan baru
        const reviewList = document.querySelector(".vina-review-list");
        const newReview = document.createElement("div");
        newReview.classList.add("vina-review-item");

        newReview.innerHTML = `
            <img src="https://api.dicebear.com/9.x/adventurer/svg?seed=${name}" alt="Foto ${name}" class="vina-review-image">
            <div class="vina-review-content">
                <h3 class="vina-review-name">${name}</h3>
                <div class="vina-review-rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
                <p class="vina-review-text">"${text}"</p>
            </div>
        `;

        // Menambahkan ulasan baru ke dalam daftar
        reviewList.appendChild(newReview);

        // Reset form setelah submit
        document.getElementById("reviewName").value = "";
        document.getElementById("reviewRating").value = "5";
        document.getElementById("reviewText").value = "";

        alert("Ulasan Anda telah berhasil ditambahkan!");
    } else {
        alert("Harap lengkapi nama dan ulasan Anda.");
    }
}