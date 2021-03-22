export interface Params {
	group?: string;
}

interface Replacement {
	date: string;
	name: string;
	detected: Date;
	addToSite: Date;
	lessonNum: number;
	oldLessonName: string;
	oldLessonTeacher: string;
	newLessonName: string;
	newLessonTeacher: string;
}

export type Response = Replacement[];

export const method = "replacements.get";
