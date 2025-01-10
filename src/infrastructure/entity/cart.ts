import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer';
import { CartToProduct } from './cart-to-product';

@Entity('ecm_cart')
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'cart_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_cart_pk_cart_id',
  })
  id: number;

  @OneToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @OneToMany(() => CartToProduct, (cartToProduct) => cartToProduct.cart)
  cartToProduct!: CartToProduct[];
}
