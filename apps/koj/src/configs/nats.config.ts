export const natsConfig = {
  servers: [process.env.NATS_URL || 'nats://localhost:4222'],
};
