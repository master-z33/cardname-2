function hiasan() {
    alert('cuman hiasan wkwk.');
}

function kemana() {
    alert('mau ikutin kemana njir?');
}

function ig() {
    var okataubatal = confirm('kamu pengen tau ig aku ??? yaudah aku kasih tau kalo kamu klik Oke');
    if (okataubatal) {
        window.location.href = "https://instagram.com/mochzaeni.id";
    }
}

function fb() {
    alert('males nambahin');
}

function tik() {
    alert('males nambahin');
}

function openProfilePopup() {
    var profilePopup = document.getElementById('profilePopup');
    profilePopup.style.display = 'block';
}

window.onclick = function (event) {
    var profilePopup = document.getElementById('profilePopup');
    if (event.target == profilePopup) {
        profilePopup.style.display = 'none';
    }
}
const textToType = "Moh Zaeni Sahrudin";
        const textContainer = document.getElementById('text-container');
        const typingText = document.getElementById('typing-text');

        function typeText() {
            let index = 0;
            const typingSpeed = 200;

            function typeCharacter() {
                if (index < textToType.length) {
                    typingText.textContent += textToType.charAt(index);
                    index++;
                    setTimeout(typeCharacter, typingSpeed);
                }
            }

            typeCharacter();
        }

        typeText();
        const audio = document.getElementById("myAudio");
        const playButton = document.getElementById("playButton");
        const playingText = document.getElementById("playingText");

        playButton.addEventListener("click", () => {
            // Cek apakah audio sedang dimainkan atau dijeda
            if (audio.paused) {
                // Mulai pemutaran audio
                audio.play();
                // Ganti gambar menjadi ikon pause
                playButton.src = "https://i.ibb.co/zHqkBLw/images-1-removebg-preview.png";
                // Tampilkan teks saat lagu dimainkan
                playingText.style.display = "block";
            } else {
                // Jeda pemutaran audio
                audio.pause();
                // Ganti gambar menjadi ikon play
                playButton.src = "https://i.ibb.co/0qPsQ5w/images-removebg-preview.png";
                // Sembunyikan teks saat lagu dijeda
                playingText.style.display = "none";
            }
        });
// JavaScript untuk menampilkan dan menyembunyikan popup
    document.getElementById("icon").addEventListener("click", function() {
        document.getElementById("popup").style.display = "block";
    });

    // Menyembunyikan popup saat diklik di luar gambar
    document.getElementById("popup").addEventListener("click", function(e) {
        if (e.target.id === "popup") {
            this.style.display = "none";
        }
    });
