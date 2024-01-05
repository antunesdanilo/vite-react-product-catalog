import { ApiService } from "../../shared/services/api.service";
import { ProductDto } from "../dtos/product.dto";
import { ProductFilterInput } from "../inputs/product-filter.input";

export class ProductService extends ApiService {
  async getProducts(filter: ProductFilterInput): Promise<ProductDto[]> {
    const { categoryId, keyword } = filter;

    const filterArray: string[] = [];

    if (categoryId) {
      filterArray.push(`categoryId=${categoryId}`);
    }

    if (keyword) {
      filterArray.push(`q=${keyword}`);
    }

    const query: string = filterArray.length > 0 ? `?${filterArray.join('&')}` : '';
    
    return (await this.get<ProductDto[]>(`/product/${query}`)).data;
  }
}