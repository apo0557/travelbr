document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchResults = document.getElementById("searchResults");

    const tours = [
        {
            title: "Сплави по Тисі + Закарпатський Бограч",
            image: "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/../../../images/tours2/2701975_180x125_Zamok-Palanok-v-Mukachevo.jpg",
            from: "Мукачево - Чинадійово - Карпати - Свалява",
            to: "Виноградів - Хуст",
            dates: "03-06-2024, 08-06-2024, 09-06-2024",
            description: "Запрошуємо активно відпочити та помилуватися панорамами гір! Програма туру: День 1 Виїзд із Мукачева (о 8:00). Сплав на катамаранах по річці Тиса, розпочинається від міста Хуст. Сплавляючись гірською річкою ми побачимо чудові панорами гір та послухаємо цікаві історії від наших інструкторів. Завершуємо нашу водну мандрівку у місті Виноградова, урочище Виннички. По прибуттю на місце фінішу, вас очікує обід – бограч по-Закарпатськи. Повертаємось до Мукачева (орієнтовно о 20:00). Заказник «Чорна Гора», Виноградів , Хуст У вартість туру входить: Бограч, столи та лавиці, супровід гіда, інструктор, оренда спорядження (рафти, весла, жилети). У вартість туру НЕ включено: проїзд, власні витрати, Бограч. Вартість проїзду: 400 грн./ос. Технічна інформація: – участь в сплаві не вимагає попередньої підготовки (досвіду); – чистий час сплаву 3 – 3,5 години, залежно від рівня води; – до і під час сплаву категорично забороняється вживання алкоголю; – маршрут розрахований на середньостатистичну групу фізично здорових людей.",
            price: "800 UAH",
            detailsLink: "details.html?id=1",
            orderLink: "order.html?id=1",
            category: ["Тури в гори", "Літні тури"]
        },
        {
            title: "Термальний комплекс “Жайворонок”",
            image: "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/../../../images/tours2/2701975_180x125_Zamok-Palanok-v-Mukachevo.jpg",
            from: "Мукачево - Чинадійово - Карпати - Свалява",
            to: "Мукачево",
            dates: "03-06-2024, 05-06-2024, 08-06-2024",
            description: "Насолоджуйтесь термальними водами та красою Карпат!",
            price: "350 UAH",
            detailsLink: "details.html?id=2",
            orderLink: "order.html?id=2",
            category: ["Літні тури"]
        }
    ];

    // Функція для відображення турів на основі поточного стану форми пошуку
    function displayTours() {
        const keywords = document.getElementById("keywords").value.toLowerCase();
        const category = document.getElementById("category").value.toLowerCase();
        const minPrice = parseFloat(document.getElementById("min_price").value) || 0;
        const maxPrice = parseFloat(document.getElementById("max_price").value) || Infinity;
        const date = document.getElementById("date").value;

        // Фільтрація турів за введеними параметрами
        const filteredTours = tours.filter(tour => {
            // Фільтрація за ключовими словами
            const titleMatch = tour.title.toLowerCase().includes(keywords);
            const descriptionMatch = tour.description.toLowerCase().includes(keywords);

            // Фільтрація за категорією
            const categoryMatch = category === "" || tour.category.some(cat => cat.toLowerCase() === category);

            // Фільтрація за ціною
            const priceMatch = parseFloat(tour.price) >= minPrice && parseFloat(tour.price) <= maxPrice;

            // Можна додати фільтрацію за датою, якщо вона буде потрібна
            // const dateMatch = !date || tour.dates.includes(date);

            return titleMatch && descriptionMatch && categoryMatch && priceMatch;
        });

        // Очищаємо поточні результати пошуку
        searchResults.innerHTML = "";

        // Відображаємо знайдені тури
        filteredTours.forEach(tour => {
            const tourElement = document.createElement("div");
            tourElement.className = "tour";

            tourElement.innerHTML = `
                <div class="tour-content">
                    <div class="tour-image">
                        <a href="${tour.detailsLink}">
                            <img src="${tour.image}" alt="${tour.title}">
                        </a>
                    </div>
                    <div class="tour-info">
                        <a href="${tour.detailsLink}" class="tour-title">${tour.title}</a>
                        <div class="tour-location">
                            <span><strong>Тур из:</strong> ${tour.from}</span>
                            <span><strong>Тур в:</strong> ${tour.to}</span>
                        </div>
                        <div class="tour-dates">
                            <span><strong>Найближчі дати:</strong> ${tour.dates}</span>
                        </div>
                        <p>${tour.description}</p>
                    </div>
                </div>
                <div class="tour-action">
                    <div class="tour-price">
                        <span>Ціна: ${tour.price}</span>
                    </div>
                    <a href="${tour.detailsLink}" class="details-link">Детальніше</a>
                    <a href="${tour.orderLink}" class="order-link">Замовити тур</a>
                </div>
            `;

            searchResults.appendChild(tourElement);
        });

        // Якщо немає знайдених турів
        if (filteredTours.length === 0) {
            const noResultsMessage = document.createElement("div");
            noResultsMessage.className = "no-results";
            noResultsMessage.textContent = "На жаль, за вашим запитом турів не знайдено.";
            searchResults.appendChild(noResultsMessage);
        }
    }

    // Обробник події для форми пошуку
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Зупиняємо стандартну поведінку форми

        // Викликаємо функцію відображення турів з урахуванням поточних параметрів по
