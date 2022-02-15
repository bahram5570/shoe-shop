import { FaStar } from "react-icons/fa";

const ShoeStructure = ({items}) => {
    return ( 
        <div className="bg-neutral-50 
                        shadow-md 
                        shadow-neutral-300 
                        rounded-xl 
                        overflow-hidden 
                        sm:cursor-pointer 
                        ring-neutral-400 
                        sm:hover:ring-4 
                        duration-150">
            <img src={items.image} alt={items.id} />
            <section className="flex justify-between px-2 py-1">
                <h1 className="text-xl italic">{items.brand}</h1>
                <span className="flex items-center">
                    <p className="text-sm mr-1 text-slate-600">{items.stars}</p>
                    <FaStar className="text-yellow-400" />
                </span>
            </section>
            <section className="flex justify-between px-2 py-1">
                <p>$ {items.price}</p>
                <p className="text-cartColor">{items.off}% OFF</p>
            </section>
        </div>
     );
}
 
export default ShoeStructure;