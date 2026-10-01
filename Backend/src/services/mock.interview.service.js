const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

/**
 * @description Conducts a mock interview chat session using the interview report as context.
 * The AI acts as a professional interviewer and evaluates the candidate's responses.
 * @param {Object} params
 * @param {Object} params.interviewReport - The full interview report document
 * @param {Array}  params.messages - Array of {role: "user"|"model", text: string} chat history
 * @param {string} params.userMessage - The latest message from the user
 * @returns {Promise<string>} The AI interviewer's response
 */
async function conductMockInterview({ interviewReport, messages, userMessage }) {

    const systemPrompt = `You are a professional senior interviewer conducting a mock interview for the position of "${interviewReport.title}".

You have access to the candidate's profile:
- Job Description: ${interviewReport.jobDescription}
- Candidate Background: ${interviewReport.selfDescription || interviewReport.resume?.substring(0, 500) || "Not provided"}
- Known Skill Gaps: ${interviewReport.skillGaps?.map(g => `${g.skill} (${g.severity})`).join(", ") || "None"}

You have the following prepared questions to draw from:
TECHNICAL QUESTIONS:
${interviewReport.technicalQuestions?.map((q, i) => `${i + 1}. ${q.question}`).join("\n") || "None"}

BEHAVIORAL QUESTIONS:
${interviewReport.behavioralQuestions?.map((q, i) => `${i + 1}. ${q.question}`).join("\n") || "None"}

YOUR ROLE AND BEHAVIOR:
1. Start by warmly greeting the candidate and asking the first technical question.
2. Ask one question at a time. Do NOT list multiple questions together.
3. After the candidate answers, give brief, constructive feedback (1-2 sentences) — highlight what was good and what could be improved.
4. Then naturally move to the next question or a follow-up.
5. Alternate between technical and behavioral questions for variety.
6. If the candidate says "skip", "next question", or similar, move to the next question without feedback.
7. Keep your responses concise and conversational (2-5 sentences max per turn).
8. After ~10 exchanges, offer a brief overall performance summary if the candidate asks or the conversation naturally concludes.
9. Use a professional but friendly and encouraging tone throughout.
10. Do NOT reveal model answers — you are evaluating, not teaching.`

    const chatHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }))

    const chat = ai.chats.create({
        model: "gemini-2.0-flash",
        history: chatHistory,
        config: {
            systemInstruction: systemPrompt,
        }
    })

    const response = await chat.sendMessage({
        message: userMessage
    })

    return response.text

}

module.exports = { conductMockInterview }
