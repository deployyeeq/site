<template>
    <div class="profile-page">
      <!-- Блок с фото и ником -->
      <div class="profile-header">
        <img class="profile-photo" :src="user.photo" alt="Profile Photo" />
        <div class="profile-info">
          <h2 @click="editNickname">{{ user.nickname }}</h2>
        </div>
      </div>
  
      <!-- Баланс -->
      <div class="profile-balance">
        <p>Баланс: {{ user.balance }} ₽</p>
        <p>Партнёрский баланс: {{ user.partnerBalance }} ₽</p>
        <button @click="openForm('deposit')">Пополнить баланс</button>
        <button @click="openForm('withdraw')">Вывести баланс</button>
      </div>
  
      <!-- Настройки -->
      <div class="profile-settings">
        <h3>Настройки</h3>
        <form @submit.prevent="updateSettings">
          <div>
            <label>Телефон:</label>
            <input type="text" v-model="user.phone" />
          </div>
          <div>
            <label>Почта:</label>
            <input type="email" v-model="user.email" />
          </div>
          <div>
            <label>Пароль:</label>
            <input type="password" v-model="user.password" />
          </div>
          <div>
            <label>
              <input type="checkbox" v-model="user.govServicesLinked" />
              Привязать Госуслуги
            </label>
          </div>
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
  
      <!-- Кнопка выхода -->
      <div class="profile-logout">
        <button @click="logout">Выйти</button>
      </div>
  
      <!-- Модальное окно для пополнения/вывода -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h3>{{ modalType === 'deposit' ? 'Пополнить баланс' : 'Вывести баланс' }}</h3>
          <form @submit.prevent="handleTransaction">
            <div>
              <label>Сумма:</label>
              <input type="number" v-model="transactionAmount" min="0" />
            </div>
            <button type="submit">{{ modalType === 'deposit' ? 'Пополнить' : 'Вывести' }}</button>
            <button type="button" @click="closeModal">Закрыть</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  

  <style>
  .profile-page {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .profile-info h2 {
    cursor: pointer;
    margin: 0;
  }
  .profile-balance p {
    margin: 5px 0;
  }
  .profile-balance button {
    margin-right: 10px;
  }
  .profile-settings form div {
    margin-bottom: 10px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }
  </style>



  <script>
  export default {
    name: "Профиль2",
    data() {
      return {
        user: {
          photo: "@/assets/marie.jpg", // Замените на путь к изображению
          nickname: "JohnDoe",
          balance: 5000,
          partnerBalance: 1200,
          phone: "+7 (900) 123-45-67",
          email: "johndoe@example.com",
          password: "******",
          govServicesLinked: false,
        },
        showModal: false,
        modalType: "",
        transactionAmount: 0,
      };
    },
    methods: {
      editNickname() {
        const newNickname = prompt("Введите новый ник:", this.user.nickname);
        if (newNickname) {
          this.user.nickname = newNickname;
        }
      },
      openForm(type) {
        this.modalType = type;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.transactionAmount = 0;
      },
      handleTransaction() {
        if (this.modalType === "deposit") {
          this.user.balance += this.transactionAmount;
        } else if (this.modalType === "withdraw") {
          if (this.transactionAmount <= this.user.balance) {
            this.user.balance -= this.transactionAmount;
          } else {
            alert("Недостаточно средств");
          }
        }
        this.closeModal();
      },
      updateSettings() {
        alert("Настройки обновлены");
      },
      logout() {
        alert("Вы вышли из системы");
      },
    },
  };
  </script>
  
