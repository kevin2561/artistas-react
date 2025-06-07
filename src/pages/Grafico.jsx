import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.register(ArcElement, Tooltip, Legend)
export default function Grafico() {

    const data = {
        labels: ["Enero", "Ferebrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [
            {
                label: 'Ventas',
                data: [300, 500, 200, 500, 600, 800, 900, 1000],
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
        <>

            {/* grafico barra */}

            <div className='w-screen h-250'>
                <Bar data={data} options={options} />

            </div>
            {/* grafico circular */}
            <div className='w-screen h-250'>
                <Pie data={data} options={options} />
            </div>

        </>
    )
}
