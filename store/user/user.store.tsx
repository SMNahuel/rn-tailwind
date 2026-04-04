import { observable } from "@legendapp/state"


const state$ = observable({
    users: {
        watchList: [],
        theme: 'dark',
        name: '',
        favorite: []
    },
})

export default state$;