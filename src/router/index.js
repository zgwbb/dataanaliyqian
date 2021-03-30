import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/rmenshangping",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/rmenshangping/index"),
        meta: { title: "热门商品浏览", icon: "form" }
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "好评度词雷达图", icon: "dashboard" }
      }
    ]
  },
   
  {
    path: "/classManage",
    component: Layout,
    redirect: "/classManage/classList",
    name: "class",
    meta: { title: "评论形容词分析", icon: "example" },
    children: [
      {
        path: "classList",
        name: "classList",
        component: () => import("@/views/class/classList"),
        meta: { title: "textrank算法结果词云图", icon: "table" }
      },
      {
        path: "classMaterial",
        name: "classMaterial",
        component: () => import("@/views/class/classMaterial"),
        meta: { title: "textrank算法结果饼图", icon: "tree" }
      }
    ]
  },

  {
    path: "/school",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/school/index"),
        meta: { title: "销售前10的出版社叠图", icon: "form" }
      }
    ]
  },
  {
    path: "/pinglungx",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/pinglungx/index"),
        meta: { title: "总的好评度词关系图", icon: "form" }
      }
    ]
  },
  {
    path: "/zongleidatu",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/zongleidatu/index"),
        meta: { title: "总的好评度词雷达图", icon: "form" }
      }
    ]
  },
  {
    path: "/pinglunjieba",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/pinglunjieba/index"),
        meta: { title: "结巴分词及好评度对比", icon: "form" }
      }
    ]
  },
  {
    path: "/guangliangxinjg",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/guangliangxinjg/index"),
        meta: { title: "关联性规则结果", icon: "form" }
      }
    ]
  },
  // {
  //   path: "/guangxitu",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Form",
  //       component: () => import("@/views/guangxitu/index"),
  //       meta: { title: "好评度词关系图", icon: "form" }
  //     }
  //   ]
  // },
  {
    path: "/apply",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/apply/index"),
        meta: { title: "畅销书籍类型饼图", icon: "form" }
      }
    ]
  },
  {
    path: "/zhekou",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/zhekou/index"),
        meta: { title: "畅销书籍折扣分析图", icon: "form" }
      }
    ]
  },
  // {
  //   path: "/nested",
  //   component: Layout,
  //   redirect: "/nested/menu1",
  //   name: "Nested",
  //   meta: {
  //     title: "预留页面",
  //     icon: "nested"
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: () => import("@/views/nested/menu1/index"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "Menu1" },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: () => import("@/views/nested/menu1/menu1-1"),
  //           name: "Menu1-1",
  //           meta: { title: "Menu1-1" }
  //         },
  //         {
  //           path: "menu1-2",
  //           component: () => import("@/views/nested/menu1/menu1-2"),
  //           name: "Menu1-2",
  //           meta: { title: "Menu1-2" },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-1"),
  //               name: "Menu1-2-1",
  //               meta: { title: "Menu1-2-1" }
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-2"),
  //               name: "Menu1-2-2",
  //               meta: { title: "Menu1-2-2" }
  //             }
  //           ]
  //         },
  //         {
  //           path: "menu1-3",
  //           component: () => import("@/views/nested/menu1/menu1-3"),
  //           name: "Menu1-3",
  //           meta: { title: "Menu1-3" }
  //         }
  //       ]
  //     },
  //     {
  //       path: "menu2",
  //       component: () => import("@/views/nested/menu2/index"),
  //       meta: { title: "menu2" }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
