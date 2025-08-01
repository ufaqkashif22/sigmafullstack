//D:\sigma\my-sigma\pages\api\contacts.js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await clientPromise;
    const db = client.db('contactForm'); // you can change db name if needed
    const collection = db.collection('contacts');

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    return res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
