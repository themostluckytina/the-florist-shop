import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/plantsSlice";
import { filterCategory } from "../../redux/plantsSlice";


function Filter({category}) {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(<div >
       <p onClick={()=>{dispatch(filterCategory(category))}} 
       className={selectedCategory===category?'colorSelected color':'color'} >{category} </p>
    </div>)
}

export default Filter;

