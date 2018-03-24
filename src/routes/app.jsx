import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import UserLogin from "../views/Login/Login.jsx";
import NoMatch from "../views/Error/Error.jsx";

import {
  Dashboard,
  Person,
  Notifications
} from "material-ui-icons";


const protectedRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
  path: "/user",
  sidebarName: "User Profile",
  navbarName: "Profile",
  icon: Person,
  component: UserProfile
  }
];

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
