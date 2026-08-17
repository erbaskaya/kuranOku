const TOTAL_PAGES = 605;
const STORAGE_KEYS = {
  lastPage: 'kuranLastPage',
  oldSavedPage: 'kuranSavedPage',
  bookmarks: 'kuranBookmarks',
  theme: 'kuranTheme'
};

const JUZ_START_PAGES = [
  0, 21, 41, 61, 81, 101, 121, 141, 161, 181,
  201, 221, 241, 261, 281, 301, 321, 341, 361, 381,
  401, 421, 441, 461, 481, 501, 521, 541, 561, 581
];

const sureler = [
  { name: 'Abese', startPage: 584 },
  { name: 'Ahkaf', startPage: 501 },
  { name: 'Ahzab', startPage: 417 },
  { name: 'Ala, Ğaşiye', startPage: 591 },
  { name: 'Alak', startPage: 597 },
  { name: 'Al-i İmran', startPage: 49 },
  { name: 'Ankebut', startPage: 390 },
  { name: "A'raf", startPage: 150 },
  { name: 'Asr, Hümeze, Fil', startPage: 601 },
  { name: 'Bakara', startPage: 1 },
  { name: 'Beled', startPage: 593 },
  { name: 'Buruç', startPage: 589 },
  { name: 'Casiye', startPage: 498 },
  { name: 'Cinn', startPage: 571 },
  { name: 'Cuma', startPage: 552 },
  { name: 'Duhan', startPage: 495 },
  { name: 'Enam', startPage: 127 },
  { name: 'Enbiya', startPage: 321 },
  { name: 'Enfal', startPage: 176 },
  { name: 'Fatır', startPage: 433 },
  { name: 'Fatiha', startPage: 0 },
  { name: 'Fecr', startPage: 592 },
  { name: 'Fetih', startPage: 510 },
  { name: 'Furkan', startPage: 358 },
  { name: 'Fussilet', startPage: 476 },
  { name: 'Kaf', startPage: 517 },
  { name: 'Karia, Tekasür', startPage: 600 },
  { name: 'Hacc', startPage: 331 },
  { name: 'Hadid', startPage: 536 },
  { name: 'Hakka', startPage: 565 },
  { name: 'Haşr', startPage: 544 },
  { name: 'Hicr', startPage: 261 },
  { name: 'Hucurat', startPage: 514 },
  { name: 'Hud', startPage: 220 },
  { name: 'İbrahim', startPage: 254 },
  { name: 'İhlas, Felak, Nas', startPage: 604 },
  { name: 'İnfitar', startPage: 586 },
  { name: 'İnsan', startPage: 577 },
  { name: 'İnşikak', startPage: 588 },
  { name: 'İnşirah, Tin', startPage: 596 },
  { name: 'İsra', startPage: 281 },
  { name: 'Kadir, Beyyine', startPage: 598 },
  { name: 'Kafirun, Nasr, Tebbet', startPage: 603 },
  { name: 'Kalem', startPage: 563 },
  { name: 'Kamer', startPage: 527 },
  { name: 'Kasas', startPage: 384 },
  { name: 'Kehf', startPage: 292 },
  { name: 'Kıyamet', startPage: 576 },
  { name: 'Kureyş, Maun, Kevser', startPage: 602 },
  { name: 'Leyl, Duha', startPage: 595 },
  { name: 'Lokman', startPage: 410 },
  { name: 'Maide', startPage: 105 },
  { name: 'Meariç', startPage: 567 },
  { name: 'Meryem', startPage: 304 },
  { name: 'Muhammed', startPage: 506 },
  { name: "Mü'min", startPage: 466 },
  { name: "Mu'minun", startPage: 341 },
  { name: 'Mutaffifin', startPage: 587 },
  { name: 'Mücadele', startPage: 541 },
  { name: 'Müddesir', startPage: 574 },
  { name: 'Mülk', startPage: 561 },
  { name: 'Mümtehine', startPage: 548 },
  { name: 'Münafikun', startPage: 553 },
  { name: 'Mürselet', startPage: 579 },
  { name: 'Müzemmil', startPage: 573 },
  { name: 'Nahl', startPage: 266 },
  { name: 'Naziat', startPage: 582 },
  { name: 'Nebe', startPage: 581 },
  { name: 'Necm', startPage: 525 },
  { name: 'Neml', startPage: 376 },
  { name: 'Nisa', startPage: 76 },
  { name: 'Nuh', startPage: 569 },
  { name: 'Nur', startPage: 349 },
  { name: 'Rad', startPage: 248 },
  { name: 'Rahman', startPage: 530 },
  { name: 'Rum', startPage: 403 },
  { name: 'Sad', startPage: 452 },
  { name: 'Saff', startPage: 550 },
  { name: 'Saffat', startPage: 445 },
  { name: 'Sebe', startPage: 427 },
  { name: 'Secde', startPage: 414 },
  { name: 'Şems', startPage: 594 },
  { name: 'Şuara', startPage: 366 },
  { name: 'Şura', startPage: 482 },
  { name: 'Tağabun', startPage: 555 },
  { name: 'Taha', startPage: 311 },
  { name: 'Tahrim', startPage: 559 },
  { name: 'Talak', startPage: 557 },
  { name: 'Tarık', startPage: 590 },
  { name: 'Tekvir', startPage: 585 },
  { name: 'Tevbe', startPage: 186 },
  { name: 'Tur', startPage: 522 },
  { name: 'Vakıa', startPage: 533 },
  { name: 'Yasin', startPage: 439 },
  { name: 'Yunus', startPage: 207 },
  { name: 'Yusuf', startPage: 234 },
  { name: 'Zariyat', startPage: 519 },
  { name: 'Zilzal, Adiyat', startPage: 599 },
  { name: 'Zuhruf', startPage: 488 },
  { name: 'Zumer', startPage: 457 }
];

