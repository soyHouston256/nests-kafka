import { Module } from '@nestjs/common';
import { kafkaService } from './kafka.service';
import { KafkaController } from './kafka.controller';

@Module({
  providers: [kafkaService],
  controllers: [KafkaController],
})
export class KafkaModule {}
