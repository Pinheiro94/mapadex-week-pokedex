const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
console.log(listaSelecaoPokemon)

const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(pokemonsCard)

listaSelecaoPokemon.forEach(pokemon =>{
    
    pokemon.addEventListener('click', () =>{
    
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado )
        cartaoPokemonParaAbrir.classList.add('aberto')

        //Remover a classe ativo que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')


        //Adcionar a classe ativo que marca o pokemon selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })

})