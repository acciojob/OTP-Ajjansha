//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Initial focus (VERY IMPORTANT for Cypress)
inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener('keyup', (e) => {

        // Forward typing
        if (e.key >= '0' && e.key <= '9') {
            if (inputs[index + 1]) {
                inputs[index + 1].focus();
            }
        }

        // Backspace handling
        if (e.key === 'Backspace') {
            input.value = '';
            if (inputs[index - 1]) {
                inputs[index - 1].focus();
            }
        }
    });
});
