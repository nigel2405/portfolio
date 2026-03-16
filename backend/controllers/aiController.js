import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy_key',
  compatibility: 'strict',
});

const SYSTEM_PROMPT = `You are JARVIS, the personal AI assistant for Nigel Shivalkar. 
Nigel is a Computer Science student and a MERN stack developer. 
His key projects include a Smart RFID Attendance System (MERN + IoT).
He is skilled in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and IoT integrations.
Answer questions confidently, concisely, and professionally like a futuristic AI.
Always represent Nigel in the best light for recruiters and tech companies.`;

export const handleChat = async (req, res) => {
  try {
    const { messages } = req.body;
    
    // Check if the key is dummy, if so mock response
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'dummy_key') {
      return res.json({ 
        reply: "I am currently running in offline mock mode. But I can tell you Nigel is a fantastic MERN stack developer! Please add an OpenAI API key to my core configuration (.env) for full functionality." 
      });
    }

    const { text } = await generateText({
      model: openai('gpt-3.5-turbo'),
      system: SYSTEM_PROMPT,
      prompt: messages[messages.length - 1].content,
    });

    res.json({ reply: text });
  } catch (error) {
    console.error('JARVIS Error:', error);
    res.status(500).json({ error: 'Core system failure.' });
  }
};
