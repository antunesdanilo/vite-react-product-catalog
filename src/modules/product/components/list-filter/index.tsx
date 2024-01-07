import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { ProductCategoryDto } from "../../dtos/product-category.dto";

import classNames from 'classnames';
import { selectProductFilter, setCategoryId, setKeyword } from "../../../../reducers/product-filter.slice";

import './style.scss';

interface ProductsListFilterProps {
  categories: ProductCategoryDto[];
}

const ProductsListFilter: React.FC<ProductsListFilterProps> = ({ categories }) => {
  const { categoryId } = useAppSelector(selectProductFilter);
  const dispatch = useAppDispatch();

  const onChangeCategory = (currentCategory: number | undefined, clickedCategory: number): void => {
    if (currentCategory === clickedCategory) {
      dispatch(setCategoryId(undefined));
      return;
    }
    dispatch(setCategoryId(clickedCategory));
  }

  const onChangeKeyword = (keyword: string): void => {
    console.log(keyword)
    dispatch(setKeyword(keyword));
  }
 
  return (
    <div id="product-list-filter" className="container">
      <h2 className="text-gray-500 mt-2">Produtos</h2>
      <div className="mt-2">
        <div className="text-gray-500 ms-1">Categorias</div>
        <div className="flex flex-row flex-wrap">
          {categories.map((category: ProductCategoryDto) => (
            <div
              key={category.id}
              role='button'
              className={classNames({'category-pill': true, 'active': categoryId === category.id })}
              onClick={() => onChangeCategory(categoryId, category.id)}
              onKeyDown={() => onChangeCategory(categoryId, category.id)}
              tabIndex={0}
            >{category.categoryName}</div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-gray-500 ms-1">Palavra-chave</div>
        <input
          placeholder="palavra-chave"
          type='text'
          className="keyword rounded border h-[44px] p-2 w-[100%] max-w-[500px]"
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeKeyword(event.target.value)}
        />
      </div>
    </div>
  );
}

export { ProductsListFilter };