import { API_Response, IOptions } from "../../types";

import * as get from "./methods/get";
import * as getList from "./methods/getList";

import Builder from "../../lib/builder";

export default class Group extends Builder {
	constructor(options?: IOptions) {
		super(options);
	}

	public async get(params: get.Params): API_Response<get.Response> {
		return this.postRequest(get.method, params);
	}

	public async getList(): API_Response<getList.Response> {
		return this.postRequest(getList.method);
	}
}
