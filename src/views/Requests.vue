<template>

<div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Номер авто
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Марка машины
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Модель машины
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Номер объявления
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Дата
              </th>

              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Сумма
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Действие
              </th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">м888мм77</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">BMW</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-secondary text-xs font-weight-bold"
                  >M8</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >2431</span
                >
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">21/01/2025</p>
              </td>

              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">45 000 ₽</p>
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                        <span class="icon-eye-closed"></span>
                    </button>
                    <button class="btn green-gradient">
                      <span class="icon">✔</span>
                    </button>
                    <button class="btn red-gradient">
                      <span class="icon">✖</span>
                    </button>
                  </div>
              </td>

            </tr>

            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-xs font-weight-bold mb-0">о521мн750</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Ford</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-secondary text-xs font-weight-bold"
                  >Focus</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >2432</span
                >
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">15/01/2025</p>
              </td>

              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">5 000 ₽</p>
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                        <span class="icon-eye-closed"></span>
                    </button>
                    <button class="btn green-gradient">
                      <span class="icon">✔</span>
                    </button>
                    <button class="btn red-gradient">
                      <span class="icon">✖</span>
                    </button>
                  </div>
              </td>

            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>

</template>


<style scoped>

.button-container {
  display: flex;
  gap: 10px;
}

.btn {
  width: 25px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  
}

.icon-eye-closed::before {
  content: '\1F441'; 
}



.green-gradient {
  background: linear-gradient(135deg, #a3e635, #16a34a);
}

.red-gradient {
  background: linear-gradient(45deg, #e53935, #ef5350);
}

.icon {
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
