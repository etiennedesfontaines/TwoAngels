// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const SibApiV3Sdk = require("sib-api-v3-sdk");
const sendInBlueApiKey = process.env.SEND_IN_BLUE_API_KEY;

const handler = async (event) => {
	try {
		const defaultClient = SibApiV3Sdk.ApiClient.instance;
		// Configure API key authorization: api-key
		const apiKey = defaultClient.authentications["api-key"];
		apiKey.apiKey = sendInBlueApiKey;
		// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
		//apiKey.apiKeyPrefix['api-key'] = "Token"

		// Configure API key authorization: partner-key
		const partnerKey = defaultClient.authentications["partner-key"];
		partnerKey.apiKey = sendInBlueApiKey;
		// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
		//partnerKey.apiKeyPrefix['partner-key'] = "Token"

		const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

		let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

		sendSmtpEmail = {
			// sender: {
			// 	name: "Etienne",
			// 	email: "erdesfontaines@gmail.com",
			// },
			to: [
				{
					email: "erdesfontaines@gmail.com",
					name: "Eti",
				},
			],

			templateId: 1,
			params: {
				name: "John",
			},
			headers: {
				"api-key": process.env.SEND_IN_BLUE_API_KEY,
				"content-type": "application/json",
				"accept": "application/json", //prettier-ignore
			},
		};

		const result = await apiInstance.sendTransacEmail(sendSmtpEmail).then(
			function (data) {
				console.log(
					"API called successfully. Returned data: " + JSON.stringify(data)
				);
			},
			function (error) {
				console.error(error);
			}
		);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: result }),
			// // more keys you can return:
			// headers: { "headerName": "headerValue", ... },
			// isBase64Encoded: true,
		};
	} catch (error) {
		return { statusCode: 500, body: error.toString() };
	}
};

module.exports = { handler };
