import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ModalComponent from '../Modal/ModalComponent';
import ChatMessageContainer from './ChatMessageContainer';
import UserInputContainer from './UserInputContainer';
import styles from '../../Styles/NesiaChatBot.module.css';

import { SiChatbot } from 'react-icons/si';

const NesiaChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const responseContainerRef = useRef(null);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const fetchResponseFromChatbot = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/NesiaChatBot', {
        userInput: userInput,
      });
      const { customPayloadResponses, textResponses } = res.data;
      const newMessages = [
        ...messages,
        { content: userInput, contentType: 'UserInput' },
        ...textResponses,
        ...customPayloadResponses,
      ];

      setMessages(newMessages);
      setUserInput('');
      openModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchResponseFromChatbot();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles['nesia-chat-bot__container']}>
      <button className={styles['nesia-chat-bot__open-button']} onClick={openModal}>
        <SiChatbot />
      </button>
      {isModalOpen && (
        <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
          <div className={styles['nesia-chat-bot__content-container']}>
            <ChatMessageContainer
              messages={messages}
              responseContainerRef={responseContainerRef}
            />
            <UserInputContainer
              userInput={userInput}
              handleUserInput={handleUserInput}
              handleKeyPress={handleKeyPress}
              fetchResponseFromChatbot={fetchResponseFromChatbot}
            />
          </div>
        </ModalComponent>
      )}
    </div>
  );
};

export default NesiaChatBot;
