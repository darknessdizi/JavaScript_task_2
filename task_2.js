const productCatalog = [
	{
	   id: 1,
	   name: "шорты светлые",
	   description: "made in China",
	   sizes: ["S", "X", "XX", "XXL",],
	   price: 800,
	   avalable: "В наличии",
	},
	{
	   id: 2,
	   name: "футболка",
	   description: "made in China",
	   sizes: ["S", "X", "XX", "XXL",],
	   price: 300,
	   avalable: "В наличии",
	},
	{
	   id: 3,
	   name: "куртка летняя",
 	   description: "made in Russia",
	   sizes: ["M", "XX",],
	   price: 1500,
	   avalable: "В наличии",
	},
	{
	   id: 4,
	   name: "штаны",
	   description: "made in Russia", 
	   sizes: ["S", "M", "XX",],
	   price: 1000,
	   avalable: "В наличии",
	},
	{
	   id: 5,
	   name: "кепка",
	   description: "made in China",
	   sizes: ["50", "52", "56", "60",],
	   price: 300,
	   avalable: "В наличии",
	},
]

const basket = [
	{
	   good: productCatalog[2].id,
	   amount: 4,
	},
	{
	   good: productCatalog[3].id,
	   amount: 2,
	},
]


function addProduct(number, quantity) {
	for (let i = 0;; i++) {
		if (productCatalog[i].id == number) {
            for (let y = 0;; y++) {
                if (basket.length == y) {
                    basket.push({
                        good: productCatalog[i].id,
                        amount: quantity,
                    })
                    console.log("Элемент", number, "добавлен в корзину")
                    break
                }
                if (basket[y].good == number) {
                    basket[y].amount += quantity
                    console.log("Элемент", number, "обновлен в корзине")
                    break
                }
            }
            break
		}
	}
}


function deleteProduct(number) {
	for (let i = 0;; i++) {
		if (basket[i].good == number) {
			basket.splice(i, 1)
            console.log("Элемент", number, "удален из корзины")
			break
		}
		if (i == basket.length - 1) {
			console.log("Элемент", number, "отсутствует в корзине")
			break
		}
	
	}
}


function deleteAllProduct() {
    basket.splice(0, basket.length)
    console.log("Корзина очищена")
}


function totalProduct() {
	const items = {
		totalAmount: 0,
		totalSum: 0,
	}
	for (let i=0; i < basket.length; i++) {
        for (let y = 0;y < productCatalog.length; y++) {
            if (basket[i].good == productCatalog[y].id) {
                items.totalAmount += basket[i].amount
                items.totalSum += productCatalog[y].price * basket[i].amount
            } 
        }
	}
    return items
}


addProduct(2, 5)
addProduct(5, 4)
addProduct(5, 21)
addProduct(3, 210)
console.log("Наша корзина:", basket)
deleteProduct(3)
deleteProduct(7)
console.log("Наша корзина:", basket)
// deleteAllProduct()
// console.log("Наша корзина:", basket)
const allElements = totalProduct()
console.log("Общее количество и стоимость", allElements)