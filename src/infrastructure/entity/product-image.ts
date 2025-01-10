import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product';

@Entity('ecm_product_image')
export class ProductImage extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'product_image_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_product_image_pk_product_image_id',
  })
  id: number;

  @Column({
    name: 'product_image_url',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  url: string;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
}
