<template>
    <div>
      <p>Активные автомобили</p>
      <table>
        <thead>
          <tr>
            <th>Марка</th>
            <th>Модель</th>
            <th>Владелец</th>
            <th>Номер телефона</th>
            <th>Цена за сутки</th>
            <th>Дата начала</th>
            <th>Дата окончания</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car, index) in cars" :key="index">
            <td>{{ car.brand }}</td>
            <td>{{ car.model }}</td>
            <td>{{ car.owner }}</td>
            <td>{{ car.phone }}</td>
            <td>{{ car.pricePerDay }} ₽</td>
            <td>{{ formatDate(car.startDate) }}</td>
            <td>{{ formatDate(car.endDate) }}</td>
            <td>
              <button @click="completeRental(index)">Завершить аренду</button>
              <button @click="extendRental(index)">Продлить аренду</button>
              <button @click="payForRental(index)">Оплатить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style>
  body {
    font-family: Arial, sans-serif;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  table, th, td {
    border: 1px solid #ddd;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
  }
  
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background: #16a34a;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #107e39;
  }
  </style>



  <script>
  export default {
    name: "Заказфы",
    data() {
      return {
        cars: [
          {
            brand: "Toyota",
            model: "Camry",
            owner: "Иван Иванов",
            phone: "+7 912 345 6789",
            pricePerDay: 2500,
            startDate: "2025-01-01",
            endDate: "2025-01-10",
          },
          {
            brand: "Hyundai",
            model: "Solaris",
            owner: "Петр Петров",
            phone: "+7 921 987 6543",
            pricePerDay: 2000,
            startDate: "2025-01-05",
            endDate: "2025-01-15",
          },
        ],
      };
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('ru-RU', options);
      },
      completeRental(index) {
        if (confirm(`Вы уверены, что хотите завершить аренду для ${this.cars[index].brand} ${this.cars[index].model}?`)) {
          this.cars.splice(index, 1);
        }
      },
      extendRental(index) {
        const newEndDate = prompt("Введите новую дату окончания аренды (ГГГГ-ММ-ДД):", this.cars[index].endDate);
        if (newEndDate) {
          this.cars[index].endDate = newEndDate;
          alert(`Аренда продлена до ${this.formatDate(newEndDate)}.`);
        }
      },
      payForRental(index) {
        alert(`Оплата для ${this.cars[index].brand} ${this.cars[index].model} успешно произведена.`);
      },
    },
  };
  </script>
  