const secdePages = [175, 250, 271, 292, 308, 333, 364, 378, 415, 453, 479, 589, 597];
const orderedSureler = [...sureler].sort((a, b) => a.startPage - b.startPage);

let currentPage = 0;
let lastReadPage = 0;
let bookmarks = [];
let toastTimer;
let touchStartX = 0;
let touchStartY = 0;

const els = {};

function $(id) { return document.getElementById(id); }
function displayPage(page) { return `${page + 1}. sayfa`; }
function clampPage(page) { return Math.max(0, Math.min(TOTAL_PAGES - 1, Number(page) || 0)); }

function init() {
  Object.assign(els, {
    pageSelect: $('pageSelect'),
    cuzSelect: $('cuzSelect'),
    currentPageDisplay: $('currentPageDisplay'),
    currentSurahLabel: $('currentSurahLabel'),
    kuranPage: $('kuranPage'),
    pageLoading: $('pageLoading'),
    prevBtn: $('prevBtn'),
    nextBtn: $('nextBtn'),
    mobilePrevBtn: $('mobilePrevBtn'),
    mobileNextBtn: $('mobileNextBtn'),
    bookmarkBtn: $('bookmarkBtn'),
    quickBookmarkBtn: $('quickBookmarkBtn'),
    mobileBookmarkBtn: $('mobileBookmarkBtn'),
    bookmarkList: $('bookmarkList'),
    lastReadLabel: $('lastReadLabel'),
    readingProgress: $('readingProgress'),
    progressText: $('progressText'),
    continueBtn: $('continueBtn'),
    sureSearch: $('sureSearch'),
    sureList: $('sureList'),
    surahCount: $('surahCount'),
    themeBtn: $('themeBtn'),
    focusBtn: $('focusBtn'),
    shareBtn: $('shareBtn'),
    openSidebarBtn: $('openSidebarBtn'),
    closeSidebarBtn: $('closeSidebarBtn'),
    sidebarBackdrop: $('sidebarBackdrop')
  });

  migrateOldStorage();
  loadState();
  applyInitialTheme();
  populatePageSelect();
  populateCuzSelect();
  renderSureList();
  bindEvents();

  const hashPage = getPageFromHash();
  currentPage = hashPage ?? lastReadPage;
  setPage(currentPage, { saveAsLastRead: false, silent: true, updateHash: hashPage !== null });
  renderBookmarks();
  renderContinueCard();
}

