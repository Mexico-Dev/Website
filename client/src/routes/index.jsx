import Inicio from "./inicio";
import Cursos from "./cursos";
import Videos from "./videos";
import Eventos from "./eventos";
import Empleos from "./empleos";
import Tienda from "./tienda";

const ROOT = [
    {
        path: "/",
        element: Inicio
    },
    {
        path: "/cursos",
        element: Cursos
    },
    {
        path: "/videos",
        element: Videos
    },
    {
        path: "/eventos",
        element: Eventos
    },
    {
        path: "/empleos",
        element: Empleos
    },
    {
        path: "/tienda",
        element: Tienda
    }
];

export default ROOT;
