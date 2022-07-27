import { getClientIp } from '@supercharge/request-ip';

export default function trackIpMiddleware(req, res, next) {
  const ip = getClientIp(req);
  req.userIp = ip;
  next();
}
