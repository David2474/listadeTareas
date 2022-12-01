export default (date) => {
    const dateFormat = document.createElement('li');
    dateFormat.classList.add('date');
    dateFormat.innerHTML = date;
    return dateFormat;
}