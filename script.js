let currentPage = 0;
const totalPages = 604; // Örneğin toplam 604 sayfa var
const savedPageKey = 'kuranSavedPage';
let cuzler = [];
let sureler = [
    { name: "Abese", startPage: 584 },
    { name: "Ahkaf", startPage: 501 },
    { name: "Ahzab", startPage: 417 },
    { name: "Ala, Ğaşiye", startPage: 591 },
    { name: "Alak", startPage: 597 },
    { name: "Al-i İmran", startPage: 49 },
    { name: "Ankebut", startPage: 390 },
    { name: "A'raf", startPage: 150 },
    { name: "Asr, Hümeze, Fil", startPage: 601 },
    { name: "Bakara", startPage: 1 },
    { name: "Beled", startPage: 593 },
    { name: "Buruç", startPage: 589 },
    { name: "Casiye", startPage: 498 },
    { name: "Cinn", startPage: 571 },
    { name: "Cuma", startPage: 552 },
    { name: "Duhan", startPage: 495 },
    { name: "Enam", startPage: 127 },
    { name: "Enbiya", startPage: 321 },
    { name: "Enfal", startPage: 176 },
    { name: "Fatır", startPage: 433 },
    { name: "Fatiha", startPage: 0 },
    { name: "Fecr", startPage: 592 },
    { name: "Fetih", startPage: 510 },
    { name: "Furkan", startPage: 358 },
    { name: "Fussilet", startPage: 476 },
    { name: "Gaf", startPage: 517 },
    { name: "Garia, Tekasür", startPage: 600 },
    { name: "Hacc", startPage: 331 },
    { name: "Hadid", startPage: 536 },
    { name: "Hakk", startPage: 565 },
    { name: "Haşr", startPage: 544 },
    { name: "Hicr", startPage: 261 },
    { name: "Hucurat", startPage: 514 },
    { name: "Hud", startPage: 220 },
    { name: "İbrahim", startPage: 254 },
    { name: "İhlas, Felak, Nass", startPage: 604 },
    { name: "İnfitar", startPage: 586 },
    { name: "İnsan", startPage: 577 },
    { name: "İnşikak", startPage: 588 },
    { name: "İnşirah, Tin", startPage: 596 },
    { name: "İsra", startPage: 281 },
    { name: "Kadir, Beyyine", startPage: 598 },
    { name: "Kafirun, Nasr, Tebbet", startPage: 603 },
    { name: "Kalem", startPage: 563 },
    { name: "Kamer", startPage: 527 },
    { name: "Kasas", startPage: 384 },
    { name: "Kehf", startPage: 292 },
    { name: "Kıyamet", startPage: 576 },
    { name: "Kureyş, Maun, Kevser", startPage: 602 },
    { name: "Leyl, Duha", startPage: 595 },
    { name: "Lokman", startPage: 410 },
    { name: "Maide", startPage: 105 },
    { name: "Meariç", startPage: 567 },
    { name: "Meryem", startPage: 304 },
    { name: "Muhammed", startPage: 506 },
    { name: "Mü'min", startPage: 466 },
    { name: "Mu'minun", startPage: 341 },
    { name: "Mutaffifin", startPage: 587 },
    { name: "Mücadele", startPage: 541 },
    { name: "Müddesir", startPage: 574 },
    { name: "Mülk", startPage: 561 },
    { name: "Mümtehine", startPage: 548 },
    { name: "Münafikun", startPage: 553 },
    { name: "Mürselet", startPage: 579 },
    { name: "Müzemmil", startPage: 573 },
    { name: "Nahl", startPage: 266 },
    { name: "Naziat", startPage: 582 },
    { name: "Nebe", startPage: 581 },
    { name: "Necm", startPage: 525 },
    { name: "Neml", startPage: 376 },
    { name: "Nisa", startPage: 76 },
    { name: "Nuh", startPage: 569 },
    { name: "Nur", startPage: 349 },
    { name: "Rad", startPage: 248 },
    { name: "Rahman", startPage: 530 },
    { name: "Rum", startPage: 403 },
    { name: "Sad", startPage: 452 },
    { name: "Saff", startPage: 550 },
    { name: "Saffat", startPage: 445 },
    { name: "Sebe", startPage: 427 },
    { name: "Secde", startPage: 414 },
    { name: "Şems", startPage: 594 },
    { name: "Şuara", startPage: 366 },
    { name: "Şuara", startPage: 482 },
    { name: "Tağabun", startPage: 555 },
    { name: "Taha", startPage: 311 },
    { name: "Tahrim", startPage: 559 },
    { name: "Talak", startPage: 557 },
    { name: "Tarık", startPage: 590 },
    { name: "Tekvir", startPage: 585 },
    { name: "Tevbe", startPage: 186 },
    { name: "Tur", startPage: 522 },
    { name: "Vakıa", startPage: 533 },
    { name: "Yasin", startPage: 439 },
    { name: "Yunus", startPage: 207 },
    { name: "Yusuf", startPage: 234 },
    { name: "Zariyat", startPage: 519 },
    { name: "Zilzal, Adiyat", startPage: 599 },
    { name: "Zuhruf", startPage: 488 },
    { name: "Zumer", startPage: 457 },
];

