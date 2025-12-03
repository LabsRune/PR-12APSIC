import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import TerapiaFamiliarPage from "../pages/services/terapia-familiar/page";
import TerapiaParejaPage from "../pages/services/terapia-pareja/page";
import TerapiaIndividualPage from "../pages/services/terapia-individual/page";
import AgendaCitaPage from "../pages/agenda-cita/page";
import BlogPage from '../pages/blog/page';
import SessionDetail from '../pages/blog/SessionDetail';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <ServicesPage />,
  },
  {
    path: "/servicios/terapia-familiar",
    element: <TerapiaFamiliarPage />,
  },
  {
    path: "/servicios/terapia-pareja",
    element: <TerapiaParejaPage />,
  },
  {
    path: "/servicios/terapia-individual",
    element: <TerapiaIndividualPage />,
  },
  {
    path: "/agenda-cita",
    element: <AgendaCitaPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: "/blog/:slug",
    element: <SessionDetail />
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
