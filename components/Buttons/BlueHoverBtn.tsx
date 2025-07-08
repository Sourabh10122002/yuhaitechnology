interface Props {
  text: string;
}

const BlueHover: React.FC<Props> = ({ text }) => {
  return (
    <button className="btn_one">
      {text}
    </button>
  );
};

export default BlueHover;
