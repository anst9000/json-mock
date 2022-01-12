import { useContext } from "react";
import { ItemContext } from "../contexts/itemContext";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const Selector = () => {
  const {
    options,
    setSelectedObject,
    numberOfPosts, setNumberOfPosts,
    selectedItems, setSelectedItems,
    setIsSubmitted,
} = useContext(ItemContext);

  const clearInput = () => {
    setNumberOfPosts(0)
    setSelectedItems([])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberOfPosts < 1) return

    setNumberOfPosts(numberOfPosts);

    selectedItems.forEach(opt => {
      setSelectedItems(selectedItems => [...selectedItems, opt.value])
    })

    setIsSubmitted(true)

    setSelectedObject({
      "numberOfPosts": numberOfPosts,
      "selectedItems": selectedItems
    })

    clearInput()
  }

  const handleChange = (item) => {
    setSelectedItems(item)
  }

  return (
    <section id="selector-section">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="posts">Nr of posts:</label>
          <input
            className="form-item-input"
            type="number"
            autoFocus
            min="1"
            name="posts"
            id="posts"
            value={numberOfPosts}
            onChange={(e) => { setNumberOfPosts(e.target.value) }}
          />
        </div>

        <div className="form-item">
          <label htmlFor="items">Select items:</label>
          <Select
            className="form-item-select"
            name="items"
            closeMenuOnSelect={false}
            components={animatedComponents}
            value={selectedItems}
            isClearable
            isMulti
            options={options}
            onChange={(option) => handleChange(option)}
          />
        </div>
        <button type="submit">Create Posts</button>
      </form>
    </section>
  );
};
