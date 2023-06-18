import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp'
    }),
    endpoints: builder => ({
        submitForm: builder.mutation({
            query: (payload) => ({
                url: '/frontend',
                method: 'POST',
                body: payload,
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    })
})
export const { useSubmitFormMutation } = formApi