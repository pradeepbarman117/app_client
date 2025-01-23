
const dateFormator = (value) => {
    const date = new Date(value);

    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
}

export default dateFormator