import { useState } from "react";
import { ItemContext } from "./itemContext";

export const ItemProvider = ({ children }) => {
  const items = [
    "id",
    "firstName",
    "lastName",
    "profession",
    "city",
    "age",
    "salary",
  ];

  const options = [
    { value: "id", label: "ID" },
    { value: "firstName", label: "First Name" },
    { value: "lastName", label: "Last Name" },
    { value: "profession", label: "Profession" },
    { value: "city", label: "City" },
    { value: "age", label: "Age" },
    { value: "salary", label: "Salary" }
  ];

  const [selectedObject, setSelectedObject] = useState({});
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleReset = () => {
    setSelectedItems([])
    setNumberOfPosts(0)
    setPosts([])
    setSelectedObject({})
    setIsSubmitted(false)
  }

  return (
    <ItemContext.Provider
      value={{
        options,
        items,
        selectedObject, setSelectedObject,
        numberOfPosts, setNumberOfPosts,
        selectedItems, setSelectedItems,
        isSubmitted, setIsSubmitted,
        posts, setPosts,
        handleReset
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
