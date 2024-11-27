//1
const bankAccount = {
    ownerName: "Олександр",
    accountNumber: "UA1234567890",
    balance: 0,

    deposit: function() {
        const depositAmount = parseFloat(document.getElementById("depositAmount").value);
        if (depositAmount > 0) {
            this.balance += depositAmount;
            document.getElementById("balance").innerText = `Баланс: ${this.balance} грн`;
            alert(`Ви поповнили рахунок на ${depositAmount} грн. Новий баланс: ${this.balance} грн.`);
        } else {
            alert("Будь ласка, введіть правильну суму для поповнення.");
        }
    },

    withdraw: function() {
        const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        if (withdrawAmount > 0 && withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
            document.getElementById("balance").innerText = `Баланс: ${this.balance} грн`;
            alert(`Ви зняли ${withdrawAmount} грн. Новий баланс: ${this.balance} грн.`);
        } else {
            alert("Невірна сума або недостатньо коштів на рахунку.");
        }
    }
};

//2
const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,

    checkTemperature: function() {
        this.temperature = parseFloat(document.getElementById("temperatureInput").value);
        if (this.temperature < 0) {
            document.getElementById("weatherMessage").innerText = "Температура нижче 0 градусів Цельсія.";
        } else {
            document.getElementById("weatherMessage").innerText = "Температура вище або рівна 0 градусів Цельсія.";
        }
    }
};

//3
const user = {
    name: "",
    email: "2",
    password: "3",

    login: function() {
        const emailInput = document.getElementById("emailInput").value;
        const passwordInput = document.getElementById("passwordInput").value;
        if (emailInput === this.email && passwordInput === this.password) {
            alert("Вхід успішний!");
        } else {
            alert("Невірний email або пароль.");
        }
    }
};

//4
const movie = {
    title: "титле",
    director: "Райан Гослинг",
    year: 2024,
    rating: 0,

    checkRating: function() {
        this.title = document.getElementById("movieTitle").value;
        this.director = document.getElementById("movieDirector").value;
        this.year = parseInt(document.getElementById("movieYear").value);
        this.rating = parseFloat(document.getElementById("movieRating").value);

        const titleElement = document.getElementById("movieTitleOutput");
        titleElement.innerText = `Фільм: ${this.title}, Режисер: ${this.director}, Рік: ${this.year}, Рейтинг: ${this.rating}`;

        if (this.rating > 8) {
            titleElement.classList.add("green");
        } else {
            titleElement.classList.remove("green");
        }
    }
};
