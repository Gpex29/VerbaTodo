import classNames from "classnames";

interface ButtonProps {
  btn: { text: string; status: string };
  state: string;
  setState: (value: React.SetStateAction<string>) => void;
  count: number;
}

const Button: React.FC<ButtonProps> = ({ btn, state, count, setState }) => {
  return (
    <button
      type="button"
      className={classNames({
        "border-b border-sky-600 p-1 text-slate-100": state === btn.status,
      })}
      onClick={() => setState(btn.status)}
    >
      {`${btn.text}${count !== 0 ? `(${count})`: ''}`}
    </button>
  );
};

export default Button;

