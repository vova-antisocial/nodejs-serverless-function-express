export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "Webhook endpoint is live" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = req.body;

  if (body.notificationType === "PING") {
    return res.status(200).json({
      notificationType: "PONG",
      time: body.time || new Date().toISOString(),
      name: "my-webhook-name",
      version: "1.0"
    });
  }

  return res.status(200).json({ status: "received" });
}
