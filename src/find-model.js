require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function findWorkingModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ No API key found");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const candidateModels = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-2.0-flash",
    "gemini-pro",
    "gemini-1.0-pro",
    "gemini-1.5-pro",
    "gemini-1.5-flash-8b",
    "gemini-flash-latest"
  ];

  for (const modelName of candidateModels) {
    console.log(`--- Testing model: ${modelName} ---`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: "Hi" }] }],
        generationConfig: { maxOutputTokens: 10 }
      });
      const response = await result.response;
      console.log(`✅ Success for ${modelName}: ${response.text()}`);
      return modelName; // Stop at first success
    } catch (error) {
      console.error(`❌ Failed for ${modelName}: ${error.message}`);
    }
  }
}

findWorkingModel().then(workingModel => {
  if (workingModel) {
    console.log(`\n🎉 WORKING MODEL FOUND: ${workingModel}`);
  } else {
    console.log("\n❌ No working model found with this API Key.");
  }
});
