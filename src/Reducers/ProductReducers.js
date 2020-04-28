import {INTIAL_STATE} from '../State/InitialState';
import {IS_ADDTOCART,IS_CARTDELETE } from '../Action/types';

const ProductReducers = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case IS_ADDTOCART:
            let f = false;
            [...state.AddtoCartData].filter((value,index)=>{
                if(value.data.id===action.payload[0].data.id){
                    const data={
                        data: value.data,
                        qty: value.qty + action.payload[0].qty
                    }
                    state.AddtoCartData.splice(index,1,data)
                    f=true;
                }
            })
            if(f===false){
                return {
                    AddtoCartData: [...state.AddtoCartData, ...action.payload],
                };
            }else{
                return state
            }

            break;
        case IS_CARTDELETE:
            state.AddtoCartData.splice(action.index,1);
            return {
                AddtoCartData: [...state.AddtoCartData]
            }
        default:
            return state;
    }
};

export default ProductReducers;
