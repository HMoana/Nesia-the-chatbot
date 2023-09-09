import React from 'react';
import styles from '../../Styles/NesiaChatBot.module.css';
import { MdDoubleArrow } from 'react-icons/md';

const UserInputContainer = ({
  userInput,
  handleUserInput,
  handleKeyPress,
  fetchResponseFromChatbot,
}) => {
  return (
    <div className={styles['nesia-chat-bot__input-container']}>
      <input
        className={styles['nesia-chat-bot__input']}
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyPress={handleKeyPress}
        placeholder="Pātai mai, Ask Nesia anything..."
      />
      <button className={styles['nesia-chat-bot__icon']} onClick={fetchResponseFromChatbot}>
        <MdDoubleArrow />
      </button>
    </div>
  );
};

export default UserInputContainer;
