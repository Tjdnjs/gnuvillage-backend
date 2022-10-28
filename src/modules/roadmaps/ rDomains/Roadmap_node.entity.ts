import { RoadmapEntity } from './Roadmap.entity';
import { NodeConnection } from './NodeConnection.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

@Entity('RoadMapNode')
export class RoadmapNodeEntity {
    @PrimaryGeneratedColumn('increment')
    node_id: number;

    @Column()
    node_label: string;

    @Column()
    node_url: string;

    @JoinColumn()
    @ManyToOne(() => RoadmapEntity, (roadmap) => roadmap.rm_id)
    // @Column()
    rm_id: RoadmapEntity;

    // @ManyToOne(() => RoadmapNodeEntity, (node) => node.childNode)
    // parentNode : RoadmapNodeEntity;

    // @OneToMany((type) => RoadmapNodeEntity, (node) => node.parentNode)
    // childNode : RoadmapNodeEntity[];
}