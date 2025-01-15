// Utility function to allow only specific requirement input in an input field

const allowOnly = {
    number: (e) => {
        const allowedKeys = [
            'Backspace',
            'Tab',
            'Delete',
            'ArrowLeft',
            'ArrowRight',
        ];

        if (
            !(
                (e.key >= '0' && e.key <= '9') || // Number keys
                allowedKeys.includes(e.key)       // Other allowed keys
            )
        ) {
            e.preventDefault(); // Prevent any other key from being typed
        }
    },
    numWithText: (event) => {
        // Regular expression that allows letters (both lowercase and uppercase) and digits
        const regex = /^[a-zA-Z0-9]*$/;

        // Get the input value
        const inputValue = event.target.value;

        // If the input value matches the regex (only letters and numbers), allow the input
        if (!regex.test(inputValue)) {
            // If it doesn't match, prevent the character input
            event.preventDefault();
        }
    }
}

export { allowOnly };