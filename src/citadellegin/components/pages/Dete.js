// 서브페이지 : dete 페이지 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";
import NextLink from "../modules/NextLink";




// [ 서브페이지 : dete 페이지 컴포넌트 ] //////////////////
const Dete = ()=>{
    return(
        <>
            {/* 1.제품 소개 모듈 : dete */}
            <ProductIntro pgname="Dete" />
            {/* 2.스크롤 안내 표시 모듈 */}
            <Scroll />
            {/* 3.제품 링크 모듈 : 다음제품으로의 링크 */}
            <NextLink pgname="Dete" />
        </>
    );
}; ////////////////// 서브페이지 : dete 페이지 컴포넌트 //////////////////

// 내보내기
export default Dete;