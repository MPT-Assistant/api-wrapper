export interface Params {
	group: string;
	date: string;
	replacements?: boolean;
}

interface Lesson {
	num: number;
	name: string;
	teacher: string;
}

interface Day {
	num: number;
	place: string;
	name: string;
	lessons: Lesson[];
}

export type Response = Day[];

export const method = "schedule.getByDate";
