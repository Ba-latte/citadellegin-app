// 제품 링크 모듈 : 다음 제품으로의 링크 - NextLink.js

import React from 'react';
import $ from "jquery";
import '../../css/nextLink.css';
import productIntro_data from '../../data/productIntro';
import { Link } from 'react-router-dom';


// [컴포넌트 만들기]
const NextLink = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름

    // 데이터 세팅
    const selcData = productIntro_data;

    // 들어온 페이지의 다음 페이지 데이터 넣기
    const next = (pgname)=>{
        let key = Object.keys(selcData);
        let val = Object.values(selcData);
        let num = key.indexOf(pgname) + 1;
        // console.log("다음 객체 소환!", key[num].toLowerCase());
        
        if(num == 4) num = 0;
        
        return [val[num].pdtit[0], val[num].pdtit[1], key[num]];
    }


    // 리턴하기
    return(
        <>
            <section className='next_link'>
                <div className='next_link_container'>
                    <Link to={'/'+next(props.pgname)[2]} >
                        <div className="wrap">
                            <h2 className="name">
                                <span>
                                    {next(props.pgname)[0]} <br/>
                                    <i className={next(props.pgname)[1]=='Rouge' ? "rose" : "hit"}>
                                        {next(props.pgname)[1]}
                                    </i>
                                </span>
                            </h2>
                        </div>
                        <div className='wrap'>
                                <img src={'./images/dt/sub/' + props.pgname + '/next-product.png'} alt='다음 제품 이미지' />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
} ////////////////////////// NextLink 컴포넌트 //////////////////////////

// 내보내기
export default NextLink;