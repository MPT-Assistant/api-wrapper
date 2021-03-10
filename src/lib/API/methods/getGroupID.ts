export interface Params {
	group: string;
}

export interface Response {
	id?: string;
	name?: string;
	perhaps: string[];
}

export const method = "getGroupID";
