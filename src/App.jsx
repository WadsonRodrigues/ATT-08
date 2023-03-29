import { useEffect, useState } from 'react';
import './App.css';
import updateGreeting from './componentes/updateGreeting.jsx';
import updateTime from './componentes/updateTime.jsx';

const App = () => {
  let myName = 'Fulano';

  const [phrase, setPhrase] = useState('');
  const [phraseAuthor, setPhraseAuthor] = useState('');

  useEffect(() => {
    const getPhrase = async () => {
      const req = await fetch('https://allugofrases.herokuapp.com/frases/random');
      const json = await req.json();
      setPhrase(json.frase);
      setPhraseAuthor(json.autor);
    }
    getPhrase();
  }, []);

  return (
    <div className="App">
      <div className="top"></div>
      <div className="middle">
        <updateTime/>
        <updateGreeting/>
      </div>
      <div className="bottom">
        <div className="phrase">
          "{phrase}"
          <div className="author">{phraseAuthor}</div>
        </div>
      </div>
    </div>
    
  );
}


export default App;