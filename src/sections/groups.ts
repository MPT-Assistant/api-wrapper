import { API } from "..";
import {
    IGroupsGetListParams,
    IGroupsGetParams,
    IGroupsGetResponse,
    IGroupsGetSpecialtyParams,
    ISpecialty
} from "../types";

class APIGroups {
    private readonly _api: API;
    private readonly _call: API["call"];

    constructor(api: API) {
        this._api = api;
        this._call = this._api.call.bind(api);
    }

    public get(params: IGroupsGetParams): Promise<IGroupsGetResponse> {
        return this._call("groups.get", params);
    }

    public getList(params?: IGroupsGetListParams): Promise<string[]> {
        return this._call("groups.getList", params);
    }

    public getSpecialtiesList(): Promise<string[]> {
        return this._call("groups.getSpecialtiesList");
    }

    public getSpecialty(params: IGroupsGetSpecialtyParams): Promise<ISpecialty> {
        return this._call("groups.getSpecialty", params);
    }
}

export default APIGroups;
