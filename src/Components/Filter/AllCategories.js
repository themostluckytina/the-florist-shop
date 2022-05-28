import Filter from "./Filter";



function AllCategories() {
    return(<div>
       <h2>ВЫБОР ПО КАТЕГОРИЯМ</h2>
       

       {['ВСЕ','РОЗЫ', 'ПИОНЫ', 'ХОСТЫ',  'ИРИСЫ', 'ХВОЙНИКИ','ЛАВАНДА'].map((category, index) => <Filter key={index} category={category} /> )}
    </div>)

   
    


}

export default AllCategories;