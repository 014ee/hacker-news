# Hacker News

Y Combinator에서 운영하고 있는 소셜 뉴스 웹사이트 [해커뉴스](https://news.ycombinator.com/ask)의 글을 읽기전용으로 리뉴얼한 반응형 웹 앱 입니다.

[DEMO](https://hacker-news-014ee.vercel.app/)

![해커뉴스_시안](https://user-images.githubusercontent.com/54103723/190094368-4ae9a612-bfa2-4da3-a03a-e726a36935d9.jpg)
![해커뉴스_시안](https://user-images.githubusercontent.com/54103723/190128069-23b99ef4-a906-499a-9a85-81cc0f4cd498.jpg)

## API

https://github.com/HackerNews/API

## 기술 스택

- create-react-app
- react-router-dom
- styled-components
- react-query
- axios
- react-js-pagination
- react-icons

## 프로젝트 구조

📦src  
 ┣ 📂assets  
 ┃ ┣ 📂icons  
 ┃ ┣ 📂images  
 ┣ 📂components  
 ┃ ┣ 📂Header  
 ┃ ┣ 📂Modal  
 ┃ ┣ 📂SearchBar  
 ┃ ┣ 📂State  
 ┃ ┣ 📂Story  
 ┃ ┣ 📂TabBar  
 ┃ ┗ 📂Ui  
 ┣ 📂context  
 ┣ 📂css  
 ┣ 📂pages  
 ┃ ┣ 📜Article.jsx  
 ┃ ┣ 📜Ask.jsx  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Home.jsx  
 ┃ ┣ 📜Jobs.jsx  
 ┃ ┣ 📜NotFound.jsx  
 ┃ ┗ 📜Show.jsx  
 ┣ 📂settings  
 ┣ 📂utils  
 ┣ 📜App.js  
 ┗ 📜index.js

## 구현한 기능

- 각 페이지에 맞는 데이터 불러오기
- 게시글 페이지네이션 및 현재 페이지 기록
- 게시글 상세 페이지
- 댓글 무한 스크롤
- 모달 팝업
- 다크/라이트 테마
- 스켈레톤, 로딩 스피너
- 에러 또는 잘못된 페이지 접근시 각 적절한 안내 페이지 제공
- 반응형 웹
- 페이지별 코드 스플릿을 통한 로딩 시간 단축

## 수정 및 보완할 점

- 메인 페이지 로딩 시간 단축
