import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Order } from './order';
import { Product } from './product';

@Entity('ecm_order_product')
export class OrderToProduct extends BaseEntity {
  @ManyToOne(() => Order, (order) => order.id)
  @JoinColumn({
    name: 'order_id',
    referencedColumnName: 'id',
  })
  @PrimaryColumn({
    name: 'order_id',
    type: 'int',
    unsigned: true,
  })
  order: Order;

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
    name: 'order_product_quantity',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  quantity: number;

  @Column({
    name: 'order_product_unit_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  unitPrice: number;
}
