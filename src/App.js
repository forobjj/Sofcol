import Index from "pages/index";
import GestionUsuarios from "pages/GestionUsuarios";
import PublicLayout from "layouts/PublicLayout";
import PrivateLayout from "layouts/PrivateLayout";
import "styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import ActualizarProyectos from "pages/ActualizarProyectos";
import GestionProyectos from "pages/GestionProyectos";
import TablaGestionUsuarios from "pages/TablaGestionUsuarios";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/gestionUsuarios",
              "/avances",
              "/CrearProyectos",
              "/CrearUsuarios",
              "/Dashboard",
              "/GestionProyectos",
              "/TablaGestionUsuarios",
              "/editarUsuario/:id",
              "/editarProyectos/:id",
            ]}
          >
            <PrivateLayout>
              <Switch>
                <Route path="/CrearProyectos">
                  <ActualizarProyectos />
                </Route>
                <Route path="/gestionUsuarios">
                  <GestionUsuarios />
                </Route>
                <Route path="/GestionProyectos">
                  <GestionProyectos />
                </Route>
                <Route path="/TablaGestionUsuarios">
                  <TablaGestionUsuarios />
                </Route>
                <Route path="/editarUsuario/:id">
                  <GestionUsuarios />
                </Route>
                <Route path="/editarProyectos/:id">
                  <ActualizarProyectos />
                </Route>
                <Route path="/Dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path="/">
            <PublicLayout>
              <Index />
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
