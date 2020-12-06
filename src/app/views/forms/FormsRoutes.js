import React from "react";

const formsRoutes = [
  {
    path: "/projects/en cours",
    component: React.lazy(() => import("./BasicForm"))
  },
  {
    path: "/projects/achevés",
    component: React.lazy(() => import("./EditorForm"))
  }
];

export default formsRoutes;
