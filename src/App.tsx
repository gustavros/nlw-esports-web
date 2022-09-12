export const App = () => {
  return (
    <>
      <Button text="Enviar" />
      <Button text="Confirmar" />
      <Button text="Cancelar" />
    </>
  );
};

interface TextProps {
  text: string;
}

export const Button = ({ text }: TextProps) => {
  return <button>{text}</button>;
};
