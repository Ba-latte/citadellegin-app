// 페이지 소개 모듈 컴포넌트


import React from 'react';
import $ from 'jquery';
import '../../css/pageIntro.css';
import Scroll from '../modules/Scroll';
// AOS 라이브러리
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();




// [ 컴포넌트 ]
const PageIntro = ()=>{
    return(
        <>
            <div id="pg_intro">
                <section className="pg_intro">
                    <div className="wrap">
                        {/* 타이틀 */}
                        <div className="pg_title">
                            <h2 className="tit" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                <span>
                                    <span className="letter" >Citadelle, french</span>
                                </span>
                                <span>
                                    <span className="letter">gin pioneer</span>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="wrap">
                        {/* 이미지 */}
                        <div className="pg_img">
                            <img src="./images/dt/main/1.jpg" alt="페이지 소개 이미지" />
                        </div>
                    </div>
                </section>
            </div>
            {<Scroll />}
            {/* JS 로드구역 함수 */}
            {/* {loadFn()} */}
        </>
    );
}; ///////////////////////// PageIntro 컴포넌트 /////////////////////////



// // [ JS 로드 구역 함수 ]
// function loadFn(){
//     $(()=>{
//         console.log("페이지 소개 모듈 로딩 완료");
    
//         // [ 일정시간 후 타이틀 등장 함수 ]
//         const tit_appearFn = function(){
//             console.log("타이틀 등장 함수");
        
//             // 대상 선정
//             const tit = $(".tit");
//             const letter = $(".letter");
//             const hval = $(".tit").height();
        
//             // 겉박스에 타이틀요소 높이값 부여
//             tit.css({height: hval});
//             console.log(hval);
        
//             // .tit 요소에 애니메이션 부여
//             letter.animate({
//                 top: "0%"
//             }, 1500, "easeOutExpo");
//         }

//         // 시간차를 두고 타이틀 등장 함수 호출
//         setTimeout(tit_appearFn, 500);

//     }); /////////////////////// jQB ///////////////////////
// } /////////////////////// JS 로드 구역 함수 ///////////////////////



// 내보내기
export default PageIntro;