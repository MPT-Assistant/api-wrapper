interface ITeachersGetByNameParams {
    name: string;
}

interface ITeachersGetListParams {
    extended?: boolean;
}

interface ITeacher {
    name: string;
    surname: string;
    patronymic: string;
    photo: string;
    link?: string;
    dosieId?: string;
    rating: number;
}

export {
    ITeachersGetByNameParams,
    ITeachersGetListParams,
    ITeacher
};
