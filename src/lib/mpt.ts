import { API_Response, IOptions } from "../types";

import * as getCurrentWeek from "../API/getCurrentWeek";
import Schedule from "../API/schedule/main";
import Group from "../API/group/main";
import Replacements from "../API/replacements/main";

import Builder from "./builder";

/**
 * MPT API constructor
 */
class MPT extends Builder {
	public schedule: Schedule;
	public group: Group;
	public replacements: Replacements;
	/**
	 *
	 * @param {Object|string} params - Можно передать либо токен, либо набор параметров ({@link IOptions})
	 * @example
	 * const { MPT } = require(`api-devup`);
	 *
	 * const API = new MPT();
	 * // Or
	 * const API = new MPT({
	 * 	apiHeaders: {
	 * 		"User-Agent": "Custom-UserAgent"
	 * 	}
	 * });
	 */
	constructor(params?: IOptions) {
		super(params);
		this.schedule = new Schedule(params);
		this.group = new Group(params);
		this.replacements = new Replacements(params);
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

	public async getCurrentWeek(): API_Response<getCurrentWeek.Response> {
		return this.postRequest(getCurrentWeek.method);
	}
}

export default MPT;
