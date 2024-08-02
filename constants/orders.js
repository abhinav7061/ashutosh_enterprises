// Define the status array
export const status = [
    {
        value: 'Delivered',
        title: 'Delivered'
    },
    {
        value: 'Pending',
        title: 'Pending'
    },
    {
        value: 'Processing',
        title: 'Processing'
    },
    {
        value: 'Cancel',
        title: 'Cancel'
    }
];

// Define the orderLimits array
export const orderLimits = [
    {
        value: 'Last 5 days orders',
        title: 'Last 5 days orders'
    },
    {
        value: 'Last 7 days orders',
        title: 'Last 7 days orders'
    },
    {
        value: 'Last 15 days orders',
        title: 'Last 15 days orders'
    },
    {
        value: 'Last 30 days orders',
        title: 'Last 30 days orders'
    }
];

// Define the methods array
export const methods = [
    {
        value: 'Cash',
        title: 'Cash'
    },
    {
        value: 'Card',
        title: 'Card'
    },
    {
        value: 'Credit',
        title: 'Credit'
    }
];

export const bestSellingProductsChartData = {
    labels: ['Cabbage', 'Watermelon', 'Broccoli', 'Maize'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 6, 9],
            backgroundColor: [
                'rgb(0, 16, 163)',
                'rgb(138, 0, 138)',
                'rgb(0, 243, 231)',
                'rgb(243, 130, 0)',
            ],
            borderColor: [
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
            ],
            borderWidth: 1,
        },
    ],
};
