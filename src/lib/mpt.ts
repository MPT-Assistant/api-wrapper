import { API_Response, IOptions } from "../types";
import Builder from "./builder";

/**
 * MPT API constructor
 */
class MPT extends Builder {
	/**
	 *
	 * @param {Object|string} params - Можно передать либо токен, либо набор параметров ({@link IOptions})
	 * @example
	 * const { MPT } = require(`api-devup`);
	 *
	 * const API = new MPT("token");
	 * // Or
	 * const API = new MPT({
	 * 	token: "token",
	 * 	apiHeaders: {
	 * 		"User-Agent": "Custom-UserAgent"
	 * 	}
	 * });
	 */
	constructor(params?: IOptions) {
		super(params);
	}

	/**
	 * Метод для выполнения запроса к недобавленным методам
	 * @param {string} method - Метод
	 * @param {Record<string, any>} [params={}] - Параметры
	 * @example
	 * API.call("getCurrentWeek").then(res => console.log(res));
	 */
	public async call(
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params: Record<string, any> = {},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): API_Response<any> {
		return this.postRequest(method, params);
	}
}

export default MPT;
