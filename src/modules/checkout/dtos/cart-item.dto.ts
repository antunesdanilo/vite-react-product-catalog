import { ProductDto } from "../../product/dtos/product.dto";

export interface CartItemDto {
  product: ProductDto;
  quantity: number;
}
