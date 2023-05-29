import React from 'react';
import useNavigation from '../../hooks/use-navigation';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const BlindCreditCard = () => {
  const {navigate} = useNavigation();
  const { transcript, resetTranscript } = useSpeechRecognition();


  const handleNavigation = (section) => {
    speak(`Navigating to ${section}`);
    navigate(`/blind${section}`)
  };

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

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">CreditCard</h1>
      <div className="flex  items-center gap-8">
        <button
          onClick={() => handleNavigation('mycreditcard')}
          onFocus={() => speak('You are now on My Credit Card button')}
          className="text-4xl bg-white text-black px-8 py-4 rounded"
        >
          My Credit Card
        </button>
        <button
          onClick={() => handleNavigation('applyforcreditcard')}
          onFocus={() => speak('You are now on Apply for Credit Card Button')}
          className="text-4xl bg-white text-black px-8 py-4 rounded"
        >
          Apply for Credit Card
        </button>
      </div>
    </div>
  );
};
export default BlindCreditCard;