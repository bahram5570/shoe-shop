import {data} from "../data/data";
import ShoeStructure from "./ShoeStructure";

const Shoes = () => {
    const output = data.map(x => <ShoeStructure items={x} key={x.id} />);

    return ( 
        <div className="grid grid-cols-shoesGrid gap-10">
            {output}
        </div>
     );
}
 
export default Shoes;