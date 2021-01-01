import React from "react";

const formsRoutes = [
    // // // // // // // project progressive
    {
      path: "/projects/oil-gaz-en-cour/",
      component: React.lazy(() => import("./projectsProgress/oilGaz/OilGaz"))
    },
    {
     path: "/projects/enrgies-renewable-en-cour",
     component: React.lazy(() => import("./projectsProgress/RenewableEnergies/RenewableEnergies"))
    },
    {
      path: "/projects/operation-maintenace-en-cour",
      component: React.lazy(() => import("./projectsProgress/OperationMaintenance/OperationMaintenance"))
    },
    {
      path: "/projects/water-trairtement-en-cour",
      component: React.lazy(() => import("./projectsProgress/WaterTreatment/WaterTreatment"))
    },
    {
      path: "/projects/industrie",
      component: React.lazy(() => import("./projectsProgress/industry/Industry"))
    },

    // // // // // // // project progressive show
    {
      path: "/oil-gaz-en-cour/:id",
      component: React.lazy(() => import("./projectsProgress/oilGaz/OilGazShow"))
    },
    {
      path: "/water-trairtement-en-cour/:id",
      component: React.lazy(() => import("./projectsProgress/WaterTreatment/ShowWaterTreatment"))
    },
    {
      path: "/enrgies-renewable-en-cour/:id",
      component: React.lazy(() => import("./projectsProgress/RenewableEnergies/ShowRenewableEnergies"))
    },
    {
      path: "/operation-maintenace-en-cour/:id",
      component: React.lazy(() => import("./projectsProgress/OperationMaintenance/ShowOperationMaintenace"))
    },
    {
      path: "/industrie/:id",
      component: React.lazy(() => import("./projectsProgress/industry/ShowIndustry"))
    },
    
   
    // // // // // //projets achevés
   
    {
     path: "/projects/oil-gaz-acheve",
     component: React.lazy(() => import("./completedProject/oilGaz/OilGazCompleted"))
    },
    {
      path: "/projects/industry-acheve",
      component: React.lazy(() => import("./completedProject/industry/IndustryComplete"))
    },
    {
      path: "/projects/operation-acheve",
      component: React.lazy(() => import("./completedProject/OperationMaintenance/OperationMaintenanceComplete"))
    },
    {
      path: "/projects/energy-acheve",
      component: React.lazy(() => import("./completedProject/RenewableEnergies/RenewableEnergiesComplete"))
    },
    {
      path: "/projects/water-trairtement-acheve",
      component: React.lazy(() => import("./completedProject/WaterTreatment/WaterTreatmentComplete"))
    },
    // // // // // // // // project show achevés

    {
      path: "/oil-gaz-acheve/:id",
      component: React.lazy(() => import("./completedProject/oilGaz/OilGazCompleteShow"))
    },
    {
      path: "/industry-acheve/:id",
      component: React.lazy(() => import("./completedProject/industry/IndustryCompleteShow"))
    },
    {
      path: "/operation-acheve/:id",
      component: React.lazy(() => import("./completedProject/OperationMaintenance/OperationMaintenaceCompleteShow"))
    },
    {
      path: "/energy-acheve/:id",
      component: React.lazy(() => import("./completedProject/RenewableEnergies/RenewableEnergiesCompleteShow"))
    },
    {
      path: "/water-trairtement-acheve/:id",
      component: React.lazy(() => import("./completedProject/WaterTreatment/WaterTreatmentCompleteShow"))
    },
    // // // // // // // // // product
    {
      path: "/product",
      component: React.lazy(() => import("./ProductService/ProductService"))
    },

    // // // // // // // // // Setting 
    {
      path: "/projects/add-project",
      component: React.lazy(() => import("./addProjects/AddProjects"))
    },
    {
     path: "/projects/manage-project",
     component: React.lazy(() => import("./projectManage/ProjectManage"))
    },
    
  ];
  
  export default formsRoutes;
  