import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
        Portafolio<span>.</span>
      </a>

      <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
        <a href="#inicio" onClick={closeMenu}>
          Inicio
        </a>
        <a href="#sobre-mi" onClick={closeMenu}>
          Sobre mí
        </a>
        <a href="#tecnologias" onClick={closeMenu}>
          Tecnologías
        </a>
        <a href="#proyectos" onClick={closeMenu}>
          Proyectos
        </a>
        <a href="#experiencia" onClick={closeMenu}>
          Experiencia
        </a>
        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>

      <button
        className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
        aria-label="Abrir menú"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;