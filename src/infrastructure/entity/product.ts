import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CartToProduct } from './cart-to-product';
import { ProductImage } from './product-image';
import { OrderToProduct } from './order-to-product';

@Entity('ecm_product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'product_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_product_pk_product_id',
  })
  id: number;

  @Index()
  @Column({
    name: 'product_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'product_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    name: 'product_stock',
    type: 'int',
    unsigned: true,
    nullable: true,
  })
  stock: number;

  @OneToMany(() => CartToProduct, (cartToProduct) => cartToProduct.product)
  cartToProduct!: CartToProduct[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  productImage: ProductImage[];

  @OneToMany(() => OrderToProduct, (orderToProduct) => orderToProduct.product)
  orderToProduct!: OrderToProduct[];
}
