![enter image description here](https://user-images.githubusercontent.com/24728385/148955263-b3a0e063-6950-46f2-82e9-1fcabc24e19e.jpeg)

<h1 align="middle">[과제] ncnc</h1>

니콘내콘 클론코딩 [니콘내콘](https://ncnc.app/categories/67)
<br/>

# 🔗 배포

[과제 배포](https://eloquent-hopper-416b1b.netlify.app/)

<!--
[![Netlify Status](https://api.netlify.com/api/v1/badges/{appid}/deploy-status)](https://app.netlify.com/sites/{address}/deploys) -->

<br/>

# 기술스택

<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

<img alt="styled-components" src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img alt="eslint" src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img alt="prettier" src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

<img alt="cypress" src="https://img.shields.io/badge/cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">

# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/pre-onboarding-course-team-6/3rd-week-ncnc.git

$ cd 3rd-week-ncnc

$ yarn i

$ yarn dev

http://localhost:3000/ 접속
```

<br/>

# 🏹 과제 구현 목록 및 담당

<hr/>

### [22_01 민무길](https://github.com/gilmujjang)

1. 홈화면 구현
2. 고객센터 화면 구현
3. css 담당

### [22_01 김선명](https://github.com/BGM-109)

1. 페이지 라우팅
2. 제품 상세정보, 주문화면
3. 배포

<br/>

# 🏗 프로젝트 구조

```
📦src
├──📂components
│ ├──📜Appbar
│ ├──📜Banner
│ ├──📜CompanyContent
│ ├──📜HomeCategory
│ ├──📜ProductIntro
│ ├──📜ProductList
│ └──📜Layout.tsx
├──📂cypress
├──📂pages     //route page별 파일
│ ├──📜brands
│ ├──📜categories
│ ├──📜contacts
│ ├──📜items
│ ├──📜_app.tsx
│ ├──📜_document.tsx
│ └──📜index.tsx
├──📂public
├──📂shared   //공통 변수, 아이콘 등
│ ├──📜const.ts
│ ├──📜constant.ts
│ ├──📜icons.tsx
│ └──📜type.ts
├──📜styles
├──📜package.json
├──📜README.md

```

<br/>

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)
  <br/>

  # 🧪Test

  ## 🛠Test 시작🛠

  ```
    yarn dev      //서버 on
    yarn cypress
  ```

  ![image](https://user-images.githubusercontent.com/40172373/154136233-fc405ef1-3ce9-4f4b-b0c5-83385bd1da5c.png)
  cypress가 실행되면 app.spec.js를 실행한다
  약 20초가량 소요된다

  ## 테스트 항목❗

  각 페이지의 컴포넌트들이 렌더링 되는지 확인하고 링크들이 정상 작동하는지 위주로 테스트했다.

  ### 홈 페이지

  1. 배너, 카테고리 메뉴, 땡처리콘이 렌더링 되는지
  2. 카테고리 메뉴의 링크가 정상 작동 하는지
  3. 마이 페이지가 정상 출력 되는지

  ### 고객센터 페이지

  1. 각 링크, 아이콘 정상 클릭 되는지
  2. FAQ 클릭시 응답내용이 렌더링 되고 구매와 판매 탭 전환 되는지

  ### 카테고리 페이지

  1. 앱바 정상 작동 하는지
  2. 브랜드 카테고리 정상 작동 하는지

  ### 브랜드 페이지

  1. 앱바 정상 작동 하는지
  2. 제품 리스트 정상 작동 하는지

  ### 아이템 페이지

  1. 앱바 정상 작동 하는지
  2. 아이템 정보 정상 출력 되는지
  3. 옵션선택, 취소 구매하기 정상 작동하는지

## 👨‍👨‍👦‍👦 팀구성원 소개

| [<img src="https://github.com/BGM-109.png" width="100px">](https://github.com/BGM-109) | [<img src="https://github.com/gilmujjang.png" width="100px">](https://github.com/gilmujjang) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
|                       [22_01 김선명](https://github.com/BGM-109)                       |                        [22_01 민무길](https://github.com/gilmujjang)                         |
