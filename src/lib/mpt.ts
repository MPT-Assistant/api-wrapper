import { API_Response, IOptions } from "../types";

import Builder from "./builder";
import * as API from "./API/api";

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

	public async getCurrentReplacements(
		params: API.getCurrentReplacements.Params,
	): API_Response<API.getCurrentReplacements.Response> {
		return this.postRequest(API.getCurrentReplacements.method, params);
	}

	public async getCurrentWeek(
		params: API.getCurrentWeek.Params,
	): API_Response<API.getCurrentWeek.Response> {
		return this.postRequest(API.getCurrentWeek.method, params);
	}

	public async getGroupData(
		params: API.getGroupData.Params,
	): API_Response<API.getGroupData.Response> {
		return this.postRequest(API.getGroupData.method, params);
	}

	public async getGroupID(
		params: API.getGroupID.Params,
	): API_Response<API.getGroupID.Response> {
		return this.postRequest(API.getGroupID.method, params);
	}

	public async getGroupList(
		params: API.getGroupList.Params,
	): API_Response<API.getGroupList.Response> {
		return this.postRequest(API.getGroupList.method, params);
	}

	public async getGroupReplacements(
		params: API.getGroupReplacements.Params,
	): API_Response<API.getGroupReplacements.Response> {
		return this.postRequest(API.getGroupReplacements.method, params);
	}

	public async getGroupSchedule(
		params: API.getGroupSchedule.Params,
	): API_Response<API.getGroupSchedule.Response> {
		return this.postRequest(API.getGroupSchedule.method, params);
	}
}

export default MPT;
