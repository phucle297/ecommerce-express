import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coupon } from './coupon';

@Entity('ecm_coupon_type')
export class CouponType {
  @PrimaryGeneratedColumn({
    name: 'coupon_type_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_coupon_type_pk_coupon_type_id',
  })
  id: number;

  @Column({
    name: 'coupon_type_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Coupon, (coupon) => coupon.couponType)
  coupon: Coupon[];
}
