import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Pokemon not found");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container detail">
      <Link to="/" className="back">← Back</Link>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <p><b>Height:</b> {pokemon.height}</p>
      <p><b>Weight:</b> {pokemon.weight}</p>
      <p>
        <b>Types:</b> {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>
      <p>
        <b>Abilities:</b>{" "}
        {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </p>
    </div>
  );
}

export default Detail;