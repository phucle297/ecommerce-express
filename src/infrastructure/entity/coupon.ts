import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CouponType } from './coupon-type';
import { OrderToCoupon } from './order-to-coupon';

@Entity('ecm_coupon')
export class Coupon extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'coupon_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_coupon_pk_coupon_id',
  })
  id: number;

  @Column({
    name: 'coupon_code',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  code: number;

  @Column({
    name: 'coupon_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'coupon_description',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    name: 'coupon_discount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  discount: number;

  @Column({
    name: 'code_start_date',
    type: 'date',
    nullable: false,
  })
  startDate: Date;

  @Column({
    name: 'code_end_date',
    type: 'date',
    nullable: false,
  })
  endDate: Date;

  @Column({
    name: 'coupon_status',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  status: string; // expired, active, inactive

  @Column({
    name: 'coupon_max_use',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  maxUse: number;

  @Column({
    name: 'coupon_used',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  used: number;

  @ManyToOne(() => CouponType, (couponType) => couponType.id)
  couponType: CouponType;

  @OneToMany(() => OrderToCoupon, (orderToCoupon) => orderToCoupon.coupon)
  orderToCoupon!: OrderToCoupon[];
}
