const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2");

const botId = 'PF7DMGYT2Y';
const botAliasId = 'YXJIAU26XN';

const lexClient = new LexRuntimeV2Client({ region: 'ap-southeast-2' });

const sendChatbotMessage = async (userInput) => {
  const params = {
    botId: botId,
    botAliasId: botAliasId,
    localeId: 'en_AU',
    sessionId: '08-2023',
    text: userInput,
  };

  const command = new RecognizeTextCommand(params);
  const response = await lexClient.send(command);
  return response;
};

module.exports = {
  sendChatbotMessage,
};