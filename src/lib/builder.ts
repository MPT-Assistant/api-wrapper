import axios, { AxiosRequestConfig } from "axios";
import { IOptions } from "../types";
import Core from "../core";

export default class Builder {
	protected readonly RequestConfig: AxiosRequestConfig = {
		headers: {
			"User-Agent": `mpt-api@${Core.version}`,
		},
	};
	protected readonly apiURL: string = Core.url;

	protected constructor(params?: IOptions) {
		if (params) {
			this.RequestConfig.headers =
				params?.apiHeaders || this.RequestConfig.headers;
			this.apiURL = params?.apiURL || this.apiURL;
		}
	}

	protected async postRequest(
		method: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		data?: Record<string, any>,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		try {
			const Response = await axios.post(
				this.apiURL + method,
				null,
				Object.assign(this.RequestConfig, {
					params: data,
				}),
			);
			return Response.data;
		} catch (error) {
			throw new Core.error(error.response.data);
		}
	}
}
