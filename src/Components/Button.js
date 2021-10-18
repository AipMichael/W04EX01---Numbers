import "./button.css";

function Button({ text /* operation */ }) {
  return (
    <button className={`button__${text}`} /* onClick={operation} */>
      {text}
    </button>
  );
}

export default Button;
