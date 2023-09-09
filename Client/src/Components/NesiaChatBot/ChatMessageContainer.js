import React from 'react';
import styles from '../../Styles/NesiaChatBot.module.css';

const ChatMessageContainer = ({ messages, responseContainerRef }) => {
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

  return (
    <div className={styles['nesia-chat-bot__response-container']} ref={responseContainerRef}>
      {messages.map((message, index) => renderMessage(message, index))}
    </div>
  );
};

export default ChatMessageContainer;
