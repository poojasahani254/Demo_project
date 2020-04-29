import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const notify = (msg) => toast.error(msg,{
        position: toast.POSITION.TOP_CENTER
});

export const Success = (msg) => toast.success(msg,{
        position: toast.POSITION.TOP_CENTER
})
