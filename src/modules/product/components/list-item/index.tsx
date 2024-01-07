import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.scss';

import { ProductDto } from '../../dtos/product.dto';
import { useAppDispatch } from '../../../../hooks';
import { addItemToCart } from '../../../../reducers/checkout.slice';
import { notify } from '../../../../utils/notify.util';
import { formatCurrency } from '../../../../utils/formatters';

interface ProductsListItemProps {
  product: ProductDto;
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const addToCart = (product: ProductDto): void => {
    dispatch(addItemToCart({
      product,
      quantity: 1,
    }));
    notify({
      type: 'success',
      message: `Você adicionou "${product.title}" ao carrinho.`,
    });
  }

  const goToDetails = (product: ProductDto): void => {
    navigate(`/${product.id}`);
  }

  return (
    <div id='product-list-item' className='overflow-hidden'>
      <div className="relative w-[100%] aspect-[16/9] overflow-hidden flex justify-center items-center">
        {product.images.length > 0 && (
          <img src={product.images[0]} alt={product.title} />
        )}
        {!product.images?.length && (
          <img src='/no-image.jpg' alt={product.title} width='100%' />
        )}
        <div className='buttons-container flex flex-row leading-4 py-1'>
          <button
            onClick={() => addToCart(product)}
            className='text-gray-500 hover:text-primary'
          >
            Adicionar ao carrinho
          </button>
          <button 
            onClick={() => goToDetails(product)}
            className='text-gray-500 hover:text-primary'
          >
            Ver mais detalhes
          </button>
        </div>
      </div>
      <div className='title-container'>
        <div className='text-gray-500 px-2 pt-2 truncate'>{product.title}</div>
        <div className='text-primary text-center text-2xl font-[500] mt-2'>
          {formatCurrency({ value: product.price })}
        </div>
      </div>
    </div>
  );
}

export { ProductsListItem };
