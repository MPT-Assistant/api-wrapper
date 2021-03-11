// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Params {}

export interface Response {
	date: string;
	week: string;
	weekNum: number;
}

export const method = "getCurrentWeek";
