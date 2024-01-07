import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const Footer: React.FC = () => {
  return (
    <div id='footer'>
      <div className="container">
        <img src='/logo-inverted.jpg' alt='logo' />
        <div className="text-white">
          Desenvolvido por&nbsp;
          <Link to='https://github.com/antunesdanilo' target="blank">
            @Danilo Antunes
          </Link>
        </div>
      </div>
    </div>
  );
} 

export { Footer };
