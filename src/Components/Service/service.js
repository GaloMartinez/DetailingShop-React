
const products = [
    { id: '1',type: 'shampoo' ,title: 'Shampoo Supreme', description: 'verde', price: '800', pictureUrl: "/img/Shampoo01.jpeg" },
    { id: '2', type: 'shampoo' ,title: 'Shampoo HyperBlack', description: 'verde', price: '800', pictureUrl: "/img/hyperblack.jpeg" },
    { id: '3', type: 'shampoo' , title: 'Shampoo Elite', description: 'verde', price: '800', pictureUrl: "/img/elite.jpeg" },
    { id: '4', type: 'ceras' , title: 'Cera 1', description: 'verde', price: '800', pictureUrl: "/img/ilussionwax.jpeg" },
    { id: '5', type: 'ceras' , title: 'Cera 2', description: 'verde', price: '800', pictureUrl: "/img/watermelon.jpeg" },
    { id: '6',type: 'ceras' , title: 'Cera 3', description: 'verde', price: '800', pictureUrl: "/img/cherryquick.jpeg" },
]

export function GetProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(products)
        }, 2000)
    })
}



export function GetProductFilter(type){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFilter = products.filter((product) => {
                if(product.type === type){
                    return product;
                }
            }); //filtro con el ID y que me devuelva ese ID product
            resolve(productsFilter);
        }, 2000)
    })

}


export function GetItem(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsFilter = products.filter(productoFiltrado => productoFiltrado.id === id) //filtro con el ID y que me devuelva ese ID product
          
            
            resolve(productsFilter[0])

        }, 2000)
    })
}

