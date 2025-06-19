import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      await base(process.env.AIRTABLE_TABLE_NAME).create([
        {
          fields: {
            Name: name,
            Email: email,
            Message: message,
          },
        },
      ]);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Airtable Error:', err);
      res.status(500).json({ error: 'Failed to submit to Airtable' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
