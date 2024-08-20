import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { kafkaService } from './kafka.service';
import { MessageDto } from './message.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('kafka')
@Controller('kafka')
export class KafkaController {
  constructor(private kafkaservice: kafkaService) {}
  @Post('send-message')
  @ApiOperation({ summary: 'Send message' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async sendMessage(@Body() data: MessageDto): Promise<string> {
    console.log(data);
    await this.kafkaservice.sendMessage(data.topic, data.message);
    return 'Message send!!';
  }

  @Get('consume-messages/:topic')
  @ApiOperation({ summary: 'Recibe message' })
  @ApiParam({
    name: 'topic',
    required: true,
    description: 'The Kafka topic to consume messages from',
    example: 'houston-topic',
  })
  async consumeMessages(@Param('topic') topic: string): Promise<string> {
    console.log(topic);
    console.log(typeof topic);
    await this.kafkaservice.consumerMessages(topic);
    return 'Message consumed!!';
  }
}
