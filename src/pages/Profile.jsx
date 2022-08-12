import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/pages/profile.css';

function Profile() {
  const { nome, email } = useSelector(({ reducer }) => reducer);

  return (
    <div>
      <Header />
      <div className="profile-main">
        <h1>Profile</h1>
        <div className="profile-container">
          <img src="https://img.myloview.com.br/adesivos/modernos-fones-de-ouvido-de-prata-com-icone-de-vetor-de-onda-de-som-azul-400-120813607.jpg" alt="user" />
          <div className="profile-user">
            <h2>
              Usuário :
              {' '}
              {nome}
            </h2>
            <h2>
              E-mail :
              {' '}
              {email}
            </h2>
          </div>
        </div>
        <div className="refs-container">
          <h4>
            Conheça o perfil de Karen Cano no
            <a href="https://www.linkedin.com/in/karen-cano/">LinkedIn</a>
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
