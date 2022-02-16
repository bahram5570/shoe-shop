import { Fragment } from "react";
import {data} from "../data/data";
import ShoeStructure from "./ShoeStructure";
// import Search from "../menu/Search";
// import Sort from "../menu/Sort";
// import FilterButton from "../menu/FilterButton";

const Shoes = () => {
    const output = data.map(x => <ShoeStructure items={x} key={x.id} />);

    return ( 
        <Fragment>
            {/* <div className="w-max bg-zinc-800 rounded-lg px-4 py-2 mb-8 flex mx-auto">
                <Search />
                <Sort />
                <FilterButton />
            </div> */}

            <div className="grid grid-cols-shoesGrid gap-8 sm:gap-14">
                {output}
            </div>
        </Fragment>
     );
}
 
export default Shoes;