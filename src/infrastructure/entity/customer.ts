import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base-entity';
import { Order } from './order';
import { AuthProvider } from '@/common/enum';
import bcrypt from 'bcrypt';

@Entity('ecm_customer')
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'customer_id',
    type: 'int',
    unsigned: true,
    primaryKeyConstraintName: 'ecm_customer_pk_customer_id',
  })
  id: number;

  @Column({
    name: 'customer_name',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Index({ unique: true })
  @Column({
    name: 'customer_email',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  email: string;

  @Column({
    name: 'customer_phone',
    type: 'varchar',
    length: 15,
    nullable: true,
  })
  phone: string;

  @OneToMany(() => Order, (order) => order.customer)
  order: Order[];

  @Column({
    name: 'customer_password',
    type: 'varchar',
    length: 255,
    nullable: true, // Nullable because OAuth users won't have password
  })
  password?: string;

  @Column({
    name: 'customer_provider',
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.LOCAL,
  })
  provider: AuthProvider;

  @Column({
    name: 'customer_provider_id',
    type: 'varchar',
    length: 255,
    nullable: true, // ID from OAuth provider (like Google ID)
  })
  providerId?: string;

  @Column({
    name: 'customer_avatar',
    type: 'varchar',
    length: 255,
    nullable: true, // Profile picture URL (often from OAuth)
  })
  avatar?: string;

  @Column({
    name: 'customer_access_token',
    type: 'varchar',
    length: 2048, // OAuth2 tokens can be quite long
    nullable: true,
  })
  accessToken?: string;

  @Column({
    name: 'customer_refresh_token',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  refreshToken?: string;

  @Column({
    name: 'customer_is_email_verified',
    type: 'boolean',
    default: false,
  })
  isEmailVerified: boolean;

  @Column({
    name: 'customer_role',
    type: 'varchar',
    length: 20,
    default: 'user',
  })
  role: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password && this.provider === AuthProvider.LOCAL) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async validatePassword(password: string): Promise<boolean> {
    if (this.password) {
      return bcrypt.compare(password, this.password);
    }
    return false;
  }
}
