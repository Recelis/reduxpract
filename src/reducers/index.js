// reducers actually list out what happens to the state in store when the actions are called. 
/*
At this stage want to know what the shape of the state will be. Need to plan this out!
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
Want state to be as "normalized" as possible, which means as little nesting as possible!
Would be better if each todo was identified with its own ID, but this example is simple. 
*/

// reducer is a pure function (which means that return value does not depend on local or external state and no side effect)  
// it basically takes the previous state and an action and spits out the next state. 
// never mutate reducer's arguments
// perform side effects like API calls or routing transitions
// call non-pure functins inside reducer.
import { combineReducers } from 'redux';
import { 
    ADD_TODO, 
    TOGGLE_TODO, 
    VisibilityFilters, 
    SET_VISIBILITY_FILTER 
} from '../actions/index'; // leave gap in between when importing so that it looks clear

const { SHOW_ALL } = VisibilityFilters // why is this =? what does this = sign do?


// without ES6 'default arguments syntax' https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters
// function todoApp(state,action){
//     if (typeof state === undefined){ // for the initial state
//         return initialState
//     }
//     return state
// }

/* Before Reducer Composition (i.e. taking all unnecessary code in todosApp and putting it into one function to clean up)*/
// function todoApp(state = initialState,action){ // ES6 voodoo magic that if state is undefined set to initial State
//     switch(action.type){ // this is a property of action, which returns an object containing type, index, text and all of the properties you set.
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({}, state,{
//                 visibilityFilter:action.filter
//             }) // this merges the empty object with state and the new action, which changes the visibilityFilter. The empty object first arg is the target 
//         case ADD_TODO:
//             return Object.assign({}, state, {
//                 todos:[
//                     ...state.todos, // spread operator as state.todos will come as its own array
//                     {
//                         text:action.text,
//                         completed:false
//                     } // the todo items is an object that contains two properties, text and completed. The Object.assign has merged the new item with the existing
//                 ]
//             })
//         case TOGGLE_TODO:
//             return Object.assign({}, state,{
//                 todos:state.todos.map((todo,index)=>{ // map creates a new array and returns it, so there is no mutation
//                     if (index === action.index){
//                         return Object.assign({},todo,{ // this is the todo item object, not the list, which gets assigned into its own todo item 
//                             completed:!todo.completed
//                         })
//                     }
//                     return todo // don't forget to return the todo item if it hasn't been changed
//                 })
//             })
//         default:
//             return state // very important to return state if action.type is unknown
//     }
// }

function todos(state=[],action){
  switch(action.type){
    case ADD_TODO:
      return [
          ...state,
          {
              text:action.text,
              completed:false
          } 
      ]
    case TOGGLE_TODO:
      return state.map((todo,index)=>{ // map creates a new array and returns it, so there is no mutation
          if (index === action.index){
              return Object.assign({},todo,{ // this is the todo item object, not the list, which gets assigned into its own todo item 
                  completed:!todo.completed
              })
          }
          return todo;
      })
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// todoApp reducers without combineReducers function 
// function todoApp(state = initialState,action){ // ES6 voodoo magic that if state is undefined set to initial State
//   return {
//     visibilityFilter:visibilityFilter(state.visibilityFilter, action),
//     todos:todos(state.todos,action)
//   }  
// }

//todoApp with combineReducers function
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;