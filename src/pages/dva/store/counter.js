export default {
    namespace: 'count',
    state: {
        count: 0
    },
    reducers: {
        add(state) {
            return {
                ...state,
                count: state.count + 1
            };
        },

        minus(state) {
            return {
                ...state,
                count: state.count - 1
            };
        },

        reset(state) {
            return {
                ...state,
                count: 0
            };
        }
    }
};
