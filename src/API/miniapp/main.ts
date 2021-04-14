import { API_Response, IOptions } from "../../types";

import * as getUserData from "./methods/getUserData";
import * as setUserGroup from "./methods/setUserGroup";

import Builder from "../../lib/builder";

export default class Miniapp extends Builder {
	constructor(options?: IOptions) {
		super(options);
	}

	public async getUserData(
		params: getUserData.Params,
	): API_Response<getUserData.Response> {
		return this.postRequest(getUserData.method, params);
	}

	public async setUserGroup(
		params: setUserGroup.Params,
	): API_Response<setUserGroup.Response> {
		return this.postRequest(setUserGroup.method, params);
	}
}
