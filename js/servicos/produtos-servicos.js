const productList = () => {
    return fetch("http://localhost:3000/produtos")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const createProduct = (name, preco, image) => {
    return fetch("http://localhost:3000/produtos" , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            name,
            preco,
            image,
        })
    })
     .then((res) => res.json())
     .catch((err) => console.log(err));
}

export const servicesProducts = {
    productList,
    createProduct,
};