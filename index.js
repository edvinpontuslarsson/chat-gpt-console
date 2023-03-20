"use strict";

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

console.log("Please submit your message to chat-gpt:\n\n");

const stdin = process.openStdin();

// gets called on console input
stdin.addListener("data", async (data) => {
  const apiKey = process.env.CHAT_GPT_API_KEY;
  const message = data.toString().trim();

  const response = await askChatGPTAPI(apiKey, message);
  console.log(response);
});

/**
 * @param {string} apiKey
 * @param {string} message
 * @returns {string}
 */
async function askChatGPTAPI(apiKey, message) {
  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
  });

  return completion.data.choices[0].text;
}
