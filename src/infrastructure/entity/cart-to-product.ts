import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cart } from './cart';
import { Product } from './product';

@Entity('ecm_cart_product')
export class CartToProduct {
  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({
    name: 'cart_id',
    referencedColumnName: 'id',
  })
  @PrimaryColumn({
    name: 'cart_id',
    type: 'int',
    unsigned: true,
  })
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
  })
  @PrimaryColumn({
    name: 'product_id',
    type: 'int',
    unsigned: true,
  })
  product: Product;

  @Column({
    name: 'cart_product_quantity',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  quantity: number;
}