function migrateOldStorage() {
  if (localStorage.getItem(STORAGE_KEYS.lastPage) === null) {
    const old = localStorage.getItem(STORAGE_KEYS.oldSavedPage);
    if (old !== null) localStorage.setItem(STORAGE_KEYS.lastPage, old);
  }
}

function loadState() {
  lastReadPage = clampPage(localStorage.getItem(STORAGE_KEYS.lastPage));
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookmarks) || '[]');
    bookmarks = Array.isArray(stored)
      ? stored.filter(item => Number.isInteger(item.page)).map(item => ({ ...item, page: clampPage(item.page) }))
      : [];
  } catch {
    bookmarks = [];
  }
}

function populatePageSelect() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < TOTAL_PAGES; i++) {
    const option = document.createElement('option');
    option.value = String(i);
    option.textContent = displayPage(i);
    fragment.appendChild(option);
  }
  els.pageSelect.appendChild(fragment);
}

function populateCuzSelect() {
  JUZ_START_PAGES.forEach((startPage, index) => {
    const option = document.createElement('option');
    option.value = String(startPage);
    option.textContent = `${index + 1}. Cüz`;
    els.cuzSelect.appendChild(option);
  });
}

function bindEvents() {
  els.prevBtn.addEventListener('click', previousPage);
  els.nextBtn.addEventListener('click', nextPage);
  els.mobilePrevBtn.addEventListener('click', previousPage);
  els.mobileNextBtn.addEventListener('click', nextPage);

  els.pageSelect.addEventListener('change', e => setPage(e.target.value));
  els.cuzSelect.addEventListener('change', e => setPage(e.target.value));

  els.bookmarkBtn.addEventListener('click', toggleBookmark);
  els.quickBookmarkBtn.addEventListener('click', toggleBookmark);
  els.mobileBookmarkBtn.addEventListener('click', toggleBookmark);
  els.continueBtn.addEventListener('click', () => setPage(lastReadPage));

  els.sureSearch.addEventListener('input', renderSureList);
  els.themeBtn.addEventListener('click', toggleTheme);
  els.focusBtn.addEventListener('click', toggleFocusMode);
  els.shareBtn.addEventListener('click', shareCurrentPage);

  els.openSidebarBtn.addEventListener('click', openSidebar);
  els.closeSidebarBtn.addEventListener('click', closeSidebar);
  els.sidebarBackdrop.addEventListener('click', closeSidebar);

  els.kuranPage.addEventListener('load', () => {
    els.kuranPage.classList.remove('loading');
    els.pageLoading.hidden = true;
  });
  els.kuranPage.addEventListener('error', () => {
    els.kuranPage.classList.remove('loading');
    els.pageLoading.hidden = false;
    els.pageLoading.textContent = 'Sayfa görseli yüklenemedi.';
  });

  document.addEventListener('keydown', handleKeyboard);
  window.addEventListener('hashchange', () => {
    const page = getPageFromHash();
    if (page !== null && page !== currentPage) setPage(page, { updateHash: false });
  });

  const stage = document.querySelector('.reader-stage');
  stage.addEventListener('touchstart', e => {
    const touch = e.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });
  stage.addEventListener('touchend', e => {
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) nextPage();
      else previousPage();
    }
  }, { passive: true });
}

