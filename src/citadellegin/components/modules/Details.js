// limited 페이지에서 한정판 제품의 각 상세 페이지 모듈 JS - Details.js

import React from "react";
import '../../css/details.css';
import limited_product_data from "../../data/limitedProduct";
// 테스트용으로 연결함
import Article from "./Article2";

// [ 컴포넌트 ]
const Details = (props)=>{ // props.dbseq


    // 데이터 셋업하기
    const selecData = limited_product_data;


    return(
        <>
        <div id="details">
            <section className="details">
                {/* 1. 제품명 */}
                <div className="product_name_container">
                    <div className="wrap">
                        <h2 className="name">
                            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-easing="ease-in-out-quart">
                                {
                                    // selecData.map((v, i)=>
                                    //     console.log(v.productName)
                                    // )
                                    selecData[0]["productName"][1]
                                }
                            </span>
                        </h2>
                    </div>
                </div>
                {/* 👇제품 관련 부분 */}
                <aside className="gridBx">
                    {/* 2.제품 이미지 */}
                    <div className="product_img_container">
                        {/* 제품 상세 이미지 */}
                        <div className="wrap">
                            <img id="product" src={selecData[0]["bigSrc"]} alt="제품 상세 이미지" />
                        </div>
                    </div>
                    {/* 3.제품 설명 아티클들 */}
                    <div className="product_desc_container">
                        <Article pgname="test" dbseq={props.dbseq} />
                    </div>
                </aside>            
            </section>
        </div>
        </>
    );
}; //////////////////////// Details 컴포넌트 ////////////////////////

// [ 내보내기 ]
export default Details;