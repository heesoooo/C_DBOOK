## admin폴더 경우 (개발작업시 dist 폴더의 산출물 확인하세요.)

## 1. Node.js 설치
gulp를 사용하기 위해서 node.js 를 다운로드 받기

* https://nodejs.org      ```


node와 npm이 제대로 설치되었는지 확인

 ```
* [ 노드 버전 확인 ]   node -v 
* [ npm 버전 확인 ]   npm -v
 ```


## 2. gulp 설치

``` 
npm install gulp -g 
```
gulp를 사용하기 위해서는 npm을 통해 gulp-cli를 전역으로 설치
 ```
* [gulp 전역설치 버전확인]  gulp -v 
 ```


## 3. npm 의존 설치

```
npm install
```

## 4.package 실행

```
npm start
```

 
 ## Project 구조
 ```
 +-- project
 | +-- dist ( 결과물 ) 
 | +-- node_modules
 | +-- src ( 작업폴더)
 | | +-- css
 | | | +-- scss
 | | | +-- webfonts
 | | +-- html
 | | | +-- include
 | | +-- images
 | | +-- js
 | | +-- index.html
 | | +-- list.html(worksheet파일)