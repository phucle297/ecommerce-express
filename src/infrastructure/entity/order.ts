import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderToProduct } from './order-to-product';
import { OrderToCoupon } from './order-to-coupon';
import { Customer } from './customer';
import { OrderStatus } from '@/common/enum';

@Entity('ecm_order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'order_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_order_pk_order_id',
  })
  id: number;

  @Column({
    name: 'order_date',
    type: 'date',
    nullable: false,
  })
  date: Date;

  @Column({
    name: 'order_total_amount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  totalAmount: number;

  @Column({
    name: 'order_status',
    type: 'enum',
    enum: OrderStatus,
    length: 50,
    nullable: false,
  })
  status: OrderStatus;

  @Column({
    name: 'order_shipping_address',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  shippingAddress: string;

  @OneToMany(() => OrderToProduct, (orderToProduct) => orderToProduct.order)
  orderToProduct!: OrderToProduct[];

  @OneToMany(() => OrderToCoupon, (orderToCoupon) => orderToCoupon.order)
  orderToCoupon!: OrderToCoupon[];

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;
}
