import { API } from "..";
import {
    IScheduleGetParams,
    IScheduleGetResponse,
    IScheduleGetWeekLegendParams,
    IScheduleGetWeekParams,
    IScheduleGetWeekResponse,
    IWeek
} from "../types";

class APISchedule {
    private readonly _api: API;
    private readonly _call: API["call"];

    constructor(api: API) {
        this._api = api;
        this._call = this._api.call.bind(api);
    }

    public get(params: IScheduleGetParams): Promise<IScheduleGetResponse> {
        return this._call("schedule.get", params);
    }

    public getWeek(params: IScheduleGetWeekParams): Promise<IScheduleGetWeekResponse> {
        return this._call("schedule.getWeek", params);
    }

    public getWeekLegend(params?: IScheduleGetWeekLegendParams): Promise<IWeek> {
        return this._call("schedule.getWeekLegend", params);
    }
}

export default APISchedule;
