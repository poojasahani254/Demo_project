import {IS_ADDTOCART} from '../Action/types';
// import Api from "../Services/Api";

export const ADDTOCART= (data)=> (dispatch) =>{
       dispatch({
            type: IS_ADDTOCART,
            payload: data
        })
}





