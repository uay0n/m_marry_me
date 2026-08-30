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