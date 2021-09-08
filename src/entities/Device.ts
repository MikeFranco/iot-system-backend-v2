import { Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('device')
export class Device extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  type: string;

  @Column()
  manufacturer: string;

  @Column({
    type: "simple-json",
    nullable: false,
    default: {turnedOn: true}
  })
  state: {
    turnedOn: boolean,
    speed: number
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}