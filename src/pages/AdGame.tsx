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
      <div className="flex">
        {ads.map((ad) => {
          return (
            <div className="text-2xl text-white mb-4 bg-[#2A2634] rounded-lg max-w-[25rem] p-5 flex flex-col gap-4 m-4">
              <div>
                <h1 className="text-[#C4C4C6]">Nome</h1>
                <strong>{ad.name}</strong>
              </div>
              <div>
                <h1 className="text-[#C4C4C6]">Tempo de jogo</h1>
                {ad.yearsPlaying > 1 ? (
                  <strong>{ad.yearsPlaying} anos</strong>
                ) : (
                  <strong>{ad.yearsPlaying} ano</strong>
                )}
              </div>
              <div className="w-full">
                <h1 className="text-[#C4C4C6]">Disponibilidade</h1>
                <div className="flex">
                  {ad.weekDays.length > 1 ? (
                    <strong className="mr-1 ">{ad.weekDays.length} dias</strong>
                  ) : (
                    <strong className="">{ad.weekDays.length} dia</strong>
                  )}{" "}
                  •{" "}
                  <span className="ml-1">
                    <span>{ad.hourStart}hrs </span>-
                    <span> {ad.hourEnd}hrs</span>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-[#C4C4C6]">Chamada de áudio?</h1>
                {ad.useVoiceChannel ? (
                  <p className="text-green-500">Sim</p>
                ) : (
                  <p className="text-red-500">Não</p>
                )}
              </div>
              <button
                type="submit"
                className=" bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors w-fit"
              >
                <GameController size={24} />
                Conectar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
