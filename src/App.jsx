import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
const App = () => {
  const[questions, setQuestions] = useState(data)

  //console.log(question);
 

  return (
    <main>
      <Questions questions={questions}/>
      
      
    </main>
  )
};
export default App;
