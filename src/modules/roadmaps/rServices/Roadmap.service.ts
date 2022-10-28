import { CreateRoadmapDto } from './../ rDtos/Roadmap.dto';
import { CreateNodeDto, ConnDto } from './../ rDtos/node.dto';
import { NodeConnection } from './../ rDomains/NodeConnection.entity';
import { RoadmapNodeEntity } from './../ rDomains/Roadmap_node.entity';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource} from 'typeorm';
import {RoadmapEntity} from "../ rDomains/Roadmap.entity";
import { v1 as uuid } from 'uuid';

@Injectable()
export class RoadmapService {
    constructor(
        @InjectRepository(RoadmapEntity) private roadmapRepository: Repository<RoadmapEntity>,
        @InjectRepository(RoadmapNodeEntity)
        private roadmapnodeRepository: Repository<RoadmapNodeEntity>,
        @InjectRepository(NodeConnection)
        private nodeConnection: Repository<NodeConnection>,
        private dataSource: DataSource,
    ) {}
    async createRoadmap(createRoadmap : CreateRoadmapDto): Promise<RoadmapEntity>{
        const Roadmap = new RoadmapEntity();
        // node.node_id = uuid();

        Roadmap.rm_name = createRoadmap.rm_name;
        Roadmap.rm_description = createRoadmap.rm_description;
        // Roadmap.user = createRoadmap.user;
        const roadmap = await this.roadmapRepository.findOneBy({rm_name:Roadmap.rm_name});
        if(roadmap){
            throw new UnprocessableEntityException(
                '해당 로드맵은 이미 있습니다.',
            );
        }

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(Roadmap);
          await queryRunner.commitTransaction();
          console.log('try');
        } catch (err) {
          await queryRunner.rollbackTransaction();
          console.log(err.message);
        } finally {
          await queryRunner.release();
          console.log('finally');
        }
    
        return Roadmap;
    }


    async getRoadMap(roadmapName:string)
    {
        const roadmap = await this.roadmapRepository.findOneBy({rm_name:roadmapName}) ;
        return roadmap
    }

    async createNode(createNodeDto : CreateNodeDto): Promise<RoadmapNodeEntity>{
        const node = new RoadmapNodeEntity();
        // node.node_id = uuid();
        
        node.node_label = createNodeDto.node_label;
        node.node_url = createNodeDto.node_url;
        node.rm_id = createNodeDto.rm_id;
        
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
          await queryRunner.manager.save(node);
          await queryRunner.commitTransaction();
          console.log('try');
        } catch (err) {
          await queryRunner.rollbackTransaction();
          console.log(err.message);
        } finally {
          await queryRunner.release();
          console.log('finally');
        }
    
        return node;
    }

    async getNode(node_label : string)
    {
        const node = await this.roadmapnodeRepository.findOneBy({node_label: node_label}) ;
        return node
    }

    async getNode_conn(node_id : number)
    {
        console.log(node_id);
        try{
            const conns = await this.nodeConnection.findBy({conn_front: node_id}) ;
            const childs = conns.map((conn) => conn.conn_back);
            return {conn_front: node_id, conn_back: childs};
        }
        catch (err) {
            console.log('err');
            return alert(`err`);
        }
    }

    async createConn(connDto : ConnDto): Promise<NodeConnection>{
        const node_conn = new NodeConnection();
        // node.node_id = uuid();
        node_conn.conn_front = connDto.conn_front;
        node_conn.conn_back = connDto.conn_back;
        
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
          await queryRunner.manager.save(node_conn);
          await queryRunner.commitTransaction();
          console.log('try');
        } finally {
          await queryRunner.release();
          console.log('finally');
        }
    
        return node_conn;
    }
}
