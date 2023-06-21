import './ButtonLight.scss';

interface ButtonLightProps {
  text: string;
}

function ButtonLight({ text }: ButtonLightProps) {
  return (
    <a href="/" className="btn-light">
      {text}
    </a>
  );
}

export default ButtonLight;
