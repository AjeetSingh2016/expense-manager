const ECommerce = [
    'Snapdeal', 'Meesho', 'Amazon', 'Flipkart', 'Croma', 'RelianceDigital', 'VijaySales',
    'Myntra', 'Ajio', 'Nykaa', 'TataCliq', 'Libas', 'reliance retail'
];

const Entertainment = [
    'Netflix', 'Amazon Prime Video', 'Disney+ Hotstar', 'Zee5', 'SonyLIV', 'Voot', 'MXPlayer',
    'ALTBalaji', 'Eros Now', 'Hungama Play', 'JioCinema', 'Hoichoi', 'Sun NXT', 'Xstream',
    'TVF Play', 'TicketNew', 'PVR Cinemas', 'INOX', 'Cinepolis', 'SPI Cinemas',
    'Ticket4u', 'Fastticket', 'Justickets', 'Spotify', 'Apple Music', 'JioSaavn', 'Gaana'
];

const FoodAndGroceries = [
    'Zomato', 'Swiggy', 'Uber Eats', 'Zepto', 'JioMart', 'BigBasket', 'Blinkit', 'Dunzo',
    'KisanKonnect', 'EatSure', "Nature's Basket", 'Country Delight', 'veg', 'cool', 'lassi', 'sharab', 'restaurant', 'nescafe', 'misthan', 'bhandar'
];

const FuelAndGas = [
    'Adani', 'Tata Petrodyne', 'Cairn', 'Oil and Natural Gas Corporation (ONGC)',
    'Reliance Petroleum', 'Essar Petrol Pump', 'Nayara Energy', 'Shell petrol',
    'Indian Oil Corporation (IOCL)', 'Bharat Petroleum Corporation Limited (BPCL)',
    'Hindustan Petroleum Corporation Limited (HPCL)', 'Oil India Limited', 'Synergy Fuels', 'Fuels', 'station'
];

const Healthcare = [
    '1mg', 'Netmeds', 'PharmEasy', 'Medlife', 'Practo', 'MedPlus', 'HealthKart', '1mg',
    'Apollo Pharmacy', 'Cure.fit', 'Myra', 'Medikabazaar', 'MediBuddy', 'DocsApp', 'Easymedico', 'Medical'
];

const HousingAndBills = [
    'bill', 'broadband', 'electricity', 'insurance', 'jio', 'simpl', 'postpaid', 'mvvnl'
];

const TravelsAndHotels = [
    'MakeMyTrip', 'Yatra', 'Goibibo', 'ClearTrip', 'Ixigo', 'EaseMyTrip', 'Booking.com', 'Airbnb',
    'OYO Rooms', 'Treebo Hotels', 'Taj Hotels', 'ITC Hotels', 'Cox & Kings', 'Thomas Cook',
    'Travelmasti', 'Adventure Nation', 'Wildlife Trails', 'FabHotels', 'Treebo Hotels', 'Trivago',
    'Expedia', 'Booking.com', 'Agoda', 'Travelguru', 'SOTC Travel', 'Ola Cabs', 'Uber', 'Meru Cabs',
    'Mega Cabs', 'Fasttrack Taxi App', 'TabCab', 'Jugnoo (Savari India Ki)', 'inDrive', 'Namma Cabs',
    'Sunshine Cabs', 'Pink Cabs', 'YellowCabs', 'IRCTS', 'Redbus'
];

const Banks = ["SBI", "State Bank Of India", "State Bank Of I",'State Bank of India (SBI)',
'Punjab National Bank (PNB)',
'Bank of Baroda (BOB)',
'Canara Bank',
'Union Bank',
'HDFC Bank',
'ICICI Bank',
'Axis Bank',
'IDBI Bank',
'Bank of India (BOI)',
'Indian Bank',
'Central Bank of India',
'Kotak Mahindra Bank',
'Yes Bank',
'IndusInd Bank',
'Federal Bank',
'Punjab & Sind Bank',
'Bank of Maharashtra',
'Karnataka Bank',
'Karur Vysya Bank',
'Paytm']

export function getCategory(inputString) {
    
    if(!inputString){
        return null;
    }
      const dictionaries = [
        { category: "E-Commerce", words: ECommerce },
        { category: "Entertainment", words: Entertainment },
        { category: "Food&Groceries", words: FoodAndGroceries },
        { category: "Fuel&Gas", words: FuelAndGas },
        { category: "Healthcare", words: Healthcare },
        { category: "Housing&Bills", words: HousingAndBills },
        { category: "Travels&Hotels", words: TravelsAndHotels },
        { category: "Banks", words: Banks },
    ];


   const lowerInput = inputString.toLowerCase().replace(/[^\w\s]/g, ''); // Remove non-alphanumeric characters
    const words = lowerInput.split(/\s+/);
    let possibleCategory = null;
    let matchCount = 0;
    
    for (const dict of dictionaries) {
        let currentMatchCount = 0;
        for (const word of words) {
            for (const dictWord of dict.words) {
                if (dictWord.toLowerCase() === word) {
                    currentMatchCount++;
                    if (currentMatchCount > matchCount) {
                        possibleCategory = dict.category;
                        matchCount = currentMatchCount;
                    }
                }
            }
        }
    }

    return possibleCategory;
}
