// Set the date we're counting down to (24 hours from now)
// Untuk tanggal akhir yang tetap (misal promo berakhir di tanggal tertentu), gunakan format:
// const countDownDate = new Date("Jul 20, 2025 15:37:25").getTime();
// Untuk promo yang berlaku 24 jam dari saat halaman dibuka:
const now = new Date();
const countDownDate = now.getTime() + (24 * 60 * 60 * 1000); // 24 jam dari sekarang

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<span class='text-red-600 text-2xl font-bold'>PROMO BERAKHIR!</span>";
        document.getElementById("promoStatus").innerHTML = "Maaf, kesempatan promo ini sudah berakhir.";
        document.getElementById("promoCode").style.display = 'none'; // Sembunyikan kode promo
    }
}, 1000);

// Copy promo code to clipboard
document.getElementById("promoCode").addEventListener('click', function() {
    const promoCodeText = this.innerText;
    const tempInput = document.createElement("input");
    tempInput.value = promoCodeText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Kode promo '" + promoCodeText + "' berhasil disalin!"); // Anda bisa mengganti alert ini dengan modal/notifikasi kustom yang lebih bagus di production
});