const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/ac", component: () => import("pages/Autocomplete.vue") },
   //   { path: "login1", component: () => import("layouts/Login-1.vue") }, // Removed the extra comma here
    ],
  },
  { path: "/login", component: () => import("pages/Login-1.vue") },
  {
    path: "/register",
    component: () => import("pages/Registration-1.vue"),
  },
  {
    path: "/new-page",
    component: () => import("pages/NewPage.vue"),
  },
  {
    path: "/login2",
    component: () => import("pages/Login-2.vue"),
  },
  {
    path: "/fp",
    component: () => import("pages/Forgetpass.vue"),
  },
  {
    path: "/register2",
    component: () => import("pages/Registration-2.vue"),
  },
  {
    path: "/lookscreen",
    component: () => import("pages/Lookscreen.vue"),
  },
  {
    path: "/Rp",
    component: () => import("pages/Rpassword.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
