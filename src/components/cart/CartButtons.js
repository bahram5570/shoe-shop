import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const CartButtons = ({buttonName}) => {
    return ( 
        <div className="w-full md:w-3/5 flex justify-end mt-4">
            <button type="button" className="buttonsCart bg-redColor">
                <FaAngleLeft className="mr-1" />
                Back
            </button>
            
            <button type="submit" className="buttonsCart bg-greenColor ml-6">
                {buttonName}
                <FaAngleRight className="ml-1" />
            </button>
        </div>
     );
}
 
export default CartButtons;