import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale,  } from 'chart.js'
export default function Grafico() {

    const data = {
        labels: ["Enero", "Ferebrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [
            {
                label: 'Ventas',
                data: [300, 500, 200],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Gráfico de Barras - Ventas por Mes' }
        }
    };


    return (
        <div>Grafico</div>
    )
}
