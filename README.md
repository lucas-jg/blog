## Blog project

## 폴더 구조

- components : 리덕스 상태에 연결되지 않는 프리젠테이셔널 컴포넌트
- containers : 리덕스 상태와 연결된 컨테이너 컴포넌트
- lib : 백엔드 API 함수들과 코드 스필리팅에 사용되는 asyncRoute
- pages : 라우터에서 사용할 각 페이지 컴포넌트
- store : Ducks 구조를 적용시킨 리덕스 모듈들과 스토어 생성 함수
- styles : 폰트, 색상, 반응형 디자인도구, 그림자 생성 함수 등 프로젝트에서 전역으로 사용되는 스타일

## Redux State

- base : 로그인상태
- editor : 마크다운 에디터 상태
- list : 포스트 목록 상태
- post : 단일 포스트 상태

## Middleware

- redux-pender

## Router

- 홈 : Listpage.js
- 포스트 목록 : Listpage.js
- 포스트 목록(태그 설정) : Listpage.js
- 포스트 읽기 : PostPage.js
- 에디터 : EditorPage.js
- 404 페이지 : NotFoundPage.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
