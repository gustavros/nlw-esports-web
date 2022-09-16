interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="" className="relative">
      <img src={props.bannerUrl} alt="Imagem de um jogo" />

      <div className="w-full pt-16 pb-4 px-4 bg-gradient__game absolute bottom-0 left-0 right-0 ">
        <strong className="font-bold text-white block ">{props.title}</strong>
        <span
          className="text-zinc-300 text-small block
    "
        >
          {props.adsCount > 1
            ? `${props.adsCount} anúncios`
            : `${props.adsCount} anúncio`}
        </span>
      </div>
    </a>
  );
};
