interface IScheduleGetParams {
    group: string;
    date?: string;
}

interface IScheduleGetWeekParams {
    group: string;
}

interface IScheduleGetWeekLegendParams {
    date?: string;
}

interface IWeek {
    date: string;
    value: string;
    isNumerator: boolean;
    isDenominator: boolean;
}

interface ILesson {
    name: string;
    teacher: string;
    num: number;
}

interface IExtendedLesson extends ILesson {
    start: string;
    end: string;
}

interface IScheduleReplacement {
    num: number;
    detected: number;
    addToSite: number;
    oldLessonName: string;
    oldLessonTeacher: string;
    newLessonName: string;
    newLessonTeacher: string;
}

interface IScheduleGetResponse {
    place: string;
    week: IWeek;
    lessons: IExtendedLesson[];
    replacements?: IScheduleReplacement[];
}

interface IWeekDaySchedule {
    num: number;
    place: string;
    lessons: ILesson[];
}

interface IScheduleGetWeekResponse {
    numerator: IWeekDaySchedule[];
    denominator: IWeekDaySchedule[];
}

export {
    IExtendedLesson,
    ILesson,
    IScheduleGetParams,
    IScheduleGetResponse,
    IScheduleGetWeekLegendParams,
    IScheduleGetWeekParams,
    IScheduleGetWeekResponse,
    IScheduleReplacement,
    IWeek,
};
