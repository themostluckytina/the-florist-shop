import { data } from "../../data";
import Plant from "./Plant";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/plantsSlice";


function Plants() {
  const selectedCategory = useSelector(getSelectedCategory);
    return(<div>

      {data
       .filter(plant => {
        if(selectedCategory === 'ВСЕ') return true;
        return selectedCategory ===plant.category
      })
      .map((plant, index) =><Plant key={index} plant={plant}  />
        )}
      
    </div>)
}

export default Plants;