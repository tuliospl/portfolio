import React from 'react'
import ImgPerfil from '../images/Perfil.jpg';

export default function Header() {
  return (
    <div>
      <h1>Bem vindo ao meu portifolio</h1>
      <button>Language</button>
      <img alt="imagem de perfil" src={ImgPerfil} width="150px" height="200px"  />
    </div>
  )
}
