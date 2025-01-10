import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({
    name: 'dt_create',
    type: 'datetime',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'dt_update',
    type: 'datetime',
  })
  updatedAt: Date;
}
