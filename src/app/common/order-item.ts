import { CartItem } from "./cart-item";

export class OrderItem {
  imageUrl: string | undefined;
  unitPrice: number | undefined;
  quantity: number | undefined;
  productId: string | undefined;

  constructor(catItem: CartItem) {
    this.imageUrl = catItem.imageUrl;
    this.quantity = catItem.quantity;
    this.unitPrice = catItem.unitPrice;
    this.productId = catItem.id;
  }
}
