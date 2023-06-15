// 메인 페이지 레이아웃 컴포넌트

import $ from 'jquery';
import { Outlet } from 'react-router-dom';
import Header from '../modules/Header';
import Footer from '../modules/Footer';



// [ 제이쿼리 로드구역 함수 ] ////////////////////
function jqFn(){
    $(()=>{
        
    }); ////////////// jQB //////////////
} ///////////////////// jqFn 함수 /////////////////////



// [ 레이아웃 컴포넌트 ] ////////////////////
const Layout = ()=>{
    return(
        <>
            {/* 1.상단 영역 */}
            <header>
                <Header />
            </header>
            {/* 2.메인 영역 */}
            <main className='cont'>
                {/* 출력 파트 : 각 페이지 컴포넌트가 출력되는 부분 */}
                <Outlet />
            </main>
            {/* 3.하단 영역 */}
            <div id="info">
                <Footer />
            </div>
            {/* JS로드 함수 */}
            {jqFn()}
        </>
    );
}; ///////////////////////////// Layout 컴포넌트 /////////////////////////////

// 내보내기
export default Layout;