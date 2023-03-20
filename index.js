"use strict";

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

console.log("Please submit your prompt to chat-gpt:\n\n");

const stdin = process.openStdin();

// gets called on console input
stdin.addListener("data", async (data) => {
  const apiKey = process.env.CHAT_GPT_API_KEY;
  const prompt = data.toString().trim();
  const model = process.env.OPTIONAL_GPT_MODEL;

  const response = await askChatGPTAPI(apiKey, prompt, model);
  console.log(response, "\n\n");
});

/**
 * @param {string} apiKey
 * @param {string} prompt
 * @param {string | undefined} model or default backup if omitted
 * @returns {string}
 */
async function askChatGPTAPI(apiKey, prompt, model = "text-davinci-003") {
  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({ model, prompt });

  return completion.data.choices[0].text;
}
