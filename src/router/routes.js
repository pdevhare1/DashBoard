const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/ac", component: () => import("pages/Autocomplete.vue") },
      { path: "/cb", component: () => import("pages/Checkbox.vue") },
      { path: "/cp", component: () => import("pages/Chips.vue") },
      { path: "/ps", component: () => import("pages/picker.vue") },
      { path: "/rb", component: () => import("pages/RadioBtn.vue") },
      { path: "/rg", component: () => import("pages/Range.vue") },
      { path: "/st", component: () => import("pages/Select.vue") },
      { path: "/sh", component: () => import("pages/Switch.vue") },
      { path: "/ti", component: () => import("pages/TextInput.vue") },
      { path: "/fm", component: () => import("pages/FormMask.vue") },
      { path: "/fl", component: () => import("pages/FormLayout.vue") },
      { path: "/ig", component: () => import("pages/InputGrid.vue") },
      { path: "/fh", component: () => import("pages/FormH.vue") },
      { path: "/fwb", component: () => import("pages/FormWithBordered.vue") },
      { path: "/frs", component: () => import("pages/FormRowSeparator.vue") },
      { path: "/fr", component: () => import("pages/FormRepeater.vue") },
      { path: "/fv", component: () => import("pages/FormValidations.vue") },
      { path: "/bt", component: () => import("pages/BasicTable.vue") },
      { path: "/et", component: () => import("pages/Editabletable.vue") },
      { path: "/gt", component: () => import("pages/GridTable.vue") },
      { path: "/tt", component: () => import("pages/TastTable.vue") },
      { path: "/ft", component: () => import("pages/Footable.vue") },
      { path: "/bit", component: () => import("pages/BasicInitialisation.vue") },

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
