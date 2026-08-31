// ==========================================
// 🌟 0. 모달 배경 고정 및 스크롤 휨 방지 공통 함수
// ==========================================
let scrollPosition = 0;

function openModal(modalElement) {
    if (!modalElement) return;
    scrollPosition = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    
    modalElement.style.display = 'flex';
    modalElement.classList.add('active');
}

function closeModal(modalElement) {
    if (!modalElement) return;
    modalElement.style.display = 'none';
    modalElement.classList.remove('active');

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollPosition);
}


// ==========================================
// 1. 편지 모달
// ==========================================
const groomBtn = document.querySelector('.groom_letter');
const brideBtn = document.querySelector('.bride_letter');
const groomModal = document.querySelector('.groom_modal');
const brideModal = document.querySelector('.bride_modal');
const letterCloseBtns = document.querySelectorAll('.letter_close');

if (groomBtn && groomModal) {
    groomBtn.addEventListener('click', () => openModal(groomModal));
}
if (brideBtn && brideModal) {
    brideBtn.addEventListener('click', () => openModal(brideModal));
}

letterCloseBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.letter_modal');
        closeModal(modal);
    });
});

document.querySelectorAll('.letter_modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
});


// ==========================================
// 2. 하이라이트 스토리 모달
// ==========================================
const highlightThumbs = document.querySelectorAll('.story_thumb[data-year]');
const highlightModal = document.querySelector('.highlight_modal');
const highlightSlides = document.querySelector('.highlight_slides');
const highlightClose = document.querySelector('.highlight_close');
const progressBars = document.querySelectorAll('.highlight_progress span');

const highlightPhotos = {
    "2026": ["./image/2026_01.jpg", "./image/2026_02.jpg", "./image/2026_03.jpg", "./image/2026_04.jpg", "./image/2026_05.jpg"],
    "2025": ["./image/2025_01.jpg", "./image/2025_02.jpg", "./image/2025_03.jpg", "./image/2025_04.jpg", "./image/2025_05.jpg"],
    "2024": ["./image/2024_01.jpg", "./image/2024_02.jpg", "./image/2024_03.jpg", "./image/2024_04.jpg", "./image/2024_05.jpg"],
    "2023": ["./image/2023_01.jpg", "./image/2023_02.jpg", "./image/2023_03.jpg", "./image/2023_04.jpg", "./image/2023_05.jpg"]
};

let currentPhoto = 0;

highlightThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const year = thumb.dataset.year;
        const photos = highlightPhotos[year];
        if (!photos) return;

        highlightSlides.innerHTML = '';
        currentPhoto = 0;

        photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'highlight_slide';
            if (index === 0) slide.classList.add('active');

            const img = document.createElement('img');
            img.src = photo;
            slide.appendChild(img);
            highlightSlides.appendChild(slide);
        });

        openModal(highlightModal);

        progressBars.forEach((bar, index) => {
            bar.classList.toggle('active', index === 0);
        });
    });
});

if (highlightSlides) {
    highlightSlides.addEventListener('click', () => {
        const slides = highlightSlides.querySelectorAll('.highlight_slide');
        if (slides.length === 0) return;

        slides[currentPhoto].classList.remove('active');
        currentPhoto++;
        if (currentPhoto >= slides.length) currentPhoto = 0;
        slides[currentPhoto].classList.add('active');

        progressBars.forEach((bar, index) => {
            bar.classList.toggle('active', index === currentPhoto);
        });
    });
}

if (highlightClose && highlightModal) {
    highlightClose.addEventListener('click', () => closeModal(highlightModal));
}


// ==========================================
// 3. 인스타그램 프로필 사진 모달
// ==========================================
const profileImg = document.querySelector('.profile_img');
const profilePhotoModal = document.querySelector('.profile_photo_modal');
const profilePhotoClose = document.querySelector('.profile_photo_close');

