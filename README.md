# chat-gpt-console
Node.js CLI for talking to chat-gpt's API

## Usage

1. Have Node.js installed on your machine
2. Install this package with the following command
```console
npm i
```

3. Create a file called ".env". Add your chat-gpt API key and (if you want) the chat-gpt model to be used, if omitted a default backup will be used. See the file .env.example for reference.

```console
CHAT_GPT_API_KEY=your_api_key
OPTIONAL_GPT_MODEL=optional
```

4. Run with the following command

```console
npm start
```
