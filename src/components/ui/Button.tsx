const Button = ({ children }: { children: React.ReactNode }) => {
  const [x, setX] = useState(0);

  return (
    <button
      className=""
      onMouseMove={(e) => setX(e.clientX)}
    >
      {children}
    </button>
  );
};

export default Button;
