import { useEffect } from "react";
import { useDispatch  } from "react-redux";
import { setIndex } from "../Actions/indexActions";



/**
 * Custom hook in charge of setting the index to 1
 * @returns void
 */
const useSetIndexAtBeginning = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIndex(1));
    }, []);
};


export default useSetIndexAtBeginning;