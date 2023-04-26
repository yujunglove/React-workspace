import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuAPI } from "../../api/MenuAPICalls";

function Menu({ id }) {

    const dispatch = useDispatch();
    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;

    useEffect(
        () => {
            /* Menu 호출 API */
            dispatch(callGetMenuAPI(id));        
        },
        []
    );

    return (
        <>
            { menu && 
                <>
                    <h3>메뉴 이름 : { menu.menuName }</h3>
                    <h3>메뉴 가격 : { menu.menuPrice }</h3>
                    <h3>메뉴 종류 : { menu.categoryName }</h3>
                    <h3>메뉴 상세 : { menu.detail.description }</h3>
                    <img src={ menu.detail.image } style={ { maxWidth : 500 } } alt={ menu.menuName }/>
                </>
            }
        </>
    );

}

export default Menu;