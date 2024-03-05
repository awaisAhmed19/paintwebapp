const menubtnList = document.querySelectorAll('.menubar-btn');

menubtnList.forEach((menubtn) => {
    menubtn.addEventListener('click', () => {
        const isFocused = menubtn.classList.contains('.menubar-btn.focus');

        if (isFocused) {
            menubtn.classList.remove('focus');
        } else {
            const focusedButton = document.querySelector('.menubar-btn.focus');
            if (focusedButton) {
                focusedButton.classList.remove('.menubar-btn.focus');
            }
            menubtn.classList.add('.menubar-btn.focus');
        }
    });
});

