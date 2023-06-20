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
      {
        path: "/invoice_detail",
        component: () => import("pages/invoice/invoiceDetail.vue"),
      },
      {
        path: "/invoiceSettings",
        component: () => import("pages/invoice/invoiceSettings.vue"),
      },
      {
        path: "/feesCollection",
        component: () => import("pages/account/feesCollection.vue"),
      },
      {
        path: "/expenSes",
        component: () => import("pages/account/expenSes.vue"),
      },
      {
        path: "/addFees",
        component: () => import("pages/account/addFees.vue"),
      },
      {
        path: "/addExpanses",
        component: () => import("pages/account/addExpanses.vue"),
      },
      {
        path: "/addSalary",
        component: () => import("pages/account/addSalary.vue"),
      },
      {
        path: "/holyDay",
        component: () => import("pages/otherPage/holyDay.vue"),
      },
      {
        path: "/feesPage",
        component: () => import("pages/otherPage/feesPage.vue"),
      },
      {
        path: "/examList",
        component: () => import("pages/otherPage/examList.vue"),
      },
      {
        path: "/eventPage",
        component: () => import("pages/otherPage/eventPage.vue"),
      },
      {
        path: "/timeTable",
        component: () => import("pages/otherPage/timeTable.vue"),
      },
      {
        path: "/libraryPage",
        component: () => import("pages/otherPage/libraryPage.vue"),
      },
      {
        path: "/allBlogs",
        component: () => import("pages/blogs/allBlogs.vue"),
      },
      {
        path: "/addBlogs",
        component: () => import("pages/blogs/addBlogs.vue"),
      },
      {
        path: "/editBlogs",
        component: () => import("pages/blogs/editeBlogs.vue"),
      },
      {
        path: "/loginPage",
        component: () => import("pages/loginpage/loginPage.vue"),
      },
      {
        path: "/signUP",
        component: () => import("pages/loginpage/signUP.vue"),
      },
      {
        path: "/reSet",
        component: () => import("pages/loginpage/reSet.vue"),
      },
      {
        path: "/erroR",
        component: () => import("pages/loginpage/erroR.vue"),
      },
      {
        path: "/settingPage",
        component: () => import("pages/setting/settingPage.vue"),
      },
      {
        path: "/blankPage",
        component: () => import("pages/setting/PagE.vue"),
      },
      {
        path: "/sportsPage",
        component: () => import("pages/sports/sportsPage.vue"),
      },
      {
        path: "/hostelPage",
        component: () => import("pages/sports/hostelPage.vue"),
      },
      {
        path: "/transPort",
        component: () => import("pages/sports/transPort.vue"),
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
