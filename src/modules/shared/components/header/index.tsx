import React from "react";
import './style.scss';

const Header: React.FC = () => { 
  const goToAdd = (): void => {
    alert('Clicou no botão adicionar!');
  }

  const goToFavorite = (): void => {
    alert('Clicou no botão favoritos!');
  }

  return (
    <nav id="header">
      <div className="header-container flex flex-row justify-end md:pr-[1.5rem]">
        <div className="container max-md:center flex flex-row items-center justify-between">
          <div>
            <span className="uppercase text-blue">auto</span>
            <span className="uppercase text-gray">super</span>
          </div>
          <div className="search-container hidden lg:block">
            <input className="input-search" placeholder="Busque um livro" />
            <img src="images/icon-search.svg" alt="search icon" className="icon-search" />
          </div>
          <div className="hidden lg:flex flex-row items-center flex-nowrap ml-5" role="button" onClick={goToAdd} onKeyDown={goToAdd} tabIndex={0}>
            <img src="images/icon-plus.svg" alt="plus icon" />
            <div className="ml-2 text-[#555555] font-[700]">Adicionar</div>
          </div>
          <div className="hidden lg:flex flex-row items-center flex-nowrap ml-5" role="button" onClick={goToFavorite} onKeyDown={goToFavorite} tabIndex={0}>
            <img src="images/icon-hearth.svg" alt="hearth icon" />
            <div className="ml-2 text-[#555555] font-[700]">Favoritos</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };