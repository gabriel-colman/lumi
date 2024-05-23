import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

const App = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/invoices');
            setInvoices(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.id}>
                        Cliente: {invoice.clientNumber} - Mês: {invoice.referenceMonth}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
