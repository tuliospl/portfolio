import React from 'react'
import ImgPerfil from '../images/Perfil.jpg';
import PtBrIcon from '../images/pt-br.jpg';
import English from '../images/english.jpeg';
import './style/Header.css';

export default function Header() {
  return (
    <div className="container-header">
      <div>
        <img className="language" src={PtBrIcon} alt="Portugues" />
        <img className="language" src={English} alt="English" />
      </div>

      <h1>Túlio Dantas Sploradori</h1>
      <img alt="imagem de perfil" src={ImgPerfil} width="150px" height="200px"  />
    </div>
  )
}
