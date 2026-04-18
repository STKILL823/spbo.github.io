// script.js - Анимации и интерактив для меню

document.addEventListener('DOMContentLoaded', () => {
    
    // Элементы
    const playBtn = document.getElementById('playBtn');
    const nicknameInput = document.getElementById('nickname');
    const modeButtons = document.querySelectorAll('.mode-btn');

    // Анимация нажатия на PLAY
    playBtn.addEventListener('click', () => {
        const nickname = nicknameInput.value.trim();
        
        if (nickname === '') {
            nicknameInput.style.borderColor = '#ef4444';
            nicknameInput.placeholder = 'НИКНЕЙМ ОБЯЗАТЕЛЕН!';
            setTimeout(() => {
                nicknameInput.style.borderColor = '#4ade80';
                nicknameInput.placeholder = 'ВВЕДИ НИКНЕЙМ';
            }, 1500);
            return;
        }

        // Крутая анимация нажатия
        playBtn.style.transform = 'scale(0.85)';
        playBtn.style.boxShadow = '0 0 80px #22c55e';
        
        setTimeout(() => {
            alert(`🎮 ИГРА ЗАПУСКАЕТСЯ!\n\nНикнейм: ${nickname}\nРежим: Survival\n\n(Пока что просто заглушка — здесь будет запуск игры)`);
            
            // Возвращаем кнопку в нормальное состояние
            playBtn.style.transform = 'scale(1)';
            playBtn.style.boxShadow = '0 0 40px #facc15';
        }, 300);
    });

    // Переключение режимов
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем active у всех
            modeButtons.forEach(b => b.classList.remove('active'));
            // Добавляем active выбранной
            btn.classList.add('active');
        });
    });

    // Автоматический фокус на поле ника при загрузке
    setTimeout(() => {
        nicknameInput.focus();
    }, 800);

    // Эффект нажатия Enter в поле ника
    nicknameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            playBtn.click();
        }
    });

    // Простая анимация фона (лёгкое мерцание)
    function backgroundPulse() {
        const bg = document.querySelector('.background');
        let opacity = 0.85;
        
        setInterval(() => {
            opacity = opacity === 0.85 ? 0.92 : 0.85;
            bg.style.opacity = opacity;
        }, 4000);
    }

    backgroundPulse();

    // Консольное сообщение (для разработчика)
    console.log('%cWASTELAND.IO MENU ЗАГРУЖЕН УСПЕШНО! 🔥', 
        'color: #4ade80; font-size: 16px; font-weight: bold;');
});
