import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/itemContext";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaArrowAltCircleUp } from "react-icons/fa";

import {firstNames} from '../storage/firstNames'
import {lastNames} from '../storage/lastNames'
import {professions} from '../storage/professions'
import {cities} from '../storage/cities'


export const Results = () => {
  const [copied, setCopied] = useState(false)

  const {
    selectedObject,
    isSubmitted,
    posts, setPosts
  } = useContext(ItemContext);

  const { numberOfPosts, selectedItems } = selectedObject

  const jsonData = JSON.stringify(posts, null, 2)

  const onCopyText = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };


  useEffect(() => {
    // min and max included
    const randomIntFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const getRandomValue = (el) => {
      let randomIndex = randomIntFromInterval(0, 249)

      switch (el) {
        case 'firstName':
          return firstNames[randomIndex];
        case 'lastName':
          return lastNames[randomIndex];
        case 'city':
          return cities[randomIndex];
        case 'profession':
          return professions[randomIndex];
        case 'age':
          const randomAge = randomIntFromInterval(16, 75)
          return randomAge;
        case 'salary':
          const randomSalary = randomIntFromInterval(17500, 75000)
          return randomSalary;

        default:
          break;
      }
    }

    const createPosts = () => {
      for (let index = 0; index < numberOfPosts; index++) {
        let newPost = {}
        selectedItems.forEach(el => {
          const { value } = el
          if (value === 'id') {
            newPost[value] = index + 1
          } else {
            let randomValue = getRandomValue(value)
            newPost[value] = randomValue
          }
        })

        setPosts(posts => [...posts, newPost])
      }
    }

    createPosts()
  }, [isSubmitted])

  if (posts.length === 0) return <section id="results-section"></section>

  return (
    <section id="results-section">
      <div className="copy-info">
        { copied ? <span style={{ color: 'red', visibility: 'visible' }}>Copied.</span> : <span style={{ color: 'red', visibility: 'hidden' }}>Copied.</span> }
      </div>

      <div className="copy-instruction">
        <CopyToClipboard text={jsonData}
            onCopy={onCopyText}
          >
          <div className="all-copy">
            <span>Copy to clipboard</span>
            <FaCopy />
          </div>
        </CopyToClipboard>

      </div>

      {
        posts && <pre id="json">{jsonData}</pre>
      }

    </section>
  )
};