const secdePages = [175,250,271,292,308,333,364,378,415,453,479,589,597]; // Secde ayetleri içeren sayfalar

document.addEventListener('DOMContentLoaded', () => {
    initializeCuzler();
    populatePageSelect();
    populateCuzSelect();
    loadSavedPage();
    updatePage();
    updateCurrentPageDisplay();
    populateSureList();
    checkSecdePage(currentPage); // İlk yükleme sırasında kontrol
    hideSecdePopup(); // Başlangıçta popup'u gizle
});

function initializeCuzler() {
    const pageCountPerCuz = 20;
    const cuzCount = Math.ceil(totalPages / pageCountPerCuz);
    for (let i = 0; i < cuzCount; i++) {
        const startPage = i * pageCountPerCuz;
        const endPage = Math.min(startPage + pageCountPerCuz - 1, totalPages - 1);
        cuzler.push({ name: `${i + 1}. Cüz`, startPage, endPage });
    }
}

function populatePageSelect() {
    const pageSelect = document.getElementById('pageSelect');
    for (let i = 0; i < totalPages; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        pageSelect.appendChild(option);
    }
    pageSelect.value = currentPage;
}

function populateCuzSelect() {
    const cuzSelect = document.getElementById('cuzSelect');
    cuzler.forEach(cuz => {
        let option = document.createElement('option');
        option.value = cuz.startPage;
        option.textContent = cuz.name;
        cuzSelect.appendChild(option);
    });
}

function populateSureList() {
    const sureList = document.getElementById('sureList');
    sureler.forEach((sure, index) => {
        let li = document.createElement('li');
        li.textContent = sure.name;
        li.onclick = () => selectSure(index);
        sureList.appendChild(li);
    });
}

function selectSure(index) {
    const sureListItems = document.getElementById('sureList').children;
    for (let li of sureListItems) {
        li.classList.remove('selected');
    }
    sureListItems[index].classList.add('selected');
    currentPage = sureler[index].startPage;
    updatePage();
    updateCurrentPageDisplay();
    checkSecdePage(currentPage); // Sayfa değişiminde kontrol
}

function updatePage() {
    const kuranPage = document.getElementById('kuranPage');
    kuranPage.src = `Kuran_Sayfalari/${currentPage}.png`;
    document.getElementById('pageSelect').value = currentPage;
    saveCurrentPage();
    scrollToTop(); // Sayfa değişiminde sayfa başına konumlan
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage();
        updateCurrentPageDisplay();
        checkSecdePage(currentPage); // Sayfa değişiminde kontrol
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
        updateCurrentPageDisplay();
        checkSecdePage(currentPage); // Sayfa değişiminde kontrol
    }
}

function jumpToPage() {
    const pageSelect = document.getElementById('pageSelect');
    currentPage = parseInt(pageSelect.value);
    updatePage();
    updateCurrentPageDisplay();
    checkSecdePage(currentPage); // Sayfa değişiminde kontrol
}

function jumpToCuz() {
    const cuzSelect = document.getElementById('cuzSelect');
    currentPage = parseInt(cuzSelect.value);
    updatePage();
    updateCurrentPageDisplay();
    checkSecdePage(currentPage); // Sayfa değişiminde kontrol
}

function updateCurrentPageDisplay() {
    document.getElementById('currentPageDisplay').textContent = currentPage;
}

function saveCurrentPage() {
    localStorage.setItem(savedPageKey, currentPage);
    document.getElementById('savedPage').textContent = currentPage;
}

function loadSavedPage() {
    const savedPage = localStorage.getItem(savedPageKey);
    if (savedPage !== null) {
        currentPage = parseInt(savedPage);
    }
    document.getElementById('savedPage').textContent = currentPage;
}

function scrollToTop() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.scrollTop = 0;
}

function checkSecdePage(page) {
    const popup = document.getElementById('secdePopup');
    if (secdePages.includes(page)) {
        showSecdePopup(); // showSecdePopup fonksiyonunu çağır
        setTimeout(hideSecdePopup, 5000); // 5 saniye sonra popup'u gizle
    } else {
        hideSecdePopup(); // Aksi takdirde popup'u gizle
    }
}

function showSecdePopup() {
    document.getElementById('secdePopup').classList.add('show');
}

function hideSecdePopup() {
    document.getElementById('secdePopup').classList.remove('show');
}

document.getElementById('sureSearch').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const sureList = document.getElementById('sureList');
    const sureItems = sureList.getElementsByTagName('li');

    for (let i = 0; i < sureItems.length; i++) {
        const sureName = sureItems[i].textContent.toLowerCase();
        if (sureName.includes(searchText)) {
            sureItems[i].style.display = '';
        } else {
            sureItems[i].style.display = 'none';
        }
    }
});