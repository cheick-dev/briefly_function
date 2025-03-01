import { Client, Users } from "node-appwrite";
import { YoutubeTranscript } from "youtube-transcript";

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }) => {
	// You can use the Appwrite SDK to interact with other services
	// For this example, we're using the Users service
	const client = new Client()
		.setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
		.setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
		.setKey(req.headers["x-appwrite-key"] ?? "");

	// const { url } = JSON.parse(req.body);

	try {
		// const transcript = await YoutubeTranscript.fetchTranscript(url);
		// return res.json({ transcript, url });
	} catch (err) {
		error("Could not list users: " + err.message);
	}

	// The req object contains the request data
	if (req.path === "/ping") {
		// Use res object to respond with text(), json(), or binary()
		// Don't forget to return a response!
		return res.text("Pong okok okok!220");
	}

	return res.json({
		req,
	});
};
