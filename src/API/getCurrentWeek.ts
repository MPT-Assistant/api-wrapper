export interface Response {
	date: string;
	week: "Числитель" | "Знаменатель" | "Не определено";
	weekNum: number;
}

export const method = "getCurrentWeek";
