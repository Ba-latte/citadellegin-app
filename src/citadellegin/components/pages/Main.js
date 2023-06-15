// 메인페이지 컴포넌트

import React from "react";
import PageIntro from "../modules/PageIntro";
import SwiperProduct from "../plugin/SwiperProduct";


// [ 메인 컴포넌트 ] //////////////////
const Main= ()=>{
    return(
        <>
            {/* 1.페이지 소개 모듈 */}
            <PageIntro />
            {/* 2.스와이퍼 - 제품 배너 모듈 */}
            <SwiperProduct />
        </>
    );
}; ////////////////// Main 컴포넌트 //////////////////

// 내보내기
export default Main;