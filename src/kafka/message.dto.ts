import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class MessageDto {
  @ApiProperty({
    example: 'houston-topic',
    description: 'name of topic',
  })
  @IsString()
  @IsNotEmpty()
  topic: string;

  @ApiProperty({
    example: 'we have a problem',
    description: 'message',
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}
