// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Params {}

interface ResponseData {
	id: string;
	uid: string;
	name: string;
	specialty: string;
	specialtyID: string;
}

export type Response = ResponseData[];

export const method = "getGroupList";
