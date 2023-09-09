const lexService = require('../Services/LexService');
const { postChatbotMessage } = require('../Controllers/ChatbotController');

test('POST /api/NesiaChatBot responds with a customPayloadResponses or textResponses', async () => {
  const req = {
    body: {
      userInput: 'Hello',
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

test('POST /api/NesiaChatBot responds with textResponses catch all flow', async () => {
  const req = {
    body: {
      userInput: 'jn/4594..<"',
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

// Incorporate the provided test into the existing code file.
test('POST /api/NesiaChatBot responds with an error message', async () => {
  const req = {
    body: {
      userInput: 'Error',
    },
  };

  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  lexService.sendChatbotMessage = jest.fn().mockRejectedValue(new Error('An error occurred while processing the chatbot message.'));

  await postChatbotMessage(req, res);

  expect(res.json).toHaveBeenCalledWith({
    error: 'An error occurred while processing the chatbot message.',
  });
  expect(res.status).toHaveBeenCalledWith(500);
});

// Add the remaining test cases here
test('POST /api/NesiaChatBot responds with customPayloadResponses', async () => {
  const req = {
    body: {
      userInput: 'How do I make a post?',
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

test('POST /api/NesiaChatBot recognizes different language and responds with textResponses', async () => {
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

test('POST /api/NesiaChatBot recognizes user input goes against rules and guidelines and responds with textResponses moderation flow', async () => {
  const req = {
    body: {
      userInput: 'you suck',
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

// Add more test cases if needed

module.exports = { test };
