export interface Params {
	name: string;
}

interface Lesson {
	num: number;
	name: [string, string?];
	teacher: [string, string?];
}

interface Day {
	num: number;
	place: string;
	name: string;
	lessons: Lesson[];
}

export type Response = Day[];

export const method = "schedule.get";
