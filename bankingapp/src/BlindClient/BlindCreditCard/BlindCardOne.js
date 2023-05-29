import React from 'react';
import useNavigation from '../../hooks/use-navigation';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import PaymentContext from '../../Context/paymentContext';

const BlindCardOne = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { navigate } = useNavigation();

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

  // Function to speak the text when component renders
  React.useEffect(() => {
    speak('Credit Card 1. Full Name: Ahmed Labib. Card Number: 1234 1234 1234 3455. Expiration Date: 12/2027. CVC: 321. Credit Limit: $5000. Remaining Credit: $1000.');
  }, []);

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-8">
        <div>
          <h2 className="text-5xl font-bold mb-4">CreditCard 1</h2>
          <p className="text-lg mb-2">Full Name: Ahmed Labib</p>
          <p className="text-lg mb-2">Card Number: 1234 1234 1234 3455</p>
          <p className="text-lg mb-2">Expiration Date: 12/2027</p>
          <p className="text-lg mb-2">CVC: 321</p>
          <p className="text-lg mb-2">Credit Limit: $5000</p>
          <p className="text-lg mb-2">Remaining Credit: $1000</p>
        </div>
      </div>
    </div>
  );
};

export default BlindCardOne;
