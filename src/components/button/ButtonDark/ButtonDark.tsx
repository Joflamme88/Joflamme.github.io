import './ButtonDark.scss';

interface ButtonDarkProps {
  text: string;
}

function ButtonDark({ text }: ButtonDarkProps) {
  return (
    <a href="/" className="btn-dark">
      {text}
    </a>
  );
}

export default ButtonDark;
