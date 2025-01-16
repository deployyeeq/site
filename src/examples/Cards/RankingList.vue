<template>
<div class="card mb-4">
    <div class="card-header pb-0">
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
              № Транзакции
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Дата и время
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Тип
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Сумма
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Статус
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="align-middle d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">12345</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">2025-01-16 14:30</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Пополнение</soft-badge
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >24500 ₽</span
                >
              </td>
              <td>
                <soft-badge color="success" variant="gradient" size="sm"
                  >Выполнено</soft-badge
                >
              </td>
            </tr>

            <tr>
              <td>
                <div class="align-middle d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">12345</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">2025-01-16 14:30</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Пополнение</soft-badge
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >24500 ₽</span
                >
              </td>
              <td>
                <soft-badge color="success" variant="gradient" size="sm"
                  >Выполнено</soft-badge
                >
              </td>
            </tr>

            <tr>
              <td>
                <div class="align-middle d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">12345</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">2025-01-16 14:30</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Вывод</soft-badge
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >24500 ₽</span
                >
              </td>
              <td>
                <soft-badge color="danger" variant="gradient" size="sm"
                  >Отменено</soft-badge
                >
              </td>
            </tr>

            <tr>
              <td>
                <div class="align-middle d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">12345</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">2025-01-16 14:30</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Вывод</soft-badge
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >24500 ₽</span
                >
              </td>
              <td>
                <soft-badge color="success" variant="gradient" size="sm"
                  >Выполнено</soft-badge
                >
              </td>
            </tr>

            <tr>
              <td>
                <div class="align-middle d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">12345</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">2025-01-16 14:30</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Пополнение</soft-badge
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >24500 ₽</span
                >
              </td>
              <td>
                <soft-badge color="danger" variant="gradient" size="sm"
                  >Отменено</soft-badge
                >
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
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


import SoftBadge from "@/components/SoftBadge.vue";


export default {
  name: "RankingList",
  data() {
    return {
      transactions: [
        {
          id: 1,
          date: "2025-01-16 14:30",
          type: "Пополнение",
          orderNumber: null,
          amount: "5000 ₽",
          status: "Выполнено",
          color: "success",
        },
        {
          id: 2,
          date: "2025-01-15 10:00",
          type: "Оплата заказа",
          orderNumber: "12345",
          amount: "1500 ₽",
          status: "Отменено",
        },
        {
          id: 3,
          date: "2025-01-14 16:45",
          type: "Вывод",
          orderNumber: null,
          amount: "3000 ₽",
          status: "Выполнено",
        },
        {
          id: 4,
          date: "2025-01-14 16:45",
          type: "Вывод",
          orderNumber: null,
          amount: "3000 ₽",
          status: "Выполнено",
        },
        {
          id: 5,
          date: "2025-01-14 16:45",
          type: "Вывод",
          orderNumber: null,
          amount: "3000 ₽",
          status: "Выполнено",
        },
        {
          id: 6,
          date: "2025-01-14 16:45",
          type: "Вывод",
          orderNumber: null,
          amount: "3000 ₽",
          status: "Выполнено",
        },
        {
          id: 7,
          date: "2025-01-14 16:45",
          type: "Вывод",
          orderNumber: null,
          amount: "3000 ₽",
          status: "Выполняется",
        },
      ],
    };
  },
  components: {
    SoftBadge,
  },
};
</script>
