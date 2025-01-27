import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const MessageScreen = () => {
  const { id } = useParams(); 

  const person = {
    id: 1,
    name: 'Samantha Ruthprabhu',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
    messages: [
      { text: 'Hi there!', sender: 'them', time: '5 mins ago' },
      { text: 'How are you?', sender: 'them', time: '4 mins ago' },
      { text: 'I am good, how about you?', sender: 'me', time: '2 mins ago' },
      { text: 'I am great! 😊', sender: 'them', time: '1 min ago' },
    ],
  };

  const [chatMessages, setChatMessages] = useState(person.messages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [
        ...chatMessages,
        { text: newMessage, sender: 'me', time: 'Just now' },
      ];
      setChatMessages(updatedMessages);
      setNewMessage('');
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        <div className="d-flex align-items-center mb-3">
          <img
            src={person.profileImage}
            alt={person.name}
            className="rounded-circle me-3"
            style={{ width: '50px', height: '50px' }}
          />
          <h3>{person.name}</h3>
        </div>

        <div
          className="border rounded p-3 mb-3"
          style={{ height: '400px', overflowY: 'scroll', backgroundColor: '#f8f9fa' }}
        >
          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={`d-flex ${message.sender === 'me' ? 'justify-content-end' : ''} mb-2`}
            >
              <div
                className={`p-2 rounded ${
                  message.sender === 'me' ? 'bg-primary text-white' : 'bg-light text-dark'
                }`}
                style={{ maxWidth: '70%' }}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MessageScreen;
