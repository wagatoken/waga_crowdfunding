type MenuItem = {
  title: string;
  path?: string;
  submenu?: MenuItem[];
};

const menuData: MenuItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "RoadMap",
    path: "/roadmap",
  },
  {
    title: "Tokenomics",
    path: "/tokenomics",
  },
];

export default menuData; 