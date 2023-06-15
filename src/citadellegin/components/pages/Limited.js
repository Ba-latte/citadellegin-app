// 서브페이지 : limited 페이지 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";
import NextLink from "../modules/NextLink";
import Details from "../modules/Details";


// [ 서브페이지 : limited 페이지 컴포넌트 ] //////////////////
const Limited = ()=>{
    return(
        <>
            {/* 1.제품 소개 모듈 : Limited */}
            <ProductIntro pgname="Limited" />
            {/* 2.스크롤 안내 표시 모듈 */}
            <Scroll />
            {/* 3.제품 링크 모듈 : 다음제품으로의 링크 */}
            <NextLink pgname="Limited" />
            {/* 4.한정판 제품 세부사항 : 한정판 제품 스와이퍼 배너를 클릭했을 때 */}
            
        </>
    );
}; ////////////////// 서브페이지 : limited 페이지 컴포넌트 //////////////////

// 내보내기
export default Limited;