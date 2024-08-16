import { useEffect, useState } from "react";
import close from "../../assets/images/close.png";
import "./FunFact.css";

const FunFact = ({ setActiveChildView }) => {
  const [funFactText, setFunFactText] = useState("");

  useEffect(() => {
    /**Function to fetch number facts for numbers 0 to 9 from the API */
    const fetchNumberFacts = async () => {
      try {
        const numberFacts = [];
        /**Loop through numbers 0 to 9 and fetch their corresponding facts */
        for (let i = 0; i <= 9; i++) {
          const response = await fetch(`http://numbersapi.com/${i}`);
          if (response.ok) {
            const data = await response.text();
            numberFacts.push(data);
          } else {
            throw new Error("Failed to fetch data");
          }
        }
        /**Set the fetched number facts as a random fact */
        setFunFactText(
          numberFacts[Math.floor(Math.random() * numberFacts.length)]
        );
      } catch (error) {
        console.error("Error fetching number facts:", error);
      }
    };

    /**Call the fetchNumberFacts function when the component mounts */
    fetchNumberFacts();
  }, []);

  return (
    <div className="funFact">
      <div className="funFact-container">
        <div className="funFact-title">
          <div className="funFact-text">
            <h2>FUN FACT</h2>
          </div>
        </div>
        <div className="funFact-paragraph">
          <h2>{funFactText}</h2>
        </div>
        <div className="funFact-close">
          <span onClick={() => setActiveChildView("MENU")}>
            <img src={close} className="img-fluid" alt="close" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
