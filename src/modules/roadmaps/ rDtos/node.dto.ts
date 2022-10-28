import { RoadmapEntity } from './../ rDomains/Roadmap.entity';
import { IsNotEmpty } from "class-validator";

export class CreateNodeDto{
    @IsNotEmpty()
    node_label: string;

    @IsNotEmpty()
    node_url: string;

    @IsNotEmpty()
    rm_id: RoadmapEntity;
}

export class ConnDto{
    @IsNotEmpty()
    conn_front: number;

    @IsNotEmpty()
    conn_back: number;
}