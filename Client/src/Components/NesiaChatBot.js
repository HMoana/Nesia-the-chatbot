import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ModalComponent from '../Components/ModalComponent.js';
import styles from '../Styles/NesiaChatBot.module.css';

import { SiChatbot } from 'react-icons/si';
import { MdDoubleArrow } from 'react-icons/md';

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

  const renderCustomPayloadContent = (message) => {
    if (typeof message.content === 'string') {
      try {
        const parsedPayload = JSON.parse(message.content);

        if (Array.isArray(parsedPayload.messages)) {
          return parsedPayload.messages.map((message, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: message.content }} />
          ));
        }
      } catch (error) {
        console.error('Error parsing custom payload:', error);
      }

      return <div dangerouslySetInnerHTML={{ __html: message.content }} />;
    } else if (typeof message.content === 'object') {
      return null;
    }
  };

  const renderMessage = (message, index) => {
    if (message.contentType === 'UserInput') {
      return (
        <div className={styles['nesia-chat-bot__user-input-message']} key={index}>
            <div className={styles['nesia-chat-bot__user-message-content']}>{message.content}</div>
        </div>
      );
    } else {
      return (
        <div
          className={
            message.contentType === 'CustomPayload'
              ? styles['nesia-chat-bot__response']
              : styles['nesia-chat-bot__response']
          }
          key={index}
        >
          <div className={styles['nesia-chat-bot__message-container']}>
            {message.contentType === 'CustomPayload' ? (
              <div className={styles['nesia-chat-bot__message-content']}>
                {renderCustomPayloadContent(message)}
              </div>
            ) : (
              <>
                <div className={styles['nesia-chat-bot__message-content']}>
                  <div>{message.content}</div>
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
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
            <div className={styles['nesia-chat-bot__response-container']} ref={responseContainerRef}>
              {messages.map((message, index) => renderMessage(message, index))}
            </div>
            <div className={styles['nesia-chat-bot__input-container']}>
              <input
                className={styles['nesia-chat-bot__input']}
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyPress={handleKeyPress}
                placeholder="Pātai mai, Ask Nesia anything..."
              />
              <button
                className={styles['nesia-chat-bot__icon']}
                onClick={fetchResponseFromChatbot}
              >
                <MdDoubleArrow />
              </button>
            </div>
          </div>
        </ModalComponent>
      )}
    </div>
  );
};

export default NesiaChatBot;
