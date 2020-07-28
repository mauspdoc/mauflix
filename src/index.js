import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home/App";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Pagina404 = () => <h1>Página 404</h1>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
