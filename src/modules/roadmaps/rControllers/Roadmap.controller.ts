import { NodeConnection } from '../ rDomains/NodeConnection.entity';
import { CreateNodeDto, ConnDto } from '../ rDtos/node.dto';
import { RoadmapNodeEntity } from '../ rDomains/Roadmap_node.entity';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UsePipes,
} from '@nestjs/common';
import { Page, PageRequest } from 'src/common/utils/page-request';
import {RoadmapService} from "../rServices/Roadmap.service";
import { CreateRoadmapDto } from '../ rDtos/Roadmap.dto';
import { RoadmapEntity } from '../ rDomains/Roadmap.entity';

@Controller('roadmap')
export class RoadmapApicontroller {
    constructor(private readonly roadmapService: RoadmapService) {}
    
    @Get('/:node')
    getNode(@Param('node') node: string): Promise <RoadmapNodeEntity>{
        return this.roadmapService.getNode(node);
    }

    @Get('conn/:conn')
    getConn(@Param('conn') conn: string){
        return this.roadmapService.getNode_conn(parseInt(conn));
    }
    
    @Post('create')
    createRoadmap(
        @Body() roadmapdto: CreateRoadmapDto
    ): Promise <RoadmapEntity>{
        console.log('working');
        return this.roadmapService.createRoadmap(roadmapdto);
    }

    @Post()
    createNode(
        @Body() createNodeDto: CreateNodeDto
    ): Promise <RoadmapNodeEntity>{
        console.log('working');
        return this.roadmapService.createNode(createNodeDto);
    }

    @Post('conn')
    createConnection(
        @Body() connDto: ConnDto
    ): Promise <NodeConnection>{
        console.log('working');
        return this.roadmapService.createConn(connDto);
    }


}
