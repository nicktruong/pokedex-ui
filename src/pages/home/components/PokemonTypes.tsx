import { isDark, typeToColorMapper } from "@/utils/helpers";
import { IPokemon } from "../interface";

function PokemonType({ types }: { types: IPokemon["types"] }) {
  return (
    <div className="pokes__types">
      {types.map((type) => {
        const [color1, color2 = color1]: string[] = typeToColorMapper.get(
          type
        ) ?? [""];

        return (
          <span
            key={type}
            className="pokes__type"
            style={{
              background: `linear-gradient(180deg, ${color1} 50%, ${color2} 50%)`,
              color: `${isDark(color1) ? "#ffffff" : "#000000"}`,
            }}
          >
            {type}
          </span>
        );
      })}
    </div>
  );
}

export default PokemonType;
