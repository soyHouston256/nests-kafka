import { Kafka } from 'kafkajs';

export class kafkaService {
  private kafka: Kafka;
  constructor() {
    this.kafka = new Kafka({
      clientId: process.env.APP_NAME,
      brokers: [process.env.KAFKA_BROKERS],
    });
  }

  async sendMessage(topic: string, message: string): Promise<void> {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: message }],
    });
    await producer.disconnect();
  }

  async consumerMessages(topic: string): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: 'my-group' });

    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          value: message.value.toString(),
        });
      },
    });
  }
}
