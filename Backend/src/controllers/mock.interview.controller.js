const interviewReportModel = require("../models/interviewReport.model")
const { conductMockInterview } = require("../services/mock.interview.service")


/**
 * @description Controller to handle mock interview chat for a given interview report.
 * Accepts the conversation history and the latest user message, returns the AI interviewer's response.
 * @route POST /api/interview/mock-chat/:interviewReportId
 * @access private
 */
async function mockInterviewChatController(req, res) {

    const { interviewReportId } = req.params
    const { messages, userMessage } = req.body

    if (!userMessage || typeof userMessage !== "string") {
        return res.status(400).json({
            message: "userMessage is required and must be a string."
        })
    }

    if (!Array.isArray(messages)) {
        return res.status(400).json({
            message: "messages must be an array."
        })
    }

    const interviewReport = await interviewReportModel.findOne({
        _id: interviewReportId,
        user: req.user.id
    })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    const aiResponse = await conductMockInterview({
        interviewReport,
        messages,
        userMessage
    })

    res.status(200).json({
        message: "Mock interview response generated.",
        response: aiResponse
    })

}


module.exports = { mockInterviewChatController }
