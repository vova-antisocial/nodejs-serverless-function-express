export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint is live" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = req.body;
  console.log("🔔 Received webhook:", body);

  if (body.notificationType === "PING") {
    return res.status(200).json({ status: "pong", name: "order_created" });
  }

  console.log("Handling event:", body.notificationType);
  return res.status(200).json({ status: "received" });
}
