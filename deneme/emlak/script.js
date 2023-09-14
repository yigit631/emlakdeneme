document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuToggle = document.getElementById('menu-toggle');
    const dropdown = document.querySelector('.dropdown');
    const addProjectBtn = document.getElementById('ekle-proje');
    const projectPopup = document.getElementById('proje-ekle-popup');
    const closePopupBtn = document.getElementById('kapat-popup');
    const detayGosterButtons = document.querySelectorAll('.detay-goster');
    const projectDetail = document.getElementById('proje-detay');
    const kapatDetayBtn = document.getElementById('kapat-detay');
    const detayResim = document.getElementById('detay-resim');
    const detayBaslik = document.getElementById('detay-baslik');
    const detayAciklama = document.getElementById('detay-aciklama');
    const detayOdaSayisi = document.getElementById('detay-oda-sayisi');
    const detayMetrekare = document.getElementById('detay-metrekare');
    const detayAdres = document.getElementById('detay-adres');
    const detayFiyat = document.getElementById('detay-fiyat');

    menuIcon.addEventListener('click', function () {
        dropdown.style.display = 'block';
        menuIcon.classList.add('active');
    });

    menuToggle.addEventListener('click', function () {
        dropdown.style.display = 'none';
        menuIcon.classList.remove('active');
    });

    addProjectBtn.addEventListener('click', function () {
        projectPopup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', function () {
        projectPopup.style.display = 'none';
    });

    detayGosterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const proje = button.getAttribute('data-proje');
            const resimSrc = document.querySelector(`.${proje} img`).src;
            const baslikText = document.querySelector(`.${proje} p`).textContent;
            const aciklamaText = document.querySelector(`.${proje} .proje-aciklama`).textContent; // Proje açıklaması ekledim
            const odaSayisiText = button.getAttribute('data-oda-sayisi');
            const metrekareText = button.getAttribute('data-metrekare');
            const adresText = button.getAttribute('data-adres');
            const fiyatText = button.getAttribute('data-fiyat');

            detayResim.src = resimSrc;
            detayBaslik.textContent = baslikText;
            detayAciklama.textContent = aciklamaText;
            detayOdaSayisi.textContent = `Oda Sayısı: ${odaSayisiText}`;
            detayMetrekare.textContent = `Metrekare: ${metrekareText} m²`;
            detayAdres.textContent = `Adres: ${adresText}`;
            detayFiyat.textContent = `Fiyat: ${fiyatText}`;

            projectDetail.style.display = 'flex';
        });
    });

    kapatDetayBtn.addEventListener('click', function () {
        projectDetail.style.display = 'none';
    });
});

// Pop-up proje ekleme formunu açma işlevselliği
const projeEkleBtn = document.getElementById('ekle-proje');
const projectPopup = document.getElementById('proje-ekle-popup');

projeEkleBtn.addEventListener('click', function () {
    projectPopup.style.display = 'block';
});

// Proje Ekleme Formunu Kapatma İşlevselliği (pop-up içerisindeki "Kapat" düğmesi)
const kapatPopupBtn = document.getElementById('kapat-popup');

kapatPopupBtn.addEventListener('click', function () {
    projectPopup.style.display = 'none';
});
// Projeleri kategorilere göre filtrele ve ilgili bölmelere ekle
function renderProjects() {
    const turkiyeProjeleri = document.getElementById('turkiye-projeleri');
    const amerikaProjeleri = document.getElementById('amerika-projeleri');
    const kibrisProjeleri = document.getElementById('kibris-projeleri');

    turkiyeProjeleri.innerHTML = '';
    amerikaProjeleri.innerHTML = '';
    kibrisProjeleri.innerHTML = '';

    projeler.forEach(function (proje) {
        const projeHtml = `
            <div class="proje">
                <img src="${proje.resim}" alt="${proje.baslik}">
                <h3>${proje.baslik}</h3>
                <p class="proje-aciklama">${proje.aciklama}</p>
                <p>Oda Sayısı: ${proje.odaSayisi}</p>
                <p>Metrekare: ${proje.metrekare} m²</p>
                <p>Adres: ${proje.adres}</p>
                <p>Fiyat: ${proje.fiyat}</p>
                <!-- Diğer proje bilgileri -->
            </div>
        `;

        if (proje.kategori === 'Türkiye') {
            turkiyeProjeleri.innerHTML += projeHtml;
        } else if (proje.kategori === 'Amerika') {
            amerikaProjeleri.innerHTML += projeHtml;
        } else if (proje.kategori === 'Kıbrıs') {
            kibrisProjeleri.innerHTML += projeHtml;
        }
    });
}


    // Daha fazla eklenen proje ekleyebilirsiniz


// Eklenen projeleri listeleme işlevi
function renderEklenenProjeler() {
    const eklenenProjelerListesi = document.getElementById('eklenen-projeler-listesi');

    eklenenProjelerListesi.innerHTML = '';

    eklenenProjeler.forEach(function (proje) {
        const projeHtml = `
            <div class="proje">
                <img src="${proje.resim}" alt="${proje.baslik}">
                <h3>${proje.baslik}</h3>
                <p class="proje-aciklama">${proje.aciklama}</p>
                <p>Oda Sayısı: ${proje.odaSayisi}</p>
                <p>Metrekare: ${proje.metrekare} m²</p>
                <p>Adres: ${proje.adres}</p>
                <p>Fiyat: ${proje.fiyat}</p>
                <!-- Diğer proje bilgileri -->
            </div>
        `;

        eklenenProjelerListesi.innerHTML += projeHtml;
    });
}

// Sayfa yüklendiğinde eklenen projeleri görüntüle
document.addEventListener('DOMContentLoaded', function () {
    renderEklenenProjeler();
});
const eklenenProjelerButon = document.querySelector('[data-section="eklenen-projeler"]');
const eklenenProjelerBolumu = document.getElementById('eklenen-projeler');

eklenenProjelerButon.addEventListener('click', function () {
    // Eklenen projeler bölümünü aktif hale getir
    document.querySelectorAll('.project-section').forEach(function (bolum) {
        bolum.classList.remove('active');
    });
    eklenenProjelerBolumu.classList.add('active');
});
// Eklenen Projeleri Görüntüle düğmesine tıklanınca çalışacak işlev
document.getElementById("eklenen-projeler-btn").addEventListener("click", function () {
    // Eklenen projeler bölümünü görüntüleme
    document.getElementById("eklenen-projeler").style.display = "block";

    // Diğer bölümleri gizleme
    var digerBolumler = document.querySelectorAll(".proje-kategori");
    for (var i = 0; i < digerBolumler.length; i++) {
        digerBolumler[i].style.display = "none";
    }
});
