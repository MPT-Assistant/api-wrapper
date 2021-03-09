const MODULE_VERSION = "1.0.0";
const DEFAULT_API_URL = "https://mpt.rus-anonym.wtf/api/";

/**
 * Основной класс ошибок которые могут произойти в модуле
 * @hideconstructor
 */
class MPT_API extends Error {
	/**
	 * Код ошибки
	 */
	public code: string | number;

	/**
	 * Название ошибки
	 */
	public error: string;

	/**
	 * Стэк ошибки
	 */
	public stack!: string;

	public constructor({
		statusCode: code,
		error,
		message,
	}: {
		statusCode: number;
		error: string;
		message: string;
	}) {
		super(message);

		this.code = code;
		this.error = error;

		this.name = this.constructor.name;
	}

	public get [Symbol.toStringTag](): string {
		return this.constructor.name;
	}

	/**
	 * Возвращает содержимое ошибки в JSON
	 */
	public toJSON(): Pick<this, keyof this> {
		const json = {} as Pick<this, keyof this>;

		for (const key of Object.getOwnPropertyNames(this)) {
			json[key as keyof this] = this[key as keyof this];
		}

		return json;
	}
}

export default {
	version: MODULE_VERSION,
	url: DEFAULT_API_URL,
	error: MPT_API,
};
