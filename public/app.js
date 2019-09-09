let deferredPrompt;


document.addEventListener("DOMContentLoaded", () => {

    M.AutoInit();

    const installButton = document.querySelector("#install");
    const dropDowns = document.querySelectorAll(".dropdown-trigger");

    M.Dropdown.init(dropDowns, {
        constrainWidth: false
    });

    window.addEventListener('beforeinstallprompt', (e) => {

        e.preventDefault();
        deferredPrompt = e;
        installButton.classList.remove("hide");

    });

    installButton.addEventListener("click", function () {
        deferredPrompt.prompt();

        deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Tasks successfully added to home screen. Enjoy the experience !');
                }
                deferredPrompt = null;
            });

    })

});
