import { UserEntity } from './../../users/entities/users.entity';
import { IsNotEmpty } from "class-validator";

export class CreateRoadmapDto{
    @IsNotEmpty()
    rm_name: string;


    rm_description: string;
    
    // user: UserEntity;

}