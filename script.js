const listaProdutos = document.querySelector(".ul-container")

function listarProdutosTotal(listaProduto){

        for(let i = 0; i < listaProduto.length; i++){
            const produto = listaProduto[i]
            const cardObjects = criarCardProdutos(produto)
            listaProdutos.appendChild(cardObjects)
        }
}

listarProdutosTotal(data_base)
 






function criarCardProdutos(produto){

    const nome = produto.nome
    const valor = produto.valor
    const imagem = produto.imagem

    const tagImg = document.createElement("img")
    const tagLi = document.createElement("li")
    const tagDIV = document.createElement("div")
    const tagFigure = document.createElement("figure")
    const titleProduct = document.createElement("p")
    const price = document.createElement("p")




//tags do objeto

    tagImg.src = `./m1-entrega-javascript-lojageek-felipemaybe-master/imagens-produtos/${imagem}`
    tagImg.alt = nome

    
    titleProduct.innerHTML = `<strong>${nome}</strong>`
    

    price.innerHTML = `R$ ${valor}`
    

//virando filha da tag-pai

    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagFigure)

        tagDIV.classList.add("container-description")
        

        tagDIV.appendChild(titleProduct)
        tagDIV.appendChild(price)
        tagLi.appendChild(tagDIV)

        
       
        return tagLi

        
       
}