if (profileImg && profilePhotoModal) {
    profileImg.addEventListener('click', () => openModal(profilePhotoModal));
}
if (profilePhotoClose && profilePhotoModal) {
    profilePhotoClose.addEventListener('click', () => closeModal(profilePhotoModal));
}


// ==========================================
// 4. 하단 사진 갤러리 팝업 모달
// ==========================================
const gridImgs = document.querySelectorAll('.photo_grid .grid_item img');
const galleryModal = document.getElementById('imageModal');
const galleryModalImg = document.getElementById('modalImg');
const galleryCloseBtn = document.querySelector('#imageModal .close_btn');

gridImgs.forEach(img => {
    img.addEventListener('click', () => {
        if (galleryModalImg) galleryModalImg.src = img.src;
        openModal(galleryModal);
    });
});

if (galleryCloseBtn && galleryModal) {
    galleryCloseBtn.addEventListener('click', () => closeModal(galleryModal));
}

if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) closeModal(galleryModal);
    });
}


// ==========================================
// 5. 신랑, 신부 소개글 모달
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const groomIntroBtn = document.querySelector(".btn_groom");
    const brideIntroBtn = document.querySelector(".btn_bride");
    const groomIntroModal = document.getElementById("groomModal");
    const brideIntroModal = document.getElementById("brideModal");
    const introCloseBtns = document.querySelectorAll(".intro_modal_content .close_btn, .close_btn");

    if (groomIntroBtn && groomIntroModal) {
        groomIntroBtn.addEventListener("click", () => openModal(groomIntroModal));
    }

    if (brideIntroBtn && brideIntroModal) {
        brideIntroBtn.addEventListener("click", () => openModal(brideIntroModal));
    }

    introCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (groomIntroModal) closeModal(groomIntroModal);
            if (brideIntroModal) closeModal(brideIntroModal);
        });
    });

    window.addEventListener("click", function (event) {
        if (groomIntroModal && event.target === groomIntroModal) closeModal(groomIntroModal);
        if (brideIntroModal && event.target === brideIntroModal) closeModal(brideIntroModal);
    });
});


// ==========================================
// 6. 지도 확대 모달
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const mapModal = document.getElementById("mapModal");
    const mapImg = document.querySelector(".map_img_popup");
    const mapModalImg = document.getElementById("modalImg");
    const mapCloseBtn = document.querySelector(".modal_close");

    if (mapImg && mapModal) {
        mapImg.addEventListener("click", function() {
            if (mapModalImg) mapModalImg.src = this.src;
            openModal(mapModal);
        });
    }

    if (mapCloseBtn && mapModal) {
        mapCloseBtn.addEventListener("click", () => closeModal(mapModal));
    }

    if (mapModal) {
        mapModal.addEventListener("click", function(e) {
            if (e.target === mapModal) closeModal(mapModal);
        });
    }
});

//=============================================마음 전하시는 곳===========
const accountToggles = document.querySelectorAll('.account_toggle');

accountToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const info = toggle.nextElementSibling;
        const icon = toggle.querySelector('span:last-child');
        info.classList.toggle('active');
        icon.textContent = info.classList.contains('active') ? '−' : '＋';
    });
});
const copyButtons = document.querySelectorAll('.copy_btn');

copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
        const account = button.previousElementSibling.textContent.replace(/[^0-9]/g, '');

        try {
            await navigator.clipboard.writeText(account);
            const originalText = button.textContent;
            button.textContent = '복사 완료 ✓';

            setTimeout(() => {
                button.textContent = originalText;
            }, 1500);
        } catch (error) {
            alert('계좌번호 복사에 실패했습니다.');
        }
    });
});

//노래 재생
const musicBtn = document.querySelector('.music_btn');
const bgm = document.getElementById('bgm');

musicBtn.addEventListener('click', () => {
    if (bgm.paused) {
        bgm.play();
        musicBtn.textContent = '🔇';
    } else {
        bgm.pause();
        musicBtn.textContent = '🎵';
    }
});