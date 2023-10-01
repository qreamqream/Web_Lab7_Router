import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/index.css";
import App from "./App.vue";
import Home from "./views/Home.vue";

const app = createApp(App);

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/booking/:id",
    name: "booking",
    component: () => import("./components/HelloWorld.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
