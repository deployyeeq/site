import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Cars from "@/views/Cars.vue";
import RentaCar from "@/views/RentaCar.vue";


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Главная",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Заказы",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Транзакции ",
    component: Billing,
  },

  {
    path: "/profile",
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
    path: "/cars",
    name: "Каталог Авто",
    component: Cars,
  },
  {
    path: "/renta-car",
    name: "Аренда авто",
    component: RentaCar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
