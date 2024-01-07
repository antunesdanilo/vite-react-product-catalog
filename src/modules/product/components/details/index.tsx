import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

import { ProductService } from '../../services/product.service';
import { ProductDto } from '../../dtos/product.dto';
import { Header } from '../../../shared/components/header';
import { Footer } from '../../../shared/components/footer';
import { ProductCategoryDto } from '../../dtos/product-category.dto';
import classNames from 'classnames';
import { formatCurrency } from '../../../../utils/formatters';
import { useAppDispatch } from '../../../../hooks';
import { addItemToCart } from '../../../../reducers/checkout.slice';
import { notify } from '../../../../utils/notify.util';
const productService = new ProductService();

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ProductDto | undefined>();
  const [imageIndex, setImageIndex] = useState<number>(0);

  const [category, setCategory] = useState<ProductCategoryDto | undefined>();

  const [itemsCount, setItemsCount] = useState<number>(1);

  useEffect(() => {
    getProduct(Number(id));
  }, [id]);
  
  const getProduct = (id: number): void => {
    productService.getProduct(id).then((product: ProductDto) => {
      setProduct(product);
      getCategory(product.categoryId);
    });
  }

  const getCategory = (id: number): void => {
    productService.getCategory(id).then((category: ProductCategoryDto) => {
      setCategory(category);
    });
  }

  const addToCart = (): void => {
    if (!product) return;

    dispatch(addItemToCart({
      product,
      quantity: itemsCount,
    }));
    notify({
      type: 'success',
      message: `Você adicionou "${product.title}" ao carrinho.`,
    });
  }

  return (
    <>
      <Header />

      <div id="product-details" className='container flex flex-col lg:flex-row mt-6'>
        {product && (<>
          <div className='lg:flex-1 lg:mr-6'>
            <div className='w-[100%] aspect-video overflow-hidden flex items-center'>
              <img 
                src={product?.images[imageIndex]}
                alt={product?.title}
              />
            </div>
            <div className='flex flex-row gap-2 mt-2 overflow-hidden'>
              {product.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() =>setImageIndex(index)}
                  className={classNames({
                    'w-[160px] h-[90px] overflow-hidden flex items-center border border-2': true,
                    'border-primary': imageIndex === index,
                    'border-transparent': imageIndex !== index,
                  })}
                >
                  <img src={image} alt={product.title} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:flex-1 mt-5 lg:mt-0 mb-6">
            <h2 className="text-gray-500 leading-6">{product?.title}</h2>
            <div className='text-gray-500 mt-3'>Categoria: {category?.categoryName}</div>
            <div className='mt-3 text-primary text-2xl'>{formatCurrency({ value: product.price})}</div>
            <div className='count-container flex flex-row items-center mt-3'>
              <input 
                type='number'
                value={itemsCount}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setItemsCount(Number(event.target.value))}
                className='w-[60px] h-[44px] border border-gray-300 text-gray-900 text-sm p-2.5'
                min={1}
              />
              <button
                className='px-3 h-[44px] bg-primary text-white rounded-2xl hover:opacity-80'
                onClick={addToCart}
              >
                ADICIONAR AO CARRINHO
              </button>
            </div>
            <div className='text-gray-500 mt-4'>{product?.description}</div>
          </div>
        </>)}
      </div>

      <Footer />
    </>
  )
}

export { ProductDetails };
