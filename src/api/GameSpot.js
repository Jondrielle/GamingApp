import axios from "axios";

export default axios.create({
	baseURL: 'http://www.gamespot.com/api',
	headers: {
		Authorization: "Bearer 09939eb54cdc38b5856d035d761e671c3b12cb17"
	}
});
