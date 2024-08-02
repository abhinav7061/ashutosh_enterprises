const treeData = [
    {
        title: 'Home',
        key: '0',
        children: [
            {
                title: 'Art Supplies',
                key: '0-0'
            },
            {
                title: 'Travelforhealth',
                key: '0-1'
            },
            {
                title: 'Fish & Meat',
                key: '0-2',
                children: [
                    {
                        title: 'Fish',
                        key: '0-2-0'
                    },
                    {
                        title: 'Meat',
                        key: '0-2-1',
                        children: [
                            {
                                title: 'Beef',
                                key: '0-2-1-0'
                            }
                        ]
                    },
                ],
            },
            {
                title: 'Fruits & Vegetable',
                key: '0-3',
            },
        ],
    },
];

export default treeData;