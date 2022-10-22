interface IReplacementsGetCurrentParams {
    group?: string;
}

interface IReplacement {
    date: string;
    detected: number;
    addToSite: number;
    group: string;
    lessonNum: number;
    oldLessonName: string;
    oldLessonTeacher: string;
    newLessonName: string;
    newLessonTeacher: string;
    hash: string;
}

export { IReplacementsGetCurrentParams, IReplacement };
