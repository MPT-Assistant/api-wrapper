import axios from "axios";
import APIError from "./error";
import { IAPIError } from "./types";

import APIGroups from "./sections/groups";
import APISchedule from "./sections/schedule";
import APIReplacements from "./sections/replacements";

interface IAPIParams {
    apiUrl?: string;
}

class API {
    private readonly _apiUrl: string;

    public readonly groups: APIGroups;
    public readonly schedule: APISchedule;
    public readonly replacements: APIReplacements;

    constructor(options?: IAPIParams) {
        this._apiUrl = options?.apiUrl || "https://api.mpt-assistant.ru";
        this.groups = new APIGroups(this);
        this.schedule = new APISchedule(this);
        this.replacements = new APIReplacements(this);
    }

    public async call<Res = unknown>(method: string, params?: unknown): Promise<Res> {
        type TResponse = { response: Res; error: never } | { response: never; error: IAPIError };

        const response = await axios<TResponse>({
            method: "POST",
            url: `${this._apiUrl}/${method}`,
            headers: {
                "User-Agent": "@mpt-assistant/api-wrapper",
            },
            params,
        });

        if (response.data.error) {
            throw new APIError(response.data.error);
        } else {
            return response.data.response;
        }
    }
}

export { APIError, API };
