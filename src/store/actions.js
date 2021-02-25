import axios from 'axios';

export const getProducts = ({commit}) => {
    axios.get('https://rms.diu.ac/api/get-semester-teacher-list/15493/5')
        .then(response => {
            commit('SET_DATA', response.data.courseAndTeacher);
        })

}

export const addToCard = ({commit}, {product, quantity}) => {
    commit('ADD_TO_CARD', {product, quantity});
}