// 모바일 청첩장 js
const groomBtn = document.querySelector('.groom_letter');
const brideBtn = document.querySelector('.bride_letter');

const groomModal = document.querySelector('.groom_modal');
const brideModal = document.querySelector('.bride_modal');

const closeBtns = document.querySelectorAll('.letter_close');


// 신랑 편지 열기
groomBtn.addEventListener('click', function () {
    groomModal.style.display = 'flex';
});


// 신부 편지 열기
brideBtn.addEventListener('click', function () {
    brideModal.style.display = 'flex';
});


// X 버튼으로 닫기
closeBtns.forEach(function (button) {
    button.addEventListener('click', function () {
        button.closest('.letter_modal').style.display = 'none';
    });
});


// 편지 바깥쪽 클릭하면 닫기
document.querySelectorAll('.letter_modal').forEach(function (modal) {

    modal.addEventListener('click', function (e) {

        if (e.target === modal) {
            modal.style.display = 'none';
        }

    });

});
const highlightThumbs = document.querySelectorAll('.story_thumb[data-year]');
const highlightModal = document.querySelector('.highlight_modal');
const highlightSlides = document.querySelector('.highlight_slides');
const highlightClose = document.querySelector('.highlight_close');
const progressBars = document.querySelectorAll('.highlight_progress span');

const highlightPhotos = {

    "2026": [
        "./image/full1.jpg",
        "./image/full2.jpg",
        "./image/full3.jpg",
        "./image/full4.jpg",
        "./image/full5.jpg"
    ],

    "2025": [
        "./image/full1.jpg",
        "./image/full2.jpg",
        "./image/full3.jpg",
        "./image/full4.jpg",
        "./image/full5.jpg"
    ],

    "2024": [
        "./image/full1.jpg",
        "./image/full2.jpg",
        "./image/full3.jpg",
        "./image/full4.jpg",
        "./image/full5.jpg"
    ],

    "2023": [
        "./image/full1.jpg",
        "./image/full2.jpg",
        "./image/full3.jpg",
        "./image/full4.jpg",
        "./image/full5.jpg"
    ]

};
console.log(highlightThumbs);
let currentPhoto = 0;

// 하이라이트 클릭
highlightThumbs.forEach((thumb) => {

    thumb.addEventListener('click', () => {

        const year = thumb.dataset.year;
        const photos = highlightPhotos[year];

        // 기존 사진 삭제
        highlightSlides.innerHTML = '';

        // 첫 번째 사진부터 시작
        currentPhoto = 0;

        // 사진 5장 생성
        photos.forEach((photo, index) => {

            const slide = document.createElement('div');
            slide.className = 'highlight_slide';

            // 첫 번째 사진만 보이게
            if (index === 0) {
                slide.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = photo;

            slide.appendChild(img);
            highlightSlides.appendChild(slide);

        });

        // 모달 열기
        highlightModal.classList.add('active');

        document.body.style.overflow = 'hidden';

        // 진행바 첫 번째 활성화
        progressBars.forEach((bar, index) => {
            bar.classList.toggle('active', index === 0);
        });

    });

});


// 사진 화면을 클릭하면 다음 사진
highlightSlides.addEventListener('click', () => {

    const slides = highlightSlides.querySelectorAll('.highlight_slide');

    if (slides.length === 0) return;

    // 현재 사진 숨기기
    slides[currentPhoto].classList.remove('active');

    // 다음 사진
    currentPhoto++;

    // 마지막 사진이면 첫 번째로
    if (currentPhoto >= slides.length) {
        currentPhoto = 0;
    }

    // 다음 사진 보여주기
    slides[currentPhoto].classList.add('active');

    // 진행바 변경
    progressBars.forEach((bar, index) => {
        bar.classList.toggle('active', index === currentPhoto);
    });

});


// X 버튼으로 닫기
highlightClose.addEventListener('click', () => {

    highlightModal.classList.remove('active');

    document.body.style.overflow = '';

});

// 프로필 사진
const profileImg = document.querySelector('.profile_img');
const profilePhotoModal = document.querySelector('.profile_photo_modal');
const profilePhotoClose = document.querySelector('.profile_photo_close');

profileImg.addEventListener('click', () => {

    profilePhotoModal.classList.add('active');

    document.body.style.overflow = 'hidden';

});


// 프로필 사진 닫기
profilePhotoClose.addEventListener('click', () => {

    profilePhotoModal.classList.remove('active');

    document.body.style.overflow = '';

});
// 갤러리 사진 클릭 시 팝업 열기
// 갤러리 사진 클릭 시 팝업 열기
const gridImgs = document.querySelectorAll('.photo_grid .grid_item img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.modal .close_btn');

gridImgs.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// 닫기 버튼 누르면 닫힘
if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// 배경 누르면 닫힘
if(modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
//신랑, 신부 소개글
document.addEventListener("DOMContentLoaded", function () {
    const groomBtn = document.querySelector(".btn_groom");
    const brideBtn = document.querySelector(".btn_bride");
    
    const groomModal = document.getElementById("groomModal");
    const brideModal = document.getElementById("brideModal");
    
    // 닫기 버튼 클래스를 .close_btn으로 변경
    const closeBtns = document.querySelectorAll(".close_btn");

    if (groomBtn && groomModal) {
        groomBtn.addEventListener("click", function () {
            groomModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    if (brideBtn && brideModal) {
        brideBtn.addEventListener("click", function () {
            brideModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    }

    closeBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (groomModal) groomModal.style.display = "none";
            if (brideModal) brideModal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target === groomModal) {
            groomModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
        if (event.target === brideModal) {
            brideModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
// 지도 클릭 시 확대
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("mapModal");
    const img = document.querySelector(".map_img_popup");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".modal_close");

    // 지도 사진을 터치/클릭하면 모달 열기
    if (img) {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    }

    // X 버튼 누르면 닫기
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }

    // 어두운 배경 영역을 눌러도 닫기
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});