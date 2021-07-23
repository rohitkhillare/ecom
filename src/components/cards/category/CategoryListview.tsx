import { Row } from "react-bootstrap"
import { CategoryList } from "../../../list/Categorylist"
import './Category.css'
const CategoryListView = () => {
    return <Row className={'row'}>
        {CategoryList.map(({ image, title }) => {
            return <div className="col-sm-3">
                <img className={'category-image'} src={image} />
                <h5 className={'category-title'}>{title}</h5>
            </div>
        })}

    </Row>
}

export default CategoryListView