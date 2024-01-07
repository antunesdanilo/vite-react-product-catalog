import React from "react";
import './style.scss';

import { Link } from "react-router-dom";

import { useAppSelector } from "../../../../hooks";
import { selectCheckout } from "../../../../reducers/checkout.slice";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Header: React.FC = () => { 
  const checkout = useAppSelector(selectCheckout);

  return (
    <nav id="header">
      <div className="container flex flex-row justify-between items-center">
        <Link to='/'>
          <h1 className="brand">
            <img src='/logo.jpg' alt="logo" />
          </h1>
        </Link>
        <Link to='/checkout'>
          <div className="cart-link flex items-center justify-end pe-[5px]">
            <ShoppingCartCheckoutIcon sx={{ fontSize: 32, color: '#999999'}} />
            {checkout.items.length > 0 && (
            <div className="cart-count">
              {checkout.items.length}
            </div>)}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export { Header };