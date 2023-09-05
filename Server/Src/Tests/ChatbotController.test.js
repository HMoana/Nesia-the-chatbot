const lexService = require('../Services/LexService');
const { postChatbotMessage } = require('../Controllers/ChatbotController');

test('POST /api/NesiaChatBot responds with customPayloadResponses and textResponses', async () => {
  const req = {
    body: {
      userInput: 'Kia ora',
    },
  };

  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  lexService.sendChatbotMessage = jest.fn().mockResolvedValue({
    messages: [
      { contentType: 'CustomPayload', content: 'Custom payload response' },
      { contentType: 'PlainText', content: 'Text response' },
    ],
  });

  await postChatbotMessage(req, res);

  expect(res.json).toHaveBeenCalledWith({
    customPayloadResponses: [{ contentType: 'CustomPayload', content: 'Custom payload response' }],
    textResponses: [{ contentType: 'PlainText', content: 'Text response' }],
  });
  expect(res.status).not.toHaveBeenCalled();
});
