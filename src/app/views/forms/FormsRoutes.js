import React from "react";

const formsRoutes = [
  {
    path: "/projects/oil-gaz-en-cour",
    component: React.lazy(() => import("./projectsProgress/OilGaz"))
  },
  {
    path: "/oil-gaz-en-cour/:id",
    component: React.lazy(() => import("./projectsProgress/OilGazShow"))
  },
  {
    path: "/projects/water-trairtement-en-cour",
    component: React.lazy(() => import("./projectsProgress/WaterTreatment"))
  },
  {
    path: "/projects/enrgies-renewable-en-cour",
    component: React.lazy(() => import("./projectsProgress/RenewableEnergies"))
  },
  {
    path: "/projects/operation-maintenace-en-cour",
    component: React.lazy(() => import("./projectsProgress/OperationMaintenance"))
  },

  {
    path: "/projects/oil-gaz-acheve",
    component: React.lazy(() => import("./completedProject/OilGazCompleted"))
  },
  {
    path: "/projects/water-trairtement-acheve",
    component: React.lazy(() => import("./completedProject/WaterTreatmentCompleted"))
  },
  {
    path: "/projects/industrie-acheve",
    component: React.lazy(() => import("./completedProject/IndustryCompleted"))
  }
];

export default formsRoutes;
