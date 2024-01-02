import { IPokemon } from "../interface";
import PokemonType from "./PokemonTypes";

function PokemonArticle({ pokemon }: { pokemon: IPokemon }) {
  return (
    <article key={pokemon.id} className="pokes__article">
      <div className="pokes__img-container">
        <img className="pokes__img" src={pokemon.imgSrc} alt={pokemon.name} />
      </div>
      <p className="pokes__tag">#{pokemon.id.toString().padStart(4, "0")}</p>
      <h2 className="pokes__name">{pokemon.name}</h2>
      <PokemonType types={pokemon.types} />
    </article>
  );
}

export default PokemonArticle;
