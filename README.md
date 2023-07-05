# 🍹citadellegin-app🍸
React를 활용해서 만든 SPA 포트폴리오입니다.   
이 레파지토리는 사이트 배포용이며 코드를 보시려면 <a href="https://github.com/Ba-latte/FED-PJ-WBS-youj" target="_blank">여기</a>로 이동해주세요.

<br /><br />

## CONTENTS
1.	[기획의도](#1-기획의도)
2.	[개발환경](#2-개발-및-배포-환경)
3.	[프로젝트 기획](#3-프로젝트-기획)
4.	[주요기능](#4-주요기능)
5.	[테스트 케이스](#5-테스트-케이스)
6.	[히스토리](#6-히스토리)

<br /><br />

## 1. 기획의도
약 6주의 기간을 잡고 정해진 기간 안에 리액트를 활용하여 SPA를 만들고자 하였습니다.

<br /><br />

## 2. 개발 및 배포 환경
### 2-1. 개발 환경
React와 여러 라이브러리를 사용했으며 Node.js에서 구동됩니다.

### 2-2. 배포 환경
깃허브 페이지를 이용해 배포하였습니다.   
chrome을 기준으로 개발하였기 때문에 되도록 chrome을 사용해주시기 바랍니다.   
포트폴리오 사이트 주소는 다음과 같습니다.   
👉 <a href="https://ba-latte.github.io/citadellegin-app/" target="_blank">citadellegin-app</a>

<br /><br />

## 3. 프로젝트 기획
### 3-1. 사이트 선정
👉 <a href="https://citadellegin.com/en/" target="_blank">Citadelle</a>   
선정한 사이트는 진(gin)을 판매하는 프랑스 회사의 영문 사이트입니다.   
기존에 사이트를 구현할 만큼의 데이터를 가지고 있지 않아서 적절한 양의 콘텐츠를 가지고 있는 사이트를 선정해 직접 구현했습니다.   
페이지간 이동이 순환구조로 되어 있다는 점, 하나의 데이터를 여러 페이지에서 쓴다는 점이 SPA를 만들기에 용이하다고 생각했습니다.   
그리고 자사 제품을 돋보이게 만드는 스크롤 이벤트 애니메이션이 특징적이라서 이 사이트를 선정했습니다.   

### 3-2. 사이트 설계
![Site_structure_diagram](https://github.com/Ba-latte/citadellegin-app/assets/118030935/759a55f1-258a-41d3-adc6-31eeb4181e70)   
사이트는 2depth구조로 만들어서 'Limited'페이지에서 한정판 시리즈를 한번에 모아 볼 수 있도록 했습니다.   
섹션 소개 모듈, 스와이프 배너 모듈과 같이 기본적인 형태의 모듈을 만들어 필요한 곳에서 사용할 수 있도록 모듈화 작업을 했습니다.   
1depth 페이지 하단에 다음페이지로의 이동을 위한 링크 모듈을 만들어서 각 페이지들을 순환하는 구조로 설계하였습니다.   

<br /><br />

## 4. 주요기능
### 4-1. 로딩 페이지
![loading](https://github.com/Ba-latte/citadellegin-app/assets/118030935/1183cdc8-408b-45ab-acb7-7d14ac82053b)   
사이트 진입시 로딩 화면으로 연결되어 일정 시간이 지난 후 메인 화면을 띄웁니다.
사이트에서 새로고침할 때마다 로딩 화면을 띄우도록 했습니다.


### 4-2. 쿠키를 활용한 법적 나이 체크 팝업창
![legal_age](https://github.com/Ba-latte/citadellegin-app/assets/118030935/9330c0a7-d26c-4a53-8244-961e0dd39a0c)   
술과 관련된  처음 사이트에 들어왔을 때 법적 나이를 확인하는 팝업창을 띄웁니다.   
이는 React Modal라이브러리와 Cookie 라이브러리를 활용하여 구현하였습니다.   
No 버튼을 클릭하면 사이트 진입이 불가하며 하단에 메시지를 띄웁니다.   
Yes 버튼을 클릭하면 메인 화면으로 바뀌며 하단의 7일간 보지 않기 체크박스의 체크 여부에 따라 팝업창의 팝업 여부가 나뉩니다.   
7일간 보지 않기 기능은 쿠키를 활용하여 구현하였습니다.


### 4-3. 1depth 페이지 순환 구조
![next_link](https://github.com/Ba-latte/citadellegin-app/assets/118030935/375150b4-e4f8-4b8f-83d3-05677b10be86)   
1depth 페이지의 최하단에 다음 페이지로의 링크 모듈 컴포넌트를 추가하여 순환하는 구조로 만들었습니다.   
props로 1depth 페이지 컴포넌트에 가지고 들어갈 데이터를 구분하여 각 페이지마다 다음 페이지의 데이터를 가져오도록 했습니다.


### 4-4. 스크롤 이벤트에 따른 보틀 회전 애니메이션
![bottle_spin_animation01](https://github.com/Ba-latte/citadellegin-app/assets/118030935/9bbf403b-7d79-4e12-ba71-d78d28e60ddf)   
![bottle_spin_animation02](https://github.com/Ba-latte/citadellegin-app/assets/118030935/8ad813bb-3d42-472e-b162-dc1fde703887)   
![bottle_spin_animation03](https://github.com/Ba-latte/citadellegin-app/assets/118030935/c16e6969-60b9-4e82-a7ea-d626aeb1aa10)   
스크롤 이벤트가 발생할 때마다 이전 스크롤 위치값과 현재 스크롤 위치값을 구해와 값을 비교하여 방향을 정합니다.   
스크롤 방향에 따라 36장의 사진에 붙인 넘버를 증감시키며 한계값에 도달하면 첫번째 넘버 혹은 마지막 넘버로 바뀌도록 하여 360도 회전하게 만듭니다.   
회전 속도를 조절하기 위해 스크롤 이벤트에 setTimeout을 걸어 이벤트 발생 횟수를 조절하였습니다.   

<br /><br />

## 5. 테스트 케이스

<br /><br />

## 6. 히스토리

<br /><br />