function setPage(page, options = {}) {
  const { saveAsLastRead = true, silent = false, updateHash = true } = options;
  const next = clampPage(page);
  currentPage = next;

  els.kuranPage.classList.add('loading');
  els.pageLoading.hidden = false;
  els.pageLoading.textContent = 'Sayfa yükleniyor…';
  els.kuranPage.src = `Kuran_Sayfalari/${currentPage}.png`;
  els.kuranPage.alt = `Kur'an ${displayPage(currentPage)}`;

  els.pageSelect.value = String(currentPage);
  syncCuzSelect();
  syncReaderLabels();
  syncNavigationState();
  syncBookmarkButtons();
  highlightActiveSurah();

  if (saveAsLastRead) {
    lastReadPage = currentPage;
    localStorage.setItem(STORAGE_KEYS.lastPage, String(lastReadPage));
    renderContinueCard();
  }

  if (updateHash) history.replaceState(null, '', `#sayfa-${currentPage + 1}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!silent && secdePages.includes(currentPage)) {
    showToast('Bu sayfada secde ayeti bulunmaktadır.', 'warning');
  }
  closeSidebar();
}

function nextPage() {
  if (currentPage < TOTAL_PAGES - 1) setPage(currentPage + 1);
}

function previousPage() {
  if (currentPage > 0) setPage(currentPage - 1);
}

function syncReaderLabels() {
  els.currentPageDisplay.textContent = displayPage(currentPage);
  els.currentSurahLabel.textContent = getCurrentSurahName(currentPage);
}

function syncNavigationState() {
  const atStart = currentPage === 0;
  const atEnd = currentPage === TOTAL_PAGES - 1;
  [els.prevBtn, els.mobilePrevBtn].forEach(btn => { btn.disabled = atStart; });
  [els.nextBtn, els.mobileNextBtn].forEach(btn => { btn.disabled = atEnd; });
}

function syncCuzSelect() {
  let selected = JUZ_START_PAGES[0];
  for (const start of JUZ_START_PAGES) {
    if (start <= currentPage) selected = start;
    else break;
  }
  els.cuzSelect.value = String(selected);
}

function getCurrentSurahName(page) {
  let match = orderedSureler[0];
  for (const sure of orderedSureler) {
    if (sure.startPage <= page) match = sure;
    else break;
  }
  return match?.name || 'Kur’an';
}

function renderSureList() {
  const query = normalizeText(els.sureSearch.value.trim());
  const filtered = sureler
    .filter(sure => normalizeText(sure.name).includes(query))
    .sort((a, b) => a.name.localeCompare(b.name, 'tr'));

  els.surahCount.textContent = String(filtered.length);
  els.sureList.innerHTML = '';

  filtered.forEach(sure => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.page = String(sure.startPage);
    button.innerHTML = `<span>${escapeHtml(sure.name)}</span><small>${sure.startPage + 1}</small>`;
    button.addEventListener('click', () => setPage(sure.startPage));
    li.appendChild(button);
    els.sureList.appendChild(li);
  });
  highlightActiveSurah();
}

function highlightActiveSurah() {
  if (!els.sureList) return;
  const currentName = getCurrentSurahName(currentPage);
  els.sureList.querySelectorAll('button').forEach(button => {
    const page = Number(button.dataset.page);
    button.classList.toggle('active', getCurrentSurahName(page) === currentName && page <= currentPage);
  });
}

function normalizeText(text) {
  return text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function toggleBookmark() {
  const index = bookmarks.findIndex(item => item.page === currentPage);
  if (index >= 0) {
    bookmarks.splice(index, 1);
    showToast(`${displayPage(currentPage)} yer imlerinden kaldırıldı.`);
  } else {
    bookmarks.unshift({
      page: currentPage,
      createdAt: new Date().toISOString(),
      surah: getCurrentSurahName(currentPage)
    });
    bookmarks = bookmarks.slice(0, 20);
    showToast(`${displayPage(currentPage)} yer imlerine kaydedildi.`);
  }
  saveBookmarks();
  renderBookmarks();
  syncBookmarkButtons();
}

function saveBookmarks() {
  localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify(bookmarks));
}

function renderBookmarks() {
  els.bookmarkList.innerHTML = '';
  if (bookmarks.length === 0) {
    els.bookmarkList.innerHTML = '<div class="bookmark-empty">Henüz yer imi yok. Okurken istediğin sayfayı ayrıca kaydedebilirsin.</div>';
    return;
  }

  bookmarks.forEach(item => {
    const row = document.createElement('div');
    row.className = 'bookmark-item';

    const jump = document.createElement('button');
    jump.className = 'bookmark-jump';
    jump.type = 'button';
    jump.innerHTML = `<strong>${displayPage(item.page)}</strong><small>${escapeHtml(item.surah || getCurrentSurahName(item.page))}</small>`;
    jump.addEventListener('click', () => setPage(item.page));

    const remove = document.createElement('button');
    remove.className = 'bookmark-remove';
    remove.type = 'button';
    remove.setAttribute('aria-label', `${displayPage(item.page)} yer imini sil`);
    remove.textContent = '✕';
    remove.addEventListener('click', () => {
      bookmarks = bookmarks.filter(bookmark => bookmark.page !== item.page);
      saveBookmarks();
      renderBookmarks();
      syncBookmarkButtons();
    });

    row.append(jump, remove);
    els.bookmarkList.appendChild(row);
  });
}

function syncBookmarkButtons() {
  const saved = bookmarks.some(item => item.page === currentPage);
  els.quickBookmarkBtn.classList.toggle('active', saved);
  els.quickBookmarkBtn.textContent = saved ? '★' : '☆';
  els.quickBookmarkBtn.setAttribute('aria-label', saved ? 'Bu sayfayı yer imlerinden kaldır' : 'Bu sayfayı yer imlerine ekle');
  els.mobileBookmarkBtn.classList.toggle('active', saved);
  els.mobileBookmarkBtn.textContent = saved ? '★ Kaydedildi' : '☆ Kaydet';
  els.bookmarkBtn.textContent = saved ? '− Yer imini kaldır' : '+ Bu sayfayı kaydet';
}

function renderContinueCard() {
  els.lastReadLabel.textContent = displayPage(lastReadPage);
  const pct = Math.round(((lastReadPage + 1) / TOTAL_PAGES) * 100);
  els.readingProgress.style.width = `${pct}%`;
  els.progressText.textContent = `%${pct} tamamlandı`;
  els.continueBtn.disabled = lastReadPage === currentPage;
  els.continueBtn.textContent = lastReadPage === currentPage ? 'Buradasın' : 'Devam et';
}

function getPageFromHash() {
  const match = window.location.hash.match(/^#sayfa-(\d+)$/);
  if (!match) return null;
  const page = Number(match[1]) - 1;
  return Number.isInteger(page) && page >= 0 && page < TOTAL_PAGES ? page : null;
}

function applyInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEYS.theme, next);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  els.themeBtn.textContent = theme === 'dark' ? '☀ Açık tema' : '◐ Koyu tema';
}

function toggleFocusMode() {
  document.body.classList.toggle('focus-mode');
  const active = document.body.classList.contains('focus-mode');
  els.focusBtn.textContent = active ? '◫ Menüyü göster' : '◫ Odak modu';
}

function openSidebar() { document.body.classList.add('sidebar-open'); }
function closeSidebar() { document.body.classList.remove('sidebar-open'); }

function handleKeyboard(event) {
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
  if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') nextPage();
  if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') previousPage();
  if (event.key.toLowerCase() === 'b') toggleBookmark();
  if (event.key.toLowerCase() === 'f') toggleFocusMode();
}

async function shareCurrentPage() {
  const shareUrl = `${window.location.origin}${window.location.pathname}#sayfa-${currentPage + 1}`;
  const data = {
    title: `Kur'an Oku - ${displayPage(currentPage)}`,
    text: `${getCurrentSurahName(currentPage)} · ${displayPage(currentPage)}`,
    url: shareUrl
  };

  try {
    if (navigator.share) {
      await navigator.share(data);
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      showToast('Sayfa bağlantısı panoya kopyalandı.');
    } else {
      showToast('Paylaşım bağlantısı hazır: ' + shareUrl);
    }
  } catch (error) {
    if (error?.name !== 'AbortError') showToast('Paylaşım sırasında bir sorun oluştu.', 'warning');
  }
}

function showToast(message, variant = '') {
  clearTimeout(toastTimer);
  const toast = $('toast');
  toast.textContent = message;
  toast.className = `toast show ${variant}`.trim();
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 3200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', init);
