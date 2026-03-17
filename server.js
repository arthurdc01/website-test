const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Contact form API endpoint
app.post('/api/enquiry', (req, res) => {
  const { name, phone, email, bike, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  console.log('--- New Enquiry ---');
  console.log(`Name:    ${name}`);
  console.log(`Phone:   ${phone}`);
  console.log(`Email:   ${email}`);
  console.log(`Bike:    ${bike || 'Not specified'}`);
  console.log(`Message: ${message}`);
  console.log('-------------------');

  res.json({ success: true, message: 'Enquiry received! We will get back to you within 24 hours.' });
});

app.listen(PORT, () => {
  console.log(`EBike SG server running at http://localhost:${PORT}`);
});
