import { useEffect, useState } from "react";
import { IPokedex } from "./interface";
import PokemonArticle from "./components/PokemonArticle";
import { api } from "@/api";

function Home() {
  const [pokedex, setPokedex] = useState<IPokedex | null>(null);

  useEffect(() => {
    api.get<{ data: IPokedex }>("/pokemons").then(({ data }) => {
      setPokedex(data.data);
    });
  }, []);

  return (
    <section className="pokes">
      {pokedex?.results.map((pokemon) => (
        <PokemonArticle key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default Home;
