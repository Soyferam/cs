document.addEventListener('DOMContentLoaded', () => {
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
    tg.requestFullscreen?.();
    console.log('Telegram Web App initialized');
  }

  // Инициализация TonConnect
  const tonConnectUI = new TONConnectUI({
    manifestUrl: 'https://your-app.com/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
  });

  tonConnectUI.onStatusChange(wallet => {
    if (wallet) {
      console.log('Wallet connected:', wallet);
      document.querySelector('.wallet-left').innerHTML = `<img src="./img/logo.png" alt="TON" /> ${wallet.balance || '111.11'}`;
    } else {
      console.log('Wallet disconnected');
      document.querySelector('.wallet-left').innerHTML = `<img src="./img/logo.png" alt="TON" /> 111.11`;
    }
  });

  // Принудительное масштабирование для 9:16
  function enforceAspectRatio() {
    const container = document.querySelector('.app-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const targetAspect = 9 / 16;
    const windowAspect = windowWidth / windowHeight;

    if (windowAspect > targetAspect) {
      container.style.width = `${windowHeight * targetAspect}px`;
      container.style.height = `${windowHeight}px`;
    } else {
      container.style.width = `${windowWidth}px`;
      container.style.height = `${windowWidth / targetAspect}px`;
    }
    container.style.margin = '0 auto';
    container.style.top = '50%';
    container.style.transform = 'translateY(-50%)';
  }

  enforceAspectRatio();
  window.addEventListener('resize', enforceAspectRatio);

  // Обработчики кнопок
  document.querySelector('.create-match-btn').addEventListener('click', () => {
    console.log('Create match clicked');
  });

  document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Info button clicked');
    });
  });

  document.querySelectorAll('.accept-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Accept button clicked');
    });
  });

  document.querySelectorAll('.nav-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      console.log('Nav icon clicked');
    });
  });
});