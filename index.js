const POKEAPI = "https://pokeapi.co/api/v2/";

let pokemon_data;

const pokemoncontainer = document.querySelector('#pokemoncontainer')


const renderpokemon = () => {
  const pokemontemplate =
    <div className="pokemon">
      <span>ID:'${pokemon_data.id}'</span>
      <h3>'${pokemon_data.name}'</h3>;
      <img src='${pokemon_data.image}' alt='${pokemon_data.name}' />
    </div>

  pokemoncontainer.innerHTML += pokemontemplate;
}


const search_url = `${POKEAPI}pokemon/ditto`;
fetch(search_url)
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    pokemon_data = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_default
    }

    renderpokemon(response)
  })





