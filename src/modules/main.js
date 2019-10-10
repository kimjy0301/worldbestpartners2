const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGEINPUT = 'counter/CHANGEINPUT';
const PLUS = 'counter/PLUS';
const ISLOADING = 'counter/INSLOADING';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeInput = (value) => ({ type: CHANGEINPUT, value });
export const clickPlus = (value) => ({ type: PLUS, value });
export const isLoading = (value) => ({ type: ISLOADING, value });


export const INCREMENTASYNC = 'counter/INCREMENTASYNC';
export const INCREMENTASYNC_FULFILLED = "counter/INCREMENTASYNC_FULFILLED";
export const INCREMENTASYNC_REJECTED = "counter/INCREMENTASYNC_REJECTED";
export const incrementAsync = () => ({
    type: INCREMENTASYNC
});


const initialState = {
    num: 0,
    value: 0,
    isLoading: false
};

export const getCounter = state => state.counter;

const main = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                num: state.num + 1
            }
        case DECREMENT:
            return {
                ...state,
                num: state.num - 1
            }
        case CHANGEINPUT:
            return {
                ...state,
                value: parseInt(action.value)
            }
        case PLUS:
            console.log(parseInt(action.value));
            return {
                ...state,
                num: state.num + parseInt(action.value)
            }
        case ISLOADING:
            console.log(action.value);
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state;
    }
};

export default main;