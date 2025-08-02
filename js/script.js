document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('loading-video');
    const progress = document.querySelector('.progress');

    // Запускаем анимацию прогресс-бара
    progress.style.width = '100%';

    // По окончании видео (5 секунд) можно перенаправить или скрыть загрузочный экран
    video.addEventListener('ended', () => {
        // Например, скрываем загрузочный экран
        document.querySelector('.loading-screen').style.display = 'none';
        // Здесь можно добавить переход к основному контенту Telegram Mini App
    });
});