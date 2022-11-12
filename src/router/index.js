import { createRouter, createWebHistory } from "vue-router";
import Timetable from "@/views/TimetableView.vue";
import Settings from "@/views/SettingsView.vue";
import ModuleListView from "@/views/ModuleListView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", redirect: { name: "Timetable" } },
  { path: "/timetable", name: "Timetable", component: Timetable },
  { path: "/modules", name: "Modules", component: ModuleListView },
  { path: "/settings", name: "Settings", component: Settings },
  { path: "/login", name: "Login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
