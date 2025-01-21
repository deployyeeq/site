import { createRouter, createWebHistory } from "vue-router";
import Tables from "@/views/Tables.vue";
import Dashboard from "@/views/Dashboard.vue";
import Billing from "@/views/Billing.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Cars from "@/views/Cars.vue";
import RentaCar from "@/views/RentaCar.vue";
import Documents from "@/views/Documents.vue";
import Ads from "@/views/Myads.vue";
import Requests from "@/views/Requests.vue";


const routes = [
  {
    path: "/users/dashboard",
    name: "Главная",
    component: Dashboard,
  },

  {
    path: "/users/tables",
    name: "Заказы",
    component: Tables,
  },

  {
    path: "/users/billing",
    name: "Транзакции ",
    component: Billing,
  },

  {
    path: "/users/profile",
    name: "Профиль",
    component: Profile,
  },

  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },

  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },

  {
    path: "/users/cars",
    name: "Каталог Авто",
    component: Cars,
  },

  {
    path: "/users/renta-car",
    name: "Сдать авто",
    component: RentaCar,
  },

  {
    path: "/users/documents",
    name: "Документы",
    component: Documents,
  },

  {
    path: "/users/ads",
    name: "Мои объявления",
    component: Ads,
  },

  {
    path: "/users/requests",
    name: "Заявки",
    component: Requests,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
