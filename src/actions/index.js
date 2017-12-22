export const CHANGE_PAGE_STATUS = "CHAGE_PAGE_STATUS";

export function changePageStatus(state){
    return{
        type: CHANGE_PAGE_STATUS,
        pageStatus:state
    }
}
