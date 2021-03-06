import mongoose from "mongoose";
import config from "config";
import log from "../logger";

const connect = () => {
	const dbUri = config.get("dbUri") as string;

	return mongoose.connect(dbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		log.info("DataBase Connected!");
	})
	.catch((error: string) => {
		log.error("Database Error", error);
		process.exit(1);
	});
}

export default connect;