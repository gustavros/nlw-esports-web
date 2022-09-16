import { GameController } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Ad {
  id: string;
  name: string;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: true;
  weekDays: string;
}

export const AdGame = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/games/${id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {ads.map((ad) => {
        return (
          <div className="text-2xl text-white mb-4 bg-[#2A2634] rounded">
            <h1>Nome: {ad.name}</h1>
            <h2>
              Tempo de jogo:{" "}
              {ad.yearsPlaying > 1
                ? `${ad.yearsPlaying} anos`
                : `${ad.yearsPlaying} ano`}
            </h2>
            <p>
              Disponibilidade: {ad.hourStart}hr - {ad.hourEnd}hr
            </p>
            <p>
              Chamada de áudio?{" "}
              {ad.useVoiceChannel ? (
                <p className="text-green-500">Sim</p>
              ) : (
                <p className="text-red-500">Não</p>
              )}
            </p>

            <button
              type="submit"
              className=" bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors"
            >
              <GameController size={24} />
              Conectar
            </button>
          </div>
        );
      })}
    </>
  );
};
