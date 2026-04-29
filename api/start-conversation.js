module.exports = async function handler(req, res) {
  const { personaId, replicaId } = req.query;
  if (!personaId || !replicaId) {
    return res.status(400).json({ error: 'Missing personaId or replicaId' });
  }
  const response = await fetch('https://tavusapi.com/v2/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.TAVUS_API_KEY
    },
    body: JSON.stringify({
      persona_id: personaId,
      replica_id: replicaId,
      conversation_name: `Voxyn Demo ${Date.now()}`
    })
  });
  const data = await response.json();
  res.status(200).json({ url: data.conversation_url });
}
