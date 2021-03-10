export interface Params {
	id: string;
}

interface ResponseData {
	date: string;
	uid: string;
	detected: Date;
	addToSite: Date;
	lessonNum: number;
	oldLessonName: string;
	oldLessonTeacher: string;
	newLessonName: string;
	newLessonTeacher: string;
}

export type Response = ResponseData[];

export const method = "getCurrentReplacements";