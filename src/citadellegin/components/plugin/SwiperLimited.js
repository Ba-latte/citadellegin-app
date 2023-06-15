// 스와이퍼 - 제품 배너 컴포넌트 JS - SwiperLimited.js

import React, { useRef, useState } from "react";
import $ from 'jquery';
import { easeOutExpo } from "jquery-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from 'swiper';
import {Link} from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperLimited.css";
import Details from "../modules/Details";
import limited_product_data from "../../data/limitedProduct";




//////////////////////////// [ 제품 타이틀 등장 액션 ] ////////////////////////////
const slideUpAni = ()=>{
    $(()=>{
        
    const pd_slide = $(".slide");
    const pd_tit = $(".product_tit");
    console.log("제품 슬라이드 : ", pd_slide);

    // [ 애니메이트() 메서드로 만들 경우 ]
    // 제품 슬라이드에 마우스오버/아웃시 제품 타이틀 요소 등장 액션 부여하기
    pd_slide.hover(
        // 오버시
        function(){
            // 오버한 요소의 타이틀 높이값 구하기
            let hval = $(this).find(".product_tit").height();
            console.log("마우스 오버한 요소의 타이틀 높이값 : ", hval);

            // 오버한 요소를 제외한 형제 요소들의 투명도 흐리게 하기
            $(this).siblings().find("img").stop().animate({
                opacity: "0.5"
            }, 400);

            // 타이틀의 부모요소에 해당 높이값을 줘서 등장하도록 만들기
            $(this).find(".wrap").stop().animate({
                height: hval + "px",
                opacity: "1"
            }, 500, easeOutExpo);
        },
        // 아웃시
        function(){
            console.log("마우스 아웃");

            // 오버한 요소를 제외한 형제 요소들의 투명도 돌아오게 하기
            $(this).siblings().find("img").stop().animate({
                opacity: "1"
            }, 400);

            // 타이틀의 부모요소의 높이값을 0으로 만들어 사라지게 만들기
            $(this).find(".wrap").stop().animate({
                height: "0px",
                opacity: "0"
            }, 500, easeOutExpo);
        }
    );

    
});

} //////////////////////// slideUpAni 함수 ///////////////////////////////


// 제품 타이틀 등장 액션 호출




// [ 컴포넌트 만들기 ]
export default function SwiperLimited() {
    // props.pgname - 페이지 이름 (첫글자 대문자)

    // 리미티드 제품 데이터
    const selecData = limited_product_data;
    // 해당데이터 Hook구성
    const [dbseq,setDbseq] = useState(0);

    const showFn = (idx)=>{
        console.log("등장해!",idx);
        setDbseq(idx);

    };
    
    return (
        <>
            <section className="swipe_banner limited">
                <Swiper
                
                    slidesPerView={1}
                    // "Limited"페이지에서 호출된 거면 간격 30주고 아니면 0주기
                    spaceBetween={30}
                    centeredSlides={false}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        700: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                    }}
                    className="swiper-limited"
                >
                    <ul className="swiper-wrapper">
                        {
                            selecData.map((v, i)=>
                            <SwiperSlide className="swiper-slide slide limited" key={i} onClick={()=>showFn(i)}>
                                {/* {console.log(v.isrc)} */}
                                <div className="wrap">
                                    <span className="product_tit limited">{v["productName"]}</span>
                                </div>
                                <img src={v["isrc"]} alt="제품 이미지" />
                            </SwiperSlide>
                            )
                        }
                    </ul>
                </Swiper>
            </section>
            <Details dbseq={dbseq} />
            {/* js 로드 함수 호출 */}
            {/* {slideUpAni()} */}
        </>
    );
}



