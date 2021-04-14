export interface Params {
	id: number | number[];
	sign: string;
}

interface User {
	id: number;
	group: string;
	reg_date: Date;
}

export type Response = User[];

export const method = "miniapp.getUserData";
