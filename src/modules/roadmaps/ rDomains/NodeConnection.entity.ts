import { RoadmapNodeEntity } from './Roadmap_node.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

@Entity('NodeConnection')
export class NodeConnection {
    @PrimaryGeneratedColumn('increment')
    conn_id: number;

    @Column()
    @ManyToOne(() => RoadmapNodeEntity, {createForeignKeyConstraints: false})
    conn_front: number;

    @Column()
    @ManyToOne(() => RoadmapNodeEntity, {createForeignKeyConstraints: false})
    conn_back: number;
}