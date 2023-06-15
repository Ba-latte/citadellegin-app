// 하단 영역 컴포넌트 JS - Footer.js

import React from "react";
import '../../css/footer.css';

// Font Awesome 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 개별 아이콘 불러오기
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Footer = ()=>{
    return(
        <>
            <footer className="info">
                {/* 1. 하단 영역 구분 라인 */}
                <div className="line_bx">
                    {/* 화살표 꼬리 모양 svg */}
                    <svg className="arrow-tail left" viewBox="0 0 20 20">
                        <g id='Group-1' >
                            <g id="Group-2" transform="translate(0.500000, 7.500000)">
                                <path d="M-2.66453526e-15,0 C-2.66453526e-15,1.65685425 1.69470739,3 3.7852349,3" id="Path-1"></path>
                                <path d="M-2.66453526e-15,3 C-2.66453526e-15,4.65685425 1.69470739,6 3.7852349,6" id="Path-2" transform="translate(1.892617, 4.500000) scale(1, -1) translate(-1.892617, -4.500000) "></path>
                            </g>
                            <line x1="3.5" y1="10.5" x2="20" y2="10.5" id="Line-2"></line>
                        </g>
                    </svg>
                    {/* 가운데 라인 svg */}
                    <div className="cir">
                        <svg className="border">
                            <line x1="0" y1="10.5" x2="100%" y2="10.5" stroke="#D9D7D2"></line>
                        </svg>
                    </div>
                    {/* 화살표 꼬리모양 svg */}
                    <svg className="arrow-tail right" viewBox="0 0 20 20">
                        <g id='Group-1' >
                            <g id="Group-2" transform="translate(0.500000, 7.500000)">
                                <path d="M-2.66453526e-15,0 C-2.66453526e-15,1.65685425 1.69470739,3 3.7852349,3" id="Path-1"></path>
                                <path d="M-2.66453526e-15,3 C-2.66453526e-15,4.65685425 1.69470739,6 3.7852349,6" id="Path-2" transform="translate(1.892617, 4.500000) scale(1, -1) translate(-1.892617, -4.500000) "></path>
                            </g>
                            <line x1="3.5" y1="10.5" x2="20" y2="10.5" id="Line-2"></line>
                        </g>
                    </svg>
                </div>
                {/* 2. 로고 */}
                <div className="logo_bx">
                    {/* svg 파일 불러오기 */}
                    <img src="./images/logo.png" alt="로고 이미지" />
                </div>
                {/* 3. sns */}
                <div className="sns_bx">
                    <ul className="sns_list">
                        <li>
                            <a href="https://www.instagram.com/citadellegin/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@citadellegin1929" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/CitadelleGin" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                        </li>
                    </ul>
                </div>
                {/* 4. 기타 링크 */}
                <ul className="etc_link">
                    <li>
                        <a href="#">Nos gins</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                {/* 5. 회사 정보 */}
                <ul className="corp_info">
                    <li>
                        <FontAwesomeIcon icon={faLocationDot} />
                        &nbsp; Château de Bonbonnet 16130 Ars, France
                    </li>
                    <li>
                        © 2023 CITADELLE
                    </li>
                    <li>
                        <a href="http://maisonferrand.com/" target="_blank">MAISONFERRAND.COM</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}; //////////////////////////// Footer 컴포넌트 ////////////////////////////


// 내보내기
export default Footer;