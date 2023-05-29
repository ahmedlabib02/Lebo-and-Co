import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const BlindNotifiaction = () => {
  const [flag, setFlag] = useState(null);

  const handleViewReminder = () => {
    speak('Viewing Reminders');
    setFlag('reminder');
    speak(paragraph1)
  };
  const handleBankAnnouncment = () => {
    speak('Viewing Announcments');
    setFlag('announce');
    speak(paragraph2)
  };

  const handleIssueResolution = () => {
    speak('Viewing issued resolutions');
    setFlag('resolution');
    speak(paragraph3)
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const reminders = [
    
    {
      title: "Reminder 1",
      summary: "Reminder for important task",
      type: "Reminder",
      details: "Details for Reminder 1",
      timestamp: "2023-05-27 09:30 AM",
      recipient: "John Doe",
      priority: "Low",
}]
const announcements = [ {
    title: "Bank Announcement",
    summary: "Important announcement regarding the bank",
    type: "Bank Announcement",
    details: "Details for Bank Announcement",
    timestamp: "2023-05-29 11:45 AM",
    recipient: "Alex Johnson",
    priority: "Medium",
  }]

  const resolutions=[
    {
        title: "Issue Resolution 2",
        summary: "Resolution of reported issue",
        type: "Issue Resolution",
        details: "Details for Issue Resolution 2",
        timestamp: "2023-05-31 03:45 PM",
        recipient: "Michael Johnson",
        priority: "High",
      }

  ]
    


   
    // Add more details about the loan

  const Reminders = ({ reminder }) => {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Reminders</h2>
        <p className="text-2xl">title: {reminder.title}</p>
        <p className="text-2xl">summary: {reminder.summary}</p>
        <p className="text-2xl">type: {reminder.type}</p>
        <p className="text-2xl">details: {reminder.details}</p>
        <p className="text-2xl">recipient: {reminder.recipient}</p>
        <p className="text-2xl">priority: {reminder.priority}</p>
      
      </div>
    );
  };
  const Announcements = ({ announcement }) => {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Announcement</h2>
        <p className="text-2xl">title: {announcement.title}</p>
        <p className="text-2xl">summary: {announcement.summary}</p>
        <p className="text-2xl">type: {announcement.type}</p>
        <p className="text-2xl">details: {announcement.details}</p>
        <p className="text-2xl">recipient: {announcement.recipient}</p>
        <p className="text-2xl">priority: {announcement.priority}</p>
      
      </div>
    );
  };
  const Resolutions = ({ resolution }) => {
    return (
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-8">Reminders</h2>
        <p className="text-2xl">title: {resolution.title}</p>
        <p className="text-2xl">summary: {resolution.summary}</p>
        <p className="text-2xl">type: {resolution.type}</p>
        <p className="text-2xl">details: {resolution.details}</p>
        <p className="text-2xl">recipient: {resolution.recipient}</p>
        <p className="text-2xl">priority: {resolution.priority}</p>
      
      </div>
    );
  };
  const paragraph1 = `the reminder title is ${reminders.title}, the summary is ${reminders.summary}, the type is ${reminders.type}, 
  the details are ${reminders.details}, the recipient is ${reminders.recipient}, the pirority is ${reminders.priority} `
  
  const paragraph2 = `the announcement title is ${announcements.title}, the summary is ${announcements.summary}, the type is ${announcements.type}, 
  the details are ${announcements.details}, the recipient is ${announcements.recipient}, the pirority is ${announcements.priority} `
  
  const paragraph3 = `the resolution title is ${resolutions.title}, the summary is ${resolutions.summary}, the type is ${resolutions.type}, 
  the details are ${resolutions.details}, the recipient is ${resolutions.recipient}, the pirority is ${resolutions.priority} `

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-12">Notifications</h1>
      <div className="flex flex-col items-center space-y-8">
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleViewReminder}
          onFocus={() => speak('View Reminders')}
        >
          View Reminders
        </button>
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleBankAnnouncment}
          onFocus={() => speak('View Announcements')}
        >
         View Announcements
        </button>
        <button
          className="text-4xl bg-gray-800 text-white py-4 px-8 rounded-lg"
          onClick={handleIssueResolution}
          onFocus={() => speak('View Issued Resolutions')}
        >
         View Issued Resolutions
        </button>
      </div>
      <div className="mt-12">
        {flag === 'reminder' && <Reminders reminder={reminders} />}
        {flag === 'announce' && <Announcements announcement={announcements} />}
        {flag === 'resolution' && <Resolutions resolution={resolutions} />}
     
      </div>
    </div>
  );
  }


export default BlindNotifiaction;
