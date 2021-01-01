export const navigations = [
  {
    name: "Home",
    path: "/dashboard/analytics",
    icon: "home"
  },
  
  {
    name: "Projects",
    icon: "work",
    children: [
      {
        name: "En Cours",
        //path: "/projects/encours",
        icon:"description",
        children:[
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-en-cour"
          },
          {
            name: "Traitement de l'eau",
            path:"/projects/water-trairtement-en-cour"
          },
          {
            name: "Energies renouvelables",
            path:"/projects/enrgies-renewable-en-cour"
          },
          {
            name: "Opération Maintenance",
            path:"/projects/operation-maintenace-en-cour"
          },
          {
            name: "Industrie",
            path:"/projects/industrie"
          },
        ],
        //iconText: "B"
      },
      {
        name: " Achevés",
        //path: "/projects/achevés",
        icon: "description",
        children:[
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-acheve"
          },
          {
            name: "Traitement de l'eau",
            path:"/projects/water-trairtement-acheve"
          },
          {
            name: "Industrie",
            path:"/projects/industrie-acheve"
          },
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-achevés"
          },
          {
            name: "Energies renouvelables",
            path:"/projects/enrgies-renewable-achevés"
          },
        ],
      },
      {
        name: " Annulés",
        //path: "/projects/annulés",
        icon: "description",
        children:[
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-annule"
          },
          {
            name: "Traitement de l'eau",
            path:"/projects/water-trairtement-annule"
          },
          {
            name: "Industrie",
            path:"/projects/industrie-annule"
          },
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-annule"
          },
          {
            name: "Energies renouvelables",
            path:"/projects/enrgies-renewable-annule"
          },
        ],
      },
      {
        name: " Non Commencé",
       // path: "/projects/annulés",
        icon: "description",
        children:[
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-non-commence"
          },
          {
            name: "Traitement de l'eau",
            path:"/projects/water-trairtement-non-commence"
          },
          {
            name: "Industrie",
            path:"/projects/industrie-non-commence"
          },
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-non-commence"
          },
          {
            name: "Energies renouvelables",
            path:"/projects/enrgies-renewable-non-commence"
          },
        ],
      },
      {
        name: " En Attente",
       // path: "/projects/annulés",
        icon: "description",
        children:[
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-en-attente"
          },
          {
            name: "Traitement de l'eau",
            path:"/projects/water-trairtement-en-attente"
          },
          {
            name: "Industrie",
            path:"/projects/industrie-en-attente"
          },
          {
            name: "Gaz et pétrole",
            path:"/projects/oil-gaz-en-attente"
          },
          {
            name: "Energies renouvelables",
            path:"/projects/enrgies-renewable-en-attente"
          },
        ],
      }
    ]
  },
  {
    name: "Purchase",
    icon: "shopping_cart",
    children: [
      {
        name: "Supplier order",
        path: "/purchase/order",
       
      },
      {
        name: "Supplier Delivery Note",
        path: "/purchase/deliverynote",
       
      },
      {
        name: "Supplier Invoice",
        path: "purchase/invoice",
       
      },
    
      ]
  },
  {
    name: "Customer",
    icon: "person",
    path: "/customer",
  },
  {
    name: "Product And Service",
    icon: "storage",
    path: "/product",
  },
  {
    name: "Supplier",
    icon: "local_shipping",
    path: "/Supplier",
  },
  {
    name: "Setting",
    icon: "settings",
    children: [
      {
        name: "Add Project",
        path: "/projects/add-project",
        icon: "add_article"
      },
      {
        name: "Project Management",
        path: "/projects/manage-project",
        icon: "build"
      },
    
      ]
  }
  // {
  //   name: "Drag and Drop",
  //   icon: "control_camera",
  //   path: "/others/drag-and-drop"
  // },
  // {
  //   name: "Multilevel",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Level 1",
  //       icon: "list",
  //       children: [
  //         {
  //           name: "Item 1",
  //           path: "/charts/victory-charts",
  //           iconText: "1"
  //         },
  //         {
  //           name: "Item 2",
  //           path: "/charts/react-vis",
  //           iconText: "2"
  //         },
  //         {
  //           name: "Item 3",
  //           path: "/charts/recharts",
  //           iconText: "3"
  //         },
  //         {
  //           name: "Item 4",
  //           path: "/charts/echarts",
  //           iconText: "4"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: "Utilities",
  //   icon: "format_list_bulleted",
  //   children: [
  //     {
  //       name: "Color",
  //       path: "/utilities/color",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Spacing",
  //       path: "/utilities/spacing",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Typography",
  //       path: "/utilities/typography",
  //       iconText: "T"
  //     },
  //     {
  //       name: "Display",
  //       path: "/utilities/display",
  //       iconText: "D"
  //     }
  //   ]
  // },
  // {
  //   name: "Sessions",
  //   icon: "trending_up",
  //   children: [
  //     {
  //       name: "Sign in",
  //       iconText: "SI",
  //       path: "/session/signin"
  //     },
  //     {
  //       name: "Sign up",
  //       iconText: "SU",
  //       path: "/session/signup"
  //     },
  //     {
  //       name: "Forgot password",
  //       iconText: "FP",
  //       path: "/session/forgot-password"
  //     },
  //     {
  //       name: "Error",
  //       iconText: "404",
  //       path: "/session/404"
  //     }
  //   ]
  // },

  // {
  //   name: "UI Kits",
  //   icon: "favorite",
  //   badge: { value: "50+", color: "secondary" },
  //   children: [
  //     {
  //       name: "Auto Complete",
  //       path: "/material/autocomplete",
  //       iconText: "A"
  //     },
  //     {
  //       name: "Buttons",
  //       path: "/material/buttons",
  //       iconText: "B"
  //     },
  //     {
  //       name: "Checkbox",
  //       path: "/material/checkbox",
  //       iconText: "C"
  //     },
  //     {
  //       name: "Dialog",
  //       path: "/material/dialog",
  //       iconText: "D"
  //     },
  //     {
  //       name: "Expansion Panel",
  //       path: "/material/expansion-panel",
  //       iconText: "E"
  //     },
  //     {
  //       name: "Form",
  //       path: "/material/form",
  //       iconText: "F"
  //     },
  //     {
  //       name: "Icons",
  //       path: "/material/icons",
  //       iconText: "I"
  //     },
  //     {
  //       name: "Menu",
  //       path: "/material/description",
  //       iconText: "M"
  //     },
  //     {
  //       name: "Progress",
  //       path: "/material/progress",
  //       iconText: "P"
  //     },
  //     {
  //       name: "Radio",
  //       path: "/material/radio",
  //       iconText: "R"
  //     },
  //     {
  //       name: "Switch",
  //       path: "/material/switch",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Slider",
  //       path: "/material/slider",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Snackbar",
  //       path: "/material/snackbar",
  //       iconText: "S"
  //     },
  //     {
  //       name: "Table",
  //       path: "/material/table",
  //       iconText: "T"
  //     }
  //   ]
  // },

  // {
  //   name: "Map",
  //   icon: "add_location",
  //   path: "/map"
  // }
];
