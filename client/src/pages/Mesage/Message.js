import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const Message = () => {
  const user = useSelector((state) => state.user);

  const messages = [
    {
      id: 1,
      sender: 'Samantha Ruthprabhu',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5ABTIqdZJBItCts9_LFVwju2I0SiIYOahA&s',
      lastMessage: 'Hi, how are you? 😊',
      time: '5 mins ago',
    },
    {
      id: 2,
      sender: 'Anushka Shetty',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBmLOg0R_1CQwY0Uw6Dsp7BFud3Al0ySXGQ&s',
      lastMessage: 'Are you free to chat today?',
      time: '2 hours ago',
    },
    {
      id: 3,
      sender: 'Nayanthara',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIHRdW2s6u7xR5D5ciXOli5owahPv_QaIfg&s',
      lastMessage: 'Let’s catch up sometime!',
      time: 'Yesterday',
    },
  ];

  return (
    <Layout>
      <div className="container mt-4">
        <h1>Messages</h1>
        <p>Here are your recent conversations.</p>
        <div className="list-group">
          {messages.map((message) => (
            <Link
              to={`/messages/${message.id}`}
              key={message.id}
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <img
                src={message.profileImage}
                alt={message.sender}
                className="rounded-circle me-3"
                style={{ width: '50px', height: '50px' }}
              />
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h5 className="mb-1">{message.sender}</h5>
                  <small className="text-muted">{message.time}</small>
                </div>
                <p className="mb-0 text-muted">{message.lastMessage}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Message;
