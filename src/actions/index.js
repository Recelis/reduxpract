// actions types
export const ADD_TODO = "ADD_TODO"; // action is explicitly declared using string literal constants, not necessary but very helpful to do this
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/* some other constants */
export const VisibilityFilters = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_COMPLETED:"SHOW_COMPLETED",
    SHOW_ACTIVE:"SHOW_ACTIVE"
}
let nextTodoId = 0

// action creators
// they simply are functions that return an action
export function addTodo(text){
    return{
        type: ADD_TODO,
        id: nextTodoId++,
        text
    } // what does text do when it is like this? New ES6 syntax?
}

export function toggleTodo(id){
    return {
        type:TOGGLE_TODO,
        id
    }
} 

export function setVisibilityFilter(filter){
    return{
        type:SET_VISIBILITY_FILTER, filter
    }
}


