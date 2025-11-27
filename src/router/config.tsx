import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ServicesPage from "../pages/services/page";
import TerapiaFamiliarPage from "../pages/services/terapia-familiar/page";
import TerapiaParejaPage from "../pages/services/terapia-pareja/page";
import TerapiaIndividualPage from "../pages/services/terapia-individual/page";
import AgendaCitaPage from "../pages/agenda-cita/page";
import BlogPage from '../pages/blog/page';
import AnsiedadPost from '../pages/blog/ansiedad-sintomas-tratamiento/page';
import DepresionPost from '../pages/blog/depresion-como-identificarla/page';
import EstresLaboralPost from '../pages/blog/estres-laboral-manejo/page';
import AutoestimaPost from '../pages/blog/autoestima-fortalecimiento/page';
import RelacionesPost from '../pages/blog/relaciones-saludables-comunicacion/page';

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
    path: "/blog/ansiedad-sintomas-tratamiento",
    element: <AnsiedadPost />
  },
  {
    path: "/blog/depresion-como-identificarla",
    element: <DepresionPost />
  },
  {
    path: "/blog/estres-laboral-manejo",
    element: <EstresLaboralPost />
  },
  {
    path: "/blog/autoestima-fortalecimiento",
    element: <AutoestimaPost />
  },
  {
    path: "/blog/relaciones-saludables-comunicacion",
    element: <RelacionesPost />
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
