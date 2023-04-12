const SibApiV3Sdk = require("sib-api-v3-sdk");
const sendInBlueApiKey = process.env.SEND_IN_BLUE_API_KEY;

const handler = async (event) => {
	const eventBody = JSON.parse(event.body);
	const contactFormData = eventBody.payload.data;

	try {
		const defaultClient = SibApiV3Sdk.ApiClient.instance;
		const apiKey = defaultClient.authentications["api-key"];
		apiKey.apiKey = sendInBlueApiKey;

		const partnerKey = defaultClient.authentications["partner-key"];
		partnerKey.apiKey = sendInBlueApiKey;

		const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

		let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

		sendSmtpEmail = {
			to: [
				{
					email: "erdesfontaines@gmail.com",
					name: "Robert",
				},
			],

			templateId: 1,
			params: {
				name: contactFormData.name,
				email: contactFormData.email,
				contactNumber: contactFormData.tel,
				message: contactFormData.message,
			},

			headers: {
				"api-key": process.env.SEND_IN_BLUE_API_KEY,
				"content-type": "application/json",
				"accept": "application/json", //prettier-ignore
			},
		};
		const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

		console.log("API called successfully. Returned data: " + JSON.stringify(result)); //prettier-ignore
		return {
			statusCode: 200,
			body: JSON.stringify({ message: result }),
		};
	} catch (err) {
		console.error(err);
		return { statusCode: 500, body: err.toString() };
	}
};

module.exports = { handler };
