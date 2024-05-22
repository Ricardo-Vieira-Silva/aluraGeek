import { servicesProducts } from "../servicos/produtos-servicos.js";

const produtoContainer  = document.querySelector("[data-produtos]");
const formulario = document.querySelector("[data-formulario]");

function createElement(name, preco, image, id) {
    const produto__card = document.createElement("div");
    produto__card.classList.add("produto__card");

    produto__card.innerHTML = `<div class="produto__card__img">
        <img src="${image}"  alt="${name}">
        </div>
        <div class="produto__card__infor">
        <p>R$ ${preco}</p>
        <p>${name}</p>
        <button class="button__delete" data-id="${id}">
        <img src="./imagens/jogando-lixo.png" alt="excluir Figura" >
        </button>
      </div>`;

   produtoContainer.appendChild(produto__card);
   return produto__card;
}

const renderizar = async () => {
    try {
    const listProduct = await servicesProducts.productList();
    console.log('Produtos recebidos:', listProduct);

    produtoContainer.innerHTML = '';
    listProduct.forEach(produto => {
        produtoContainer.appendChild(
            createElement(produto.name, produto.preco, produto.image, produto.id)
        );
    });

    } catch (error) {
      console.log(error);
    }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const preco = document.querySelector("[data-preco]").value;
  const imagem = document.querySelector("[data-imagem]").value;

  console.log('Dados do novo produto:', { name, preco, imagem });

  servicesProducts
  .createProduct(name, preco, imagem)
  .then((res) => {
     console.log(res);
     renderizar();
  })
  .catch((err) => console.log(err));
});

renderizar();




