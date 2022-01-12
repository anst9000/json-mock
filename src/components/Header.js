import { useContext } from "react";
import { ItemContext } from "../contexts/itemContext";

export const Header = () => {
  const {
    handleReset
  } = useContext(ItemContext);

  return (
    <div className="header">
      <button onClick={handleReset}>Reset</button>
      <h1>JSON Mock</h1>
    </div>
  )
}
