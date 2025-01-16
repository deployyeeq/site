<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Таблица Заказов</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Марка, Модель
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Владелец
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Статус
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
              Дата начала
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Дата окончания
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
              Действие
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <soft-avatar
                      :img="img1"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Audi Rs7</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Иван Иванов</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >В Аренде</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/2024</span
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/05/2024</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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
                    <soft-avatar
                      :img="img2"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user2"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">BMW M5</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Виктор Куприн</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="secondary" variant="gradient" size="sm"
                  >Выкуп</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >11/01/19</span
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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
                    <soft-avatar
                      :img="img3"
                      size="sm"
                      border-radius="lg"
                      class="me-3"
                      alt="user3"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Mercedes-Benz G63 AMG</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Ильяс Аясов</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >В Аренде</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >19/09/17</span
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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
                    <soft-avatar
                      :img="img4"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user4"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Tesla Model Y</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Роман Романов</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >В Аренде</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >24/12/08</span
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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
                    <soft-avatar
                      :img="img5"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user5"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Porsche Panamera</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Владимир Светлаков</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="secondary" variant="gradient" size="sm"
                  >Выкуп</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >04/10/21</span
                >
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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
                    <soft-avatar
                      :img="img6"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user6"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">BMW X6</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Арсен Маликов</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="secondary" variant="gradient" size="sm"
                  >Выкуп</soft-badge
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td>
                <div class="button-container">
                    <button class="btn green-gradient">
                      <span class="icon">$</span>
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




<script>
import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import img1 from "../../assets/img/cars_photo/audi.png";
import img2 from "../../assets/img/cars_photo/m5.png";
import img3 from "../../assets/img/cars_photo/g63.png";
import img4 from "../../assets/img/cars_photo/tesla.png";
import img5 from "../../assets/img/cars_photo/panama.png";
import img6 from "../../assets/img/cars_photo/x62.png";

export default {
  name: "authors-table",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },
  components: {
    SoftAvatar,
    SoftBadge,
  },
};
</script>
