const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/teacher_dashboard",
        component: () => import("pages/dashboards/teacherDashboard.vue"),
      },
      {
        path: "/student_dashboard",
        component: () => import("pages/dashboards/studentDashboard.vue"),
      },
      {
        path: "/admin_Student",
        component: () => import("pages/student/adminStudent.vue"),
      },
      {
        path: "/student_Views",
        component: () => import("pages/student/studentViews.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
