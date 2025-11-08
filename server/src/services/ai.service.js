const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateAIResponse(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text;
}

module.exports = generateAIResponse;
