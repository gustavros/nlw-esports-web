import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export const CreateAdBanner = () => {
  return (
    <div className="pt-1 bg-gradient__main self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center md:flex-col ">
        <div>
          <strong className="text-2xl text-white font-black">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors flex items-center gap-3 md:mt-8">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};
