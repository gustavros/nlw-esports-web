import * as Dialog from "@radix-ui/react-dialog";

import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "../components/Form/Input";

interface Ad {
  id: string;
  name: string;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: true;
  weekDays: string;
}

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
}

export const AdGame = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/games/${id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3333/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col my-2">
        {games.map((game) => {
          {
            return (
              <div
                key={game.id}
                className="flex flex-col items-center justify-center p-2"
              >
                <img src={game.bannerUrl} alt="" />
                <h1 className="text-5xl font-bold text-zinc-200 drop-shadow-lg mt-7">
                  {game.title}
                </h1>
                <p className="text-zinc-400 text-2xl text-center">
                  Conecte-se e comece a jogar!
                </p>
              </div>
            );
          }
        })}

        <div className="flex md:flex-col">
          {ads.length > 0 ? (
            ads.map((ad) => {
              return (
                <div
                  className="text-2xl text-white mb-4 bg-[#2A2634] rounded-lg p-5 flex flex-col gap-4 m-4 w-[20rem]"
                  key={ad.id}
                >
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
                    <div className="flex xl:flex-col">
                      {ad.weekDays.length > 1 ? (
                        <strong className="mr-1">
                          {ad.weekDays.length} dias •
                        </strong>
                      ) : (
                        <strong className="mr-1">
                          {ad.weekDays.length} dia •
                        </strong>
                      )}{" "}
                      <span>
                        <span>{ad.hourStart}hrs</span> -
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
            })
          ) : (
            <Dialog.Root>
              <div className="h-full flex flex-col justify-center items-center gap-4 m-auto mt-4">
                <h1 className="text-4xl font-bold text-white/75 text-center mx-2">
                  Nenhum anúncio encontrado, públique um agora mesmo!
                </h1>

                <Dialog.Portal>
                  <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

                  <Dialog.Content className="fixed bg-[#2A2634] p-4 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg  shadow-lg shadow-black/25 flex flex-col justify-center">
                    <Dialog.Title className="text-3xl  font-black">
                      Públique um anúncio!
                    </Dialog.Title>

                    <form className="mt-8 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">
                          Qual o game?
                        </label>

                        <Input
                          id="game"
                          placeholder="Selecione o game que deseja jogar"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Como te chamam dentro do game?"
                        />
                      </div>

                      <div className="grid grid-cols2 gap-6">
                        <div className="grid grid-cols-2 gap-6 ">
                          <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="discord">Qual seu discord?</label>
                            <Input
                              type="text"
                              id="discord"
                              placeholder="Usuario#0000"
                            />
                          </div>
                          <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="yearsPlaying">
                              Joga há quantos anos?
                            </label>
                            <Input
                              type="number"
                              id="yearsPlaying"
                              placeholder="Tudo bem ser ZERO"
                            />
                          </div>
                        </div>

                        <div className="flex gap-6">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">
                              Quando costuma jogar?
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Domingo"
                              >
                                D
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Segunda"
                              >
                                S
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Terça"
                              >
                                T
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Quarta"
                              >
                                Q
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Quinta"
                              >
                                Q
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Sexta"
                              >
                                S
                              </button>
                              <button
                                className="w-8 h-8 rounded bg-zinc-900 "
                                title="Sábado"
                              >
                                S
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">
                              Qual horário do dia?
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <Input
                                type="time"
                                id="hourStart"
                                placeholder="De"
                              />
                              <Input
                                type="time"
                                id="hourEnd"
                                placeholder="De"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 flex gap-2 text-sm">
                        <Input type="checkbox" />
                        Costumo me conectar ao chat de voz
                      </div>
                      <footer className="mt-4 flex justify-end gap-4">
                        <Dialog.Close className=" bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors">
                          Cancelar
                        </Dialog.Close>
                        <button
                          type="submit"
                          className=" bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors"
                        >
                          <GameController size={24} />
                          Encontrar duo
                        </button>
                      </footer>
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>

                <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors flex items-center gap-3 md:mt-8">
                  <MagnifyingGlassPlus size={24} />
                  Publicar anúncio
                </Dialog.Trigger>
              </div>
            </Dialog.Root>
          )}
        </div>
      </div>
    </>
  );
};
