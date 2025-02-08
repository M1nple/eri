const messages = [
    "Em chắc khummm?",
    "Ơ hẳn hoi??",
    "Cho chọn lại?",
    "Hmmmmmmmmmmmmm",
    "Hơi bùn rùi đok!",
    "Bùn qué",
    "Cắn đít đấy",
    "Wé bùn",
    "Đ hỏi nữa",
    "Có nhanhhhhh ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}