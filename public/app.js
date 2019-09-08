
document.addEventListener("DOMContentLoaded", () => { M.AutoInit(); });

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();

    deferredPrompt = e;

    deferredPrompt.prompt();

    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Tasks successfully added to home screen.Enjoy the experience !');
            }
            deferredPrompt = null;
        });

});