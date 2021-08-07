import { Publisher, OrderCreatedEvent, Subjects } from "@kanitickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
