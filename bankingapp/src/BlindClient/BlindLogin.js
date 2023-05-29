import useNavigation from "../hooks/use-navigation";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function BlindLogin(){

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate}= useNavigation();
  const { transcript, resetTranscript } = useSpeechRecognition();

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  const SpeechToText = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();
  
    const handleSpeechRecognition = () => {
      SpeechRecognition.startListening();
    };
  
    const handleStopSpeechRecognition = () => {
      SpeechRecognition.stopListening();
    };
  
    return (
      <div>
        <button onClick={handleSpeechRecognition}>Start Listening</button>
        <button onClick={handleStopSpeechRecognition}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset Transcript</button>
        <p>{transcript}</p>
      </div>
    );
  };
 const login = () =>{
  if(username==="hello" && password==='1000'){
            navigate('/Homepage');
  }
 }

  return(  <div>
            <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => speak('You are now on Username')}
            />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => speak('You are now on Password')}
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
          onClick={login}
          onFocus={() => speak('You are now on Login button')}
          className="text-4xl bg-white text-black px-8 py-4 rounded"
        >
          Login
        </button>
          </div>
  )
}

export default BlindLogin;