const button = document.getElementById('buttonConverter')
const para = document.getElementById('para') //pegar o select

const dolar = 0.20
const euro = 0.18
const bitcoin = 0.00000719

const funcao = () =>{

    const inputIn = document.getElementById('inputIn').value //valor digitado no input
    
    const valorIn = document.getElementById('valorIn') //valor do real que vai aparecer na tela

    valorIn.innerHTML =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputIn)

    const valorOut = document.getElementById('valorOut') //valor da conversão que vai aparcer na tela

    const img = document.getElementById('imgBandeira') //imagem da bandeira que vai alterar

    const pOut = document.getElementById('pOut')

    if (para.value === `dolar`) {
        valorOut.innerHTML =  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputIn * dolar)
        img.src="./assets/estados-unidos.svg"
        pOut.innerHTML = `$ Dólar Americano`
    }

    if (para.value === `euro`) {
        valorOut.innerHTML =  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputIn * euro)
        img.src="./assets/euro.svg"
        pOut.innerHTML = `Euro €`
    }

    if (para.value === `bitcoin`) {
        valorOut.innerHTML =  (inputIn * bitcoin)
        img.src="./assets/bitcoin.svg"
        pOut.innerHTML = `Bitcoin`
    }
    
}

button.addEventListener('click',funcao)
para.addEventListener('change',funcao)