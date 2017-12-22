const CHANGE_PAGE_STATUS = "CHANGE_PAGE_STATUS";

const initialState = {
    pageStatus: 'loading',
}

export default function changePageStatus (state = initialState, action){
    switch (action.type) {
        case CHANGE_PAGE_STATUS:
            return {
                ...state, 
                pageStatus:action.pageStatus
            }
        default: 
        pageStatus: {state}
    }
}

