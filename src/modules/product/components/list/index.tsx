import React, { useEffect, useMemo, useState } from 'react';
import './style.scss';

import { ProductCategoryDto } from '../../dtos/product-category.dto';
import { ProductDto } from '../../dtos/product.dto';

import { Header } from '../../../shared/components/header';
import { ProductsListFilter } from '../list-filter';
import { ProductsListItem } from '../list-item';

import { useAppSelector } from '../../../../hooks';
import { selectProductFilter } from '../../../../reducers/product-filter.slice';

import { ProductService } from '../../services/product.service';
import { Footer } from '../../../shared/components/footer';
import Skeleton from '../../../shared/components/skeleton';
const productService = new ProductService();

const ProductsList: React.FC = () => {
  const { categoryId, keyword } = useAppSelector(selectProductFilter);
  
  const [categories, setCategories] = useState<ProductCategoryDto[]>([]);
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = (): void => {
    productService.getCategories().then((categories: ProductCategoryDto[]) => {
      setCategories(categories);
    });
  }

  const getProducts = (): void => {
    productService.getProducts().then((products: ProductDto[]) => {
      setProducts(products);
    });
  }

  const filteredProducts = useMemo((): ProductDto[] => {
    let filtered = products;
    if (categoryId) {
      filtered = filtered.filter((product: ProductDto) => product.categoryId === categoryId);
    }
    if (keyword) {
      filtered = filtered.filter((product: ProductDto) => product.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || product.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1 );
    }
    return filtered;
  }, [products, categoryId, keyword]);

  return (
    <>
      <Header />
      <ProductsListFilter categories={categories} />
      <div id="products-list" className='container flex flex-row flex-wrap gap-5 my-5'>
        {filteredProducts.map((product: ProductDto) => (
          <ProductsListItem key={product.id} product={product} />
        ))}
        {!products.length && (
          <Skeleton repeat={12} width='250px' height='222px' />
        )}
        {!filteredProducts.length && (
          <div className="text-[24px] text-gray-500 mt-8">
            OPS! Não encontramos nenhum produto que atenda ao filtro selecionado.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export { ProductsList };
