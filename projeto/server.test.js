const request = require('supertest');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json()); // isso permite que o Express entenda JSON

app.post('/invoices', async (req, res) => { // rota para criar uma nova fatura
    const invoiceData = req.body; // pega os dados da requisição
    const invoice = await prisma.invoice.create({ data: invoiceData }); // cria a fatura no banco de dados
    res.json(invoice);
});

// rota para listar todas as faturas
app.get('/invoices', async (req, res) => {
    const invoices = await prisma.invoice.findMany();
    res.json(invoices);
});

// rota para listar uma fatura específica
describe('POST /invoices', () => {
    it('should create a new invoice', async () => {
        const res = await request(app)
            .post('/invoices')
            .send({
                clientNumber: '12345',
                referenceMonth: 'May/2024',
                energyConsumedKwh: 150,
                energyConsumedValue: 200.50,
                sceeeKwh: 50,
                sceeeValue: 30.25,
                compensatedEnergyKwh: 20,
                compensatedEnergyValue: 15.00,
                publicLightingContribution: 5.00
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });
});

describe('GET /invoices', () => {
    it('should return all invoices', async () => {
        const res = await request(app).get('/invoices');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
