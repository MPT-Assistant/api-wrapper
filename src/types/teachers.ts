import { IWeek } from "./schedule";

interface ITeachersGetByNameParams {
    name: string;
}

interface ITeachersGetListParams {
    extended?: boolean;
}

interface ITeachersGetScheduleParams {
    date?: string;
    teacher: string;
}

interface ITeacher {
    name: string;
    surname: string;
    patronymic: string;
    photo: string;
    link?: string;
    dosieId?: string;
    vkId?: number;
    rating: number;
}

interface ITeacherScheduleLesson {
    place: string;
    group: string[];
    num: number;
}

interface ITeacherSchedule {
    week: IWeek;
    lessons: ITeacherScheduleLesson[];
}

export {
    ITeachersGetByNameParams,
    ITeachersGetListParams,
    ITeachersGetScheduleParams,
    ITeacher,
    ITeacherSchedule,
    ITeacherScheduleLesson
};
