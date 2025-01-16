<template>
    <div class="submit-car">  
      <form @submit.prevent="submitCar">
        <!-- Марка авто -->
        <div>
          <label for="brand">Марка авто:</label>
          <select v-model="car.brand" id="brand" @change="updateModels" required>
            <option value="">Все</option>
            <option v-for="brand in Object.keys(brandModelMap)" :key="brand" :value="brand">
              {{ brand }}
            </option>
          </select>
        </div>
  
        <!-- Модель авто -->
        <div>
          <label for="model">Модель авто:</label>
          <select v-model="car.model" id="model" required>
            <option value="">Все</option>
            <option v-for="model in filteredModels" :key="model" :value="model">
              {{ model }}
            </option>
          </select>
        </div>
  
        <!-- Год выпуска -->
        <div>
          <label for="year">Год выпуска:</label>
          <input type="number" v-model="car.year" id="year" placeholder="Например, 2020" required />
        </div>
  
        <!-- Состояние -->
        <div>
          <label for="condition">Состояние:</label>
          <input type="text" v-model="car.condition" id="condition" placeholder="Опишите состояние" required />
        </div>
  
        <!-- Описание авто -->
        <div>
          <label for="description">Описание авто:</label>
          <textarea v-model="car.description" id="description" rows="5" placeholder="Опишите автомобиль подробнее" required></textarea>
        </div>
  
        <!-- ПТС -->
        <div>
          <label for="pts">Номер ПТС:</label>
          <input type="text" v-model="car.pts" id="pts" placeholder="Введите номер ПТС" required />
        </div>
  
        <!-- Срок сдачи -->
        <div>
          <label>Срок сдачи (от и до):</label>
          <input type="date" v-model="car.rentFrom" required />
          <input type="date" v-model="car.rentTo" required />
        </div>
  
        <!-- Тип взаимодействия -->
        <div>
          <label>Тип взаимодействия:</label>
          <select v-model="car.interactionType" required>
            <option value="buyback">Под выкуп</option>
            <option value="rent">Аренда</option>
            <option value="leasing">Лизинг</option>
          </select>
        </div>
  
        <!-- Фото -->
        <div>
          <label for="photos">Фото авто:</label>
          <input type="file" id="photos" @change="handleFileUpload" multiple accept="image/*" />
        </div>
  
        <!-- Кнопка -->
        <button type="submit">Сдать авто</button>
      </form>
    </div>
  </template>

<style scoped>
.submit-car {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.submit-car h1 {
  text-align: center;
}

.submit-car form div {
  margin-bottom: 15px;
}

.submit-car label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.submit-car input,
.submit-car select,
.submit-car textarea,
.submit-car button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-car button {
  background: linear-gradient(135deg, #a3e635, #16a34a);  
  color: white;
  border: none;
  cursor: pointer;
}

.submit-car button:hover {
    background: linear-gradient(135deg, #9beb1b, #0ebb4d); 
}
</style>

<script>
export default {
  data() {
    return {
      car: {
        brand: '',
        model: '',
        year: '',
        condition: '',
        description: '',
        pts: '',
        rentFrom: '',
        rentTo: '',
        interactionType: '',
        photos: []
      },
      brandModelMap: {
        Toyota: ['Camry', 'Corolla', 'RAV4'],
        BMW: ['X5', '3 Series', '5 Series'],
        Mercedes: ['C-Class', 'E-Class', 'GLA'],
        Audi: ['A4', 'Q5', 'A6']
      },
      filteredModels: []
    };
  },
  methods: {
    handleFileUpload(event) {
      this.car.photos = Array.from(event.target.files);
    },
    submitCar() {
      console.log('Данные автомобиля:', this.car);
      alert('Автомобиль успешно сдан!');

    },
    updateModels() {
      this.filteredModels = this.brandModelMap[this.car.brand] || [];
      this.car.model = ''; 
    }
  },
  watch: {
    car: {
      handler(newCar) {
        if (!newCar.brand) {
          this.filteredModels = [];
        }
      },
      deep: true
    }
  }
};
</script>