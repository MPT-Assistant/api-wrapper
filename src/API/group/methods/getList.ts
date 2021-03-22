export interface Params {
	name: string;
}

interface Group {
	name: string;
	specialty: string;
}

export type Response = Group[];

export const method = "group.getList";
