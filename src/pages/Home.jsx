import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setPokemon(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container">
      <h1>Pokémon Explorer</h1>
      <div className="grid">
        {pokemon.map((p) => {
          const id = p.url.split("/")[6];
          return (
            <Link to={`/pokemon/${id}`} key={id} className="card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={p.name}
              />
              <h3>{p.name}</h3>
              <span>#{id}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;