// 각 섹션 소개 모듈 컴포넌트 JS - SectionIntro.js

import '../../css/sectionIntro.css';


// [ 각 섹션별 소개 모듈 컴포넌트 ]
const SectionIntro = ()=>{
    return(
        <>
            {/* 각 섹션 소개하기 */}
            <div id="section_intro">
                <section className="section_intro">
                    {/* 1.섹션 아티클 타이틀 */}
                    <div className="sec_title_container">
                        <div className="title_bx">
                            <h2 className="title">
                                <span>
                                    <span className="letter" data-aos="fade-up" data-aos-duration="1000"  >How to enjoy it: </span>
                                </span>
                            </h2>
                        </div>
                    </div>
                    {/* 2.섹션 아티클 설명 */}
                    <div className="sec_desc_container">
                        <div className="desc_bx">
                            <p className="desc">
                            Citadelle Original is ideal in a gin & tonic, with a twist of lemon peel. It goes perfectly with a platter of oysters for a true pairing of the best of south-west France.
                            </p>
                            <p className="desc">
                            Have you tried it in our Citadelle Gin Tonic?
                            </p>
                        </div>
                    </div>

                    {/* 3.섹션 아티클 이미지 */}
                    <div className="sec_img_container">
                        <div className="img_bx">
                            <img src="./images/dt/sub/original/recipe.jpg" alt="레시피 이미지" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}; /////////////////////////////// SectionIntro 컴포넌트 ///////////////////////////////

// 내보내기
export default SectionIntro;