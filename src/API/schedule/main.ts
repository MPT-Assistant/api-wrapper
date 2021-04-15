import { API_Response, IOptions } from "../../types";

import * as get from "./methods/get";
import * as getById from "./methods/getByDate";

import Builder from "../../lib/builder";

export default class Schedule extends Builder {
	constructor(options?: IOptions) {
		super(options);
	}

	public async get(params: get.Params): API_Response<get.Response> {
		return this.postRequest(get.method, params);
	}

	public async getByDate(
		params: getById.Params,
	): API_Response<getById.Response> {
		return this.postRequest(getById.method, params);
	}
}
