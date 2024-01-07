import { ApiService } from "../../shared/services/api.service";
import { ProductCategoryDto } from "../dtos/product-category.dto";
import { ProductDto } from "../dtos/product.dto";

export class ProductService extends ApiService {
  async getCategories(): Promise<ProductCategoryDto[]> {
    return (await this.get<ProductCategoryDto[]>('/category')).data;
  }

  async getCategory(categoryId: number): Promise<ProductCategoryDto> {
    return (await this.get<ProductCategoryDto>(`/category/${categoryId}`)).data;
  }

  async getProducts(): Promise<ProductDto[]> {    
    return (await this.get<ProductDto[]>('/product')).data;
  }

  async getProduct(productId: number): Promise<ProductDto> {    
    return (await this.get<ProductDto>(`/product/${productId}`)).data;
  }
}