import data_menu_1 from "../Assets/data_menu_1.png"
import data_menu_2 from "../Assets/data_menu_2.png"
import data_menu_3 from "../Assets/data_menu_3.png"

const DataMenu = () => {
    return(
        <div className="d-flex justify-content-around">
            <img className="w-25" src={data_menu_1}/>
            <img className="w-25" src={data_menu_2}/>
            <img className="w-25" src={data_menu_3}/>
      </div>
    )
}

export default DataMenu