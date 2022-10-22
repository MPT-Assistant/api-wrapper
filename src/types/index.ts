interface IAPIError {
    code: number;
    message: string;
    request_params: {
        key: string;
        value: string;
    }[];
}

export * from "./groups";
export * from "./schedule";
export * from "./replacements";

export { IAPIError };
