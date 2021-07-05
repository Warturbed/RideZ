import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({ 
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let isProductExists = false;
                state.cart.map(function(item) {
                    if (item.key === product.key) {
                        isProductExists = true;
                        item.amount++
                    }
                })
            isProductExists || state.cart.push({...product, amount: 1});
        },
        REMOVE_FROM_CART: (state, index) => {
            if (typeof index === 'number') {
             state.cart.splice(index, 1);
            } else {
                state.cart = [];
            }
        },
        INCREMENT: (state, index) => {
            state.cart[index].amount++
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].amount > 1) {
                state.cart[index].amount--
            }
        },
    },
    actions: {
            GET_PRODUCTS_FROM_API({commit}) {
                return axios('https://my-json-server.typicode.com/Warturbed/restaurant/db', {
                    method: 'GET'
                })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data.products);
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
            },
            ADD_TO_CART({commit}, product) {
                commit('SET_CART', product);
            },
            INCREMENT_CART_ITEM({commit}, index) {
                commit('INCREMENT', index)
            },
            DECREMENT_CART_ITEM({commit}, index) {
                commit('DECREMENT', index)
            },
            DELETE_FROM_CART({commit}, index) {
                commit('REMOVE_FROM_CART', index);
            },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
})

export default store;
