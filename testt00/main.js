//задание 1
function extractNumbers(str) {    return str
    .match(/\d+/g)        ?.map(Number) || [];
}
console.log(extractNumbers("12abc34def56"));

//задание2

function printFibonacciWithDelay(a = 0, b = 1) {
    console.log(a);
    if (b > 144) return;
    setTimeout(() => printFibonacciWithDelay(b, a + b), 1000);}
printFibonacciWithDelay();

//задание3

async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    }catch (error) {
        console.error('Ошибка при выполнении запроса:', error.message);    }
    }
fetchProductTitles();

//задание4

const buttonContainer = document.querySelector('div');
buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {        const color = event.target.textContent;
        document.body.style.backgroundColor = color;    }
});
//задание 5
const square = document.getElementById('square');
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block';
        toggleButton.textContent = 'Hide';
    } else {
        square.style.display = 'none';
        toggleButton.textContent = 'Show';
    }});
//задание 6

const counterElement = document.getElementById('counter');
// Начальное значение счётчикаlet count = 0;
// Запускаем интервал для увеличения счётчика
const interval = setInterval(() => {
    counterElement.textContent = count; // Обновляем текст в элементе
    count++; // Увеличиваем счётчик
    if (count > 100) { // Проверяем, достиг ли счётчик 100        clearInterval(interval); // Останавливаем интервал
    }}, 1); // Интервал в 1 миллисекунду

//задание 7

const jsonUrl = './products.json';
async function fetchData() {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }        const data = await response.json();
        console.log("Полученные данные:", data);
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
}
document.getElementById('fetch-data-btn').addEventListener('click', fetchData);