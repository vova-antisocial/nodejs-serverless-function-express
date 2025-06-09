export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "live" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { notificationType } = req.body;
  console.log("Webhook payload:", req.body);
  if (notificationType === "PING") {
    return res.status(200).json({ status: "pong" });
  }
  return res.status(200).json({ status: "received" });
}
