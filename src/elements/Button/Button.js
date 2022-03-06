export const Button = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);
