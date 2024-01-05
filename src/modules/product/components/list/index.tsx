import React, { useEffect, useState } from 'react';
import './style.scss';
import { ProductDto } from '../../dtos/product.dto';
import { ProductService } from '../../services/product.service';

const productService = new ProductService();

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (): void => {
    productService.getProducts({categoryId: 1, keyword: 'teste'}).then((products: ProductDto[]) => {
      console.log(products)
      setProducts(products);
    });
  }

  return (
    <div id="products-list">
      {products.map((product: ProductDto) => (
        <div key={product.productId}>{product.title}</div>
      ))}
    </div>
  );
};

export { ProductsList };
