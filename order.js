// Извлекаем параметры тура из URL-адреса
const searchParams = new URLSearchParams(window.location.search);
const tourName = searchParams.get('tour');

// Пример данных для отображения
const tours = [
    {
        name: 'Сплави по Тисі + Закарпатський Бограч',
        details: 'Тур из: Мукачево - Чинадійово - Карпати - Свалява, Тур в: Виноградів - Хуст',
        price: 800,
        dates: ['03-06-2024', '08-06-2024', '09-06-2024'],
        description: 'Запрошуємо активно відпочити та помилуватися панорамами гір! Програма туру: День 1 Виїзд із Мукачева (о 8:00). Сплав на катамаранах по річці Тиса, розпочинається від міста Хуст. Сплавляючись гірською річкою ми побачимо чудові панорами гір та послухаємо цікаві історії від наших інструкторів. Завершуємо нашу водну мандрівку у місті Виноградова, урочище Виннички.  По прибуттю на місце фінішу, вас очікує обід – бограч по-Закарпатськи. Повертаємось до Мукачева (орієнтовно о 20:00). Заказник «Чорна Гора», Виноградів , Хуст У вартість туру входить: Бограч, столи та лавиці, супровід гіда, інструктор, оренда спорядження (рафти, весла, жилети). У вартість туру НЕ включено: проїзд, власні витрати, Бограч. Вартість проїзду: 400 грн./ос. Технічна інформація: – участь в сплаві не вимагає попередньої підготовки (досвіду); – чистий час сплаву 3 – 3,5 години, залежно від рівня води; – до і під час сплаву категорично забороняється вживання алкоголю; – маршрут розрахований на середньостатистичну групу фізично здорових людей.',
        image: 'images/tour1.jpg'
    },
    {
        name: 'Термальний комплекс “Жайворонок”',
        details: 'Тур из: Мукачево - Чинадійово - Карпати - Свалява, Тур в: Мукачево',
        price: 350,
        dates: ['03-06-2024', '05-06-2024', '08-06-2024'],
        description: 'Насолоджуйтесь термальними водами та красою Карпат!',
        image: 'images/tour2.jpg'
    },
    // добавьте другие туры
];

// Поиск тура по имени
const tour = tours.find(tour => tour.name === tourName);

// Отображение деталей заказа
const orderDetailsContainer = document.getElementById('orderDetails');
if (tour) {
    const orderDetailsElement = document.createElement('div');
    orderDetailsElement.innerHTML = `
        <img src="${tour.image}" alt="${tour.name}" class="tour-image">
        <h2>${tour.name}</h2>
        <p>${tour.details}</p>
        <p>Ціна: ${tour.price} UAH</p>
        <p>Найближчі дати: ${tour.dates.join(', ')}</p>
        <p>${tour.description}</p>
    `;
    orderDetailsContainer.appendChild(orderDetailsElement);
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Здесь вы можете обработать данные формы, например, отправить их на сервер

    alert('Ваше замовлення прийнято!');
});
