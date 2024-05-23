const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.post('/invoices', async (req, res) => {
    const invoiceData = req.body;
    const invoice = await prisma.invoice.create({ data: invoiceData });
    res.json(invoice);
});

app.get('/invoices', async (req, res) => {
    const invoices = await prisma.invoice.findMany();
    res.json(invoices);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
