import { NodeConnection } from './../ rDomains/NodeConnection.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RoadmapEntity} from "../ rDomains/Roadmap.entity";
import {RoadmapService} from "../rServices/Roadmap.service";
import {RoadmapApicontroller} from "../rControllers/Roadmap.controller";
import { RoadmapNodeEntity } from '../ rDomains/Roadmap_node.entity';


@Module({
  imports: [TypeOrmModule.forFeature([RoadmapEntity, RoadmapNodeEntity, NodeConnection])],
  providers: [RoadmapService],
  exports: [RoadmapService],
  controllers: [RoadmapApicontroller],
})
export class RoadmapsModule {}
