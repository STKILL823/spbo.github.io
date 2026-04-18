document.addEventListener('DOMContentLoaded', () => {

    const playBtn = document.getElementById('playBtn');
    const nicknameInput = document.getElementById('nickname');
    const serverSelect = document.getElementById('serverSelect');

    nicknameInput.focus();

    // Нажатие на PLAY
    playBtn.addEventListener('click', () => {
        let nickname = nicknameInput.value.trim();

        if (nickname === '') {
            nicknameInput.classList.add('error');
            setTimeout(() => nicknameInput.classList.remove('error'), 1500);
            return;
        }

        playBtn.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            alert(`✅ ИГРА ЗАПУСКАЕТСЯ!\n\nНикнейм: ${nickname}\nСервер: ${serverSelect.value || "Auto Select"}\n\nДобро пожаловать в постапокалипсис!`);
            playBtn.style.transform = 'scale(1)';
        }, 280);
    });

    // Enter = запуск игры
    nicknameInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') playBtn.click();
    });

    // Пульсация фона
    let opacity = 0.75;
    setInterval(() => {
        opacity = opacity === 0.75 ? 0.88 : 0.75;
        document.querySelector('.background').style.opacity = opacity;
    }, 4500);

    console.log('%cDEVAST.IO MENU успешно загружен!', 'color:#4ade80; font-size:16px;');
});
