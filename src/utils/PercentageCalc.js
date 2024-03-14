export function calculatePercentage(...args) {
    const categories = ['E-Commerce', 'Entertainment', 'Food&Groceries', 'Fuel&Gas', 'Healthcare', 'Housing&Bills', 'Travels&Hotels', 'Unknown'];
    const total = args.reduce((acc, curr) => acc + curr, 0);
    
    const percentages = {};
    categories.forEach((category, index) => {
        let percentage = (args[index] / total) * 100;
        if (percentage > 0.2 && percentage < 1) {
            percentage = 1;
        } else {
            percentage = Math.round(percentage);
        }
        percentages[category] = percentage;
    });

    const dataArray = Object.entries(percentages).map(([key, value]) => {
        const obj = {};
        obj[key] = value;
        return obj;
    });

    dataArray.sort((a, b) => {
        const valueA = Object.values(a)[0];
        const valueB = Object.values(b)[0];
        return valueB - valueA; // Sort in decreasing order
    });

    return dataArray;
}