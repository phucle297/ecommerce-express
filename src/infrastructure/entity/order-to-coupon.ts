import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Coupon } from './coupon';
import { Order } from './order';

@Entity('ecm_order_coupon')
export class OrderToCoupon extends BaseEntity {
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

  @ManyToOne(() => Coupon, (coupon) => coupon.id)
  @JoinColumn({
    name: 'coupon_id',
    referencedColumnName: 'id',
  })
  @PrimaryColumn({
    name: 'coupon_id',
    type: 'int',
    unsigned: true,
  })
  coupon: Coupon;
}
