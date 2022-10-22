import { API } from "..";
import {
    IReplacement,
    IReplacementsGetCurrentParams
} from "../types";

class APIReplacements {
    private readonly _api: API;
    private readonly _call: API["call"];

    constructor(api: API) {
        this._api = api;
        this._call = this._api.call.bind(api);
    }

    public getCurrent(params: IReplacementsGetCurrentParams): Promise<IReplacement[]> {
        return this._call("replacements.getCurrent", params);
    }
}

export default APIReplacements;
