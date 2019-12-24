import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://beta.soluspay.net/api/dashboard';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (_, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        const query = params.filter.terminalId || ""
        const searchField = Object.keys(params.filter) || "";
        const { field, order } = params.sort;
        console.log("the params.filter is: ", query)


        // apiUrl?search=324&field=undefined&sort=id&order=ASC
        // const url = `${apiUrl}/all?search=${query}&field=searchField&sort=&order=`
        const url = `${apiUrl}/all?search=${query}&field=${searchField}&sort=${field}&order=${order}`;

        return httpClient(url).then(({ json }) => ({

            data: json["result"].map(resource => ({ ...resource, id: resource.ID })),
            // data: res["result"],
            // total: parseInt(headers.get('content-range').split('/').pop(), 10),
            total: json["result"].length,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json["result"].map(resource => ({ ...resource, id: resource.ID })),
        })),

    getMany: () => {
        const url = `${apiUrl}/all`;
        return httpClient(url).then(({ json }) => ({
            data: json["result"].map(resource => ({ ...resource, id: resource.ID })),
        }));
    },

    // getManyReference: (resource, params) => {
    //     const { page, perPage } = params.pagination;
    //     const { field, order } = params.sort;
    //     const query = {
    //         sort: JSON.stringify([field, order]),
    //         range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //         filter: JSON.stringify({
    //             ...params.filter,
    //             [params.target]: params.id,
    //         }),
    //     };
    //     const url = `${apiUrl}/${resource}?${stringify(query)}`;

    //     return httpClient(url).then(({ headers, json }) => ({
    //         data: json,
    //         total: parseInt(headers.get('content-range').split('/').pop(), 10),
    //     }));
    // },

    // update: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json })),

    // updateMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json }));
    // },

    // create: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}`, {
    //         method: 'POST',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({
    //         data: { ...params.data, id: json.id },
    //     })),

    // delete: (resource, params) =>
    //     httpClient(`${apiUrl}/${resource}/${params.id}`, {
    //         method: 'DELETE',
    //     }).then(({ json }) => ({ data: json })),

    // deleteMany: (resource, params) => {
    //     const query = {
    //         filter: JSON.stringify({ id: params.ids}),
    //     };
    //     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify(params.data),
    //     }).then(({ json }) => ({ data: json }));
    // }
};
