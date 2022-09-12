interface TextProps {
  text: string;
}

export const App = () => {
  return (
    <>
      <Button text="Enviar" />
      <Button text="Confirmar" />
      <Button text="Cancelar" />
    </>
  );
};

export const Button = ({ text }: TextProps) => {
  return <button>{text}</button>;
};
