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
      {
        path: "/student_Add",
        component: () => import("pages/student/studentAdd.vue"),
      },
      {
        path: "/student_Edit",
        component: () => import("pages/student/studentEdit.vue"),
      },
      {
        path: "/teacher_List",
        component: () => import("pages/teacher/teacherList.vue"),
      },
      {
        path: "/teacher_View",
        component: () => import("pages/teacher/teacherViews.vue"),
      },
      {
        path: "/teacher_View",
        component: () => import("pages/teacher/teacherViews.vue"),
      },
      {
        path: "/teacher_Add",
        component: () => import("pages/teacher/teacherListAdd.vue"),
      },
      {
        path: "/teacher_Edit",
        component: () => import("pages/teacher/teacherListEdit.vue"),
      },
      {
        path: "/invoice_grid",
        component: () => import("pages/invoice/InvoiceGrid.vue"),
      },
      {
        path: "/invoice_List",
        component: () => import("pages/invoice/invoiceList.vue"),
      },
      {
        path: "/add_invoice",
        component: () => import("pages/invoice/addInvoice.vue"),
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
