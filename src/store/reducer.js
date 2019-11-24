import axios from 'axios';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }

    if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'decVal') {
     
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          console.log(persons)
        })

        console.log("Aqui..maiquel");
        return {
            counter: state.counter - action.val
        }
    }
    return state;
};

export default reducer;