const lexService = require('../Services/LexService'); 

const postChatbotMessage = async (req, res) => {
  const { userInput } = req.body;

  try {
    const chatbotResponse = await lexService.sendChatbotMessage(userInput); // Use the lexService to send a request to the Lex runtime

    const customPayloadResponses = chatbotResponse.messages.filter(
      (message) => message.contentType === 'CustomPayload'
    );

    const textResponses = chatbotResponse.messages.filter(
      (message) => message.contentType === 'PlainText'
    );

    res.json({ customPayloadResponses, textResponses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the chatbot message.' });
  }
};

module.exports = {
  postChatbotMessage,
};

