import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';

function MenuItem({ menu }) {

    /* PathVariable 형태로 메뉴 코드 값을 전달하도록 한다. */
    return (
        <Link to={ `/menu/${ menu.menuCode }`}>
            <div className={ itemStyle.MenuItem }>
                <h3>이름 : { menu.menuName }</h3>
                <h3>가격 : { menu.menuPrice }</h3>
                <h4>종류 : { menu.categoryName }</h4>
            </div>
        </Link>
    );

}

export default MenuItem;