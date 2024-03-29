import { API } from "..";
import {
    ITeacher,
    ITeacherSchedule,
    ITeachersGetByNameParams,
    ITeachersGetListParams,
    ITeachersGetScheduleParams
} from "../types";

class APITeachers {
    private readonly _api: API;
    private readonly _call: API["call"];

    constructor(api: API) {
        this._api = api;
        this._call = this._api.call.bind(api);
    }

    public getByName(params: ITeachersGetByNameParams): Promise<ITeacher> {
        return this._call("teachers.getByName", params);
    }

    public getList(params?: ITeachersGetListParams): Promise<ITeacher[]> {
        return this._call("teachers.getList", params);
    }

    public getSchedule(params: ITeachersGetScheduleParams): Promise<ITeacherSchedule> {
        return this._call("teachers.getSchedule", params);
    }
}

export default APITeachers;
