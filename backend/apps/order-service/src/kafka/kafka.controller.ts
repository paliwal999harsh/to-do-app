import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";
import { Controller } from "@nestjs/common";

@Controller("kafka-controller")
export class KafkaController {
  @EventPattern("elk.receive.product")
  async onElkReceiveProduct(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}

  @EventPattern("elk.receive.order")
  async onElkReceiveOrder(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}

  @EventPattern("elk.receive.customer")
  async onElkReceiveCustomer(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}
}
