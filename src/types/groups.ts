interface ISpecialty {
    code: string;
    name: string;
    url: string;
}

interface IGroupsGetParams {
    name: string;
}

interface IGroupsGetResponse {
    name: string;
    specialty: ISpecialty;
}

interface IGroupsGetListParams {
    specialty?: string;
}

interface IGroupsGetSpecialtyParams {
    code: string;
}

export {
    ISpecialty,
    IGroupsGetParams,
    IGroupsGetResponse,
    IGroupsGetListParams,
    IGroupsGetSpecialtyParams
};
