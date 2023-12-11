

export function menuPage() {
    const container = document.getElementById('container')
    const menu = document.createElement('div')
    menu.id = 'menu'
    container.appendChild(menu)

    const menuIcon = document.createElement('div')
    menuIcon.textContent = 'Discover';
    menuIcon.id = 'menuIcon'
    menu.appendChild(menuIcon)

    const menuSmallIcon = document.createElement('div')
    menuSmallIcon.textContent = 'Our Menu'
    menuSmallIcon.id = 'menuSmallIcon'
    menu.appendChild(menuSmallIcon)


    const cardsContainer = document.createElement('div')
    cardsContainer.id = 'cardsContainer'
    menu.appendChild(cardsContainer)


    const breakfastCard = document.createElement('div')
    breakfastCard.id = 'breakfast'
    breakfastCard.className = 'menuCards'
    cardsContainer.appendChild(breakfastCard)


    const lunchCard = document.createElement('div')
    lunchCard.id = 'lunch'
    lunchCard.className = 'menuCards'
    cardsContainer.appendChild(lunchCard)



    const dinnerCard = document.createElement('div')
    dinnerCard.id = 'dinner'
    dinnerCard.className = 'menuCards'
    cardsContainer.appendChild(dinnerCard)

    const drinksCard = document.createElement('div')
    drinksCard.id = 'drinks'
    drinksCard.className = 'menuCards'
    cardsContainer.appendChild(drinksCard)

    const dessertsCard = document.createElement('div')
    dessertsCard.id = 'desserts'
    dessertsCard.className = 'menuCards'
    cardsContainer.appendChild(dessertsCard)

    const breakfastName = document.createElement('div')
    breakfastName.textContent = 'Breakfast'
    breakfastName.className = 'itemTypeHeadings'
    breakfastCard.appendChild(breakfastName)

    const lunchName = document.createElement('div')
    lunchName.textContent = 'Lunch'
    lunchName.className = 'itemTypeHeadings'
    lunchCard.appendChild(lunchName)

    const dinnerName = document.createElement('div')
    dinnerName.textContent = 'Dinner'
    dinnerName.className = 'itemTypeHeadings'
    dinnerCard.appendChild(dinnerName)

    const drinksName = document.createElement('div')
    drinksName.textContent = 'Drinks'
    drinksName.className = 'itemTypeHeadings'
    drinksCard.appendChild(drinksName)

    const dessertsName = document.createElement('div')
    dessertsName.textContent = 'Desserts'
    dessertsName.className = 'itemTypeHeadings'
    dessertsCard.appendChild(dessertsName)


    const itemTypes = {

        breakfast: [],
        lunch: [],
        dinner: [],
        drinks: [],
        desserts: [],
    }


    const createItems = (itemType, itemName, itemPrice) => {
        let item = { itemName, itemPrice }
        itemType.push(item)
    }


    createItems(itemTypes.breakfast, 'Idli', '₹99')
    createItems(itemTypes.breakfast, 'Poha', '₹99')
    createItems(itemTypes.breakfast, 'Upma', '₹99')
    createItems(itemTypes.breakfast, 'Dosa', '₹99')
    createItems(itemTypes.breakfast, 'Besan Chilla', '₹99')
    createItems(itemTypes.breakfast, 'Oats Upma', '₹99')
    createItems(itemTypes.breakfast, 'Sprouts Chaat', '₹99')
    createItems(itemTypes.breakfast, 'Dhokla', '₹99')
    createItems(itemTypes.breakfast, 'Vegetable Pongal', '₹99')
    createItems(itemTypes.breakfast, 'Ragi Dosa', '₹99')


    createItems(itemTypes.lunch, 'Plain Rice', '₹99')
    createItems(itemTypes.lunch, 'Brown Rice', '₹99')
    createItems(itemTypes.lunch, 'Dal Tadka', '₹99')
    createItems(itemTypes.lunch, 'Mushroom Curry', '₹99')
    createItems(itemTypes.lunch, 'Vegetable Biryani', '₹99')
    createItems(itemTypes.lunch, 'Chickpea Salad', '₹99')
    createItems(itemTypes.lunch, 'Methi Thepla with Curd', '₹99')
    createItems(itemTypes.lunch, 'Quinoa Khichdi', '₹99')
    createItems(itemTypes.lunch, 'Baingan Bharta with Whole Wheat Roti', '₹99')
    createItems(itemTypes.lunch, 'Kidney Beans Salad', '₹99')


    createItems(itemTypes.dinner, 'Grilled Fish with Mint Chutney', '₹99')
    createItems(itemTypes.dinner, 'Tandoori Chicken Salad:', '₹99')
    createItems(itemTypes.dinner, 'Vegetable Stir-Fry with Tofu', '₹99')
    createItems(itemTypes.dinner, 'Methi (Fenugreek) Paratha with Raita', '₹99')
    createItems(itemTypes.dinner, 'Cauliflower Rice Biryani:', '₹99')
    createItems(itemTypes.dinner, 'Moong Dal Khichdi', '₹99')


    createItems(itemTypes.drinks, 'Masala Chai', '₹99')
    createItems(itemTypes.drinks, 'Tulsi (Holy Basil) Tea', '₹99')
    createItems(itemTypes.drinks, 'Jeera (Cumin) Water', '₹99')
    createItems(itemTypes.drinks, 'Buttermilk', '₹99')
    createItems(itemTypes.drinks, 'Haldi Doodh', '₹99')
    createItems(itemTypes.drinks, 'Coconut Water ', '₹99')
    createItems(itemTypes.drinks, 'Ginger Lemon Tea ', '₹99')
    createItems(itemTypes.drinks, 'Nimbu Pani ', '₹99')


    createItems(itemTypes.desserts, 'Fruit Chaat', '₹99')
    createItems(itemTypes.desserts, 'Date and Nut Ladoo', '₹99')
    createItems(itemTypes.desserts, 'Saffron and Almond Milk Pudding', '₹99')
    createItems(itemTypes.desserts, 'Coconut Ladoo', '₹99')
    createItems(itemTypes.desserts, 'Roasted Chickpeas with Jaggery', '₹99')
    createItems(itemTypes.desserts, 'Ragi Halwa:', '₹99')

    console.log(itemTypes.desserts)


    const renderItems = (itemType, itemCard) => {
        const itemList = document.createElement('div')
        itemTypes[itemType].forEach(element => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menuItem'

            const itemNameDiv = document.createElement('div')
            itemNameDiv.textContent = element.itemName
            const itemPriceDiv = document.createElement('div')
            itemPriceDiv.textContent = element.itemPrice

            itemDiv.appendChild(itemNameDiv)
            itemDiv.appendChild(itemPriceDiv)
            itemList.appendChild(itemDiv)
            console.log(element.itemName)
        });
        itemCard.appendChild(itemList)
    }

    renderItems("breakfast", breakfastCard)
    renderItems("lunch", lunchCard)
    renderItems("dinner", dinnerCard)
    renderItems("drinks", drinksCard)
    renderItems("desserts", dessertsCard)

}