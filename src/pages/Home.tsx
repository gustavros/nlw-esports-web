import logo from "../assets/logo.svg";

import { GameBanner } from "../components/GameBanner";
import { CreateAdBanner } from "../components/CreateAdBanner";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "../components/Form/Input";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <div
      className="max-w-[1344px]  flex flex-col items-center 
    my-20 mx-auto px-4"
    >
      <img src={logo} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-gradient__main bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 lg:grid-cols-2">
        {games.map((game) => {
          return (
            <Link
              to={`games/${game.id}/ads`}
              key={game.id}
              className="rounded-b-lg overflow-hidden"
            >
              <GameBanner
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            </Link>
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2A2634] p-4 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-h-[70vw] shadow-lg shadow-black/25">
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
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input
                      type="number"
                      id="yearsPlaying"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
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
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="time" id="hourStart" placeholder="De" />
                      <Input type="time" id="hourEnd" placeholder="De" />
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
      </Dialog.Root>
      <footer className="mt-8 text-1xl text-white ">
        <h1>
          Criado com <span className="text-red-400">❤</span> por{" "}
          <a
            className="text-violet-400"
            href="https://github.com/gustavros"
            target={"_blank"}
          >
            Gustavo Santana
          </a>
        </h1>
      </footer>
    </div>
  );
};
