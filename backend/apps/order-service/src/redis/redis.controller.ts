import { EventPattern, Payload } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { RedisMessage } from "./redisMessage";

@Controller("redis-controller")
export class RedisController {
  @EventPattern("elk.receive")
  async onElkReceive(
    @Payload()
    message: RedisMessage
  ): Promise<void> {}
}
