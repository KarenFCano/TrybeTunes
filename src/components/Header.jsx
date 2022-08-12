import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

export default function Header() {
  const { nome } = useSelector(({ reducer }) => reducer);

  return (
    <header className="header-container">
      <h1>
        Olá,
        {' '}
        {nome}
      </h1>
      <div className="header-buttons">
        <nav>
          <Link to="/search">Busca</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/profile">Perfil</Link>
        </nav>
      </div>
    </header>
  );
}
