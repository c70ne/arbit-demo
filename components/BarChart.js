import { Bar } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart({id, cardData}) {

    const thisCard = cardData.findIndex(index => index.id === id)

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                padding: 12,
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || ''

                        if (label) {
                            label += ': '
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { 
                                style: 'currency', 
                                currency: 'USD',
                                currencyDisplay: 'code'
                            }).format(context.parsed.y)
                        }
                        return label;
                    }
                }
            }
        },
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                ticks: {
                    count: 5,
                    callback: function(value) {
                        return '$' + value.toLocaleString('en-US')
                    }
                }
            }
        }
    }
    
    const data = {
        datasets: [
            {
                label: cardData[thisCard].dexTitle,
                data: cardData[thisCard].dexData,
                backgroundColor: [
                    'rgba(208,200,179,0.6)', 
                    'rgba(202, 208, 179,0.6)', 
                    'rgba(188,208,179,0.6)'
                ],
                borderColor: [
                    'rgb(208,200,179)', 
                    'rgb(202, 208, 179)', 
                    'rgb(188,208,179)'
                ],
                borderWidth: 1.5
            }
        ],
        labels: cardData[thisCard].dateLabels
    }

    return (
        <Bar
            id={id}
            options={options} 
            data={data}
            style={{ height: '170px' }}
        />
    )
}