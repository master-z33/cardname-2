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