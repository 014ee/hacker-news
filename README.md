# Hacker News

Y Combinator에서 운영하고 있는 소셜 뉴스 웹사이트 [해커뉴스](https://news.ycombinator.com/ask)의 글을 읽기전용 모바일 반응형 웹으로 리뉴얼한 사이트입니다.

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

- Article, Ask, Home(Best), Jobs, Show 총 5가지 주제 별 페이지 처리
- 각 페이지에 알맞는 데이터로 글 목록 조회
- 글 제목 클릭시 내용과 댓글을 볼 수 있는 세부 페이지로 이동
- useParams를 이용한 게시글 페이지네이션 처리
- localStorage를 이용해 각 페이지의 페이지네이션 번호 저장
- 유저 이름 클릭시 해당 유저의 정보를 보여주는 모달 오픈
- 전역상태 관리를 이용한 다크/라이트 테마
- 로딩되는 동안 스켈레톤 또는 로딩 스피너 노출
- 에러 또는 잘못된 페이지 접근시 각 적절한 안내 페이지 제공

## 수정 및 보완할 점

- 메인 페이지 로딩 시간 단축
