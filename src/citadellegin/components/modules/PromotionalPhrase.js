// 홍보 문구 모듈 컴포넌트

import React from 'react';
import $ from 'jquery';
import '../../css/promotionalPhrase.css';


const PromotionalPhrase = (props)=>{
    // props.pgname - 각 페이지 이름

    // 데이터 세팅
    const promo_phrase_data = {
        "Original":"Our gin was awarded a *gold medal* at the 2017 Spirits Design Master.",
        "Dete":"A newcomer to the gin market, Jardin d’Été has already won *a double gold*.",
        "Rouge":"citadelle rouge is not sweet, or pink, or artificial in any way. *just pure, natural goodness!*",
        "Limited":"",
    };


    // 구분자(*)로 텍스트 나눠서 요소,클래스 부여하기
    const highlightFn = (pgname)=>{
        
        let txt = promo_phrase_data[pgname].split("*");
        // let hcode = "";
        // txt.forEach((ele, idx)=>{
        //     // console.log(idx)
        //     let num = idx;
        //     hcode += `<span class="txt">${ele}</span>`;

        //     $(".phrase").append(hcode);
        // })
        return(
            // console.log("하이라이트! : ",txt[0])
            <>
                <span className='txt'>{txt[0]}</span>
                {pgname == "Rouge" ? <span className='txt hit rose'>{txt[1]}</span> : 
                <span className='txt hit'>{txt[1]}</span>
                }
                <span className='txt'>{txt[2]}</span>
            </>
        );
    };



    
    return(
        <>
            {/* 제품 홍보 문구 파트 */}
            <div className="promo_phrase_container">
                {/* 배경이미지 */}
                <div className='wrap'>
                    <img className='bg' src={'./images/dt/sub/'+props.pgname.toLowerCase()+'/background-left.png'} alt='배경이미지' />
                </div>
                {/* 이미지 */}
                <div className="wrap">
                    <img className='sticker' src="./images/sticker.png" alt="기업 이미지" />
                </div>
                {/* 홍보 문구 */}
                <div className="wrap">
                    {/* <p className="phrase">{promo_phrase_data[props.pgname]}</p> */}
                    <p className="phrase">{highlightFn(props.pgname)}</p>
                </div>
            </div>
        </>
    );
} ////////////////////////////////// PromotionalPhrase 컴포넌트 //////////////////////////////////









// 내보내기
export default PromotionalPhrase;