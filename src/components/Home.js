import { memo } from "react";
// import { ItemContext } from "../contexts/itemContext";
import { ItemProvider } from "../contexts/itemProvider";
import { Header } from "./Header";
import { Results } from "./Results";
import { Selector } from "./Selector";

export const Home = () => {
  return (
    <ItemProvider>
      <HomeContent />
    </ItemProvider>
  );
};

const HomeContent = memo(() => {
  // const { items } = useContext(ItemContext);

  return (
    <div className="outer-container">
      <Header />
      <div className="inner-container">
        <Selector />
        <Results />
      </div>
    </div>
  );
});

// const ListItem = ({item}) => {
//   return (
//     <li className="list-item">
//       {item}
//     </li>
//   )
// }