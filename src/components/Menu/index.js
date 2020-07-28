import React from "react";
import Logo from "../../assets/Logo.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

// O button no Menu se comporta dinamicamente como o Link
function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
