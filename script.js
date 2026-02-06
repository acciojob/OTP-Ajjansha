//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {

        if (e.key >= 0 && e.key <= 9) {
            code.value = '';
            setTimeout(() => {
                if (codes[index + 1]) {
                    codes[index + 1].focus();
                }
            }, 10);
        }

        if (e.key === 'Backspace') {
            setTimeout(() => {
                if (code.value === '' && codes[index - 1]) {
                    codes[index - 1].focus();
                }
            }, 10);
        }
    });
});
