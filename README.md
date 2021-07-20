# Silicon-Valley-Internship-Dayfly

## 👨‍👧‍👦 Member
| 김서연 | 방근영 | 이지혜 | 장현우 | 김하은 |
| :----: | :----: | :----: |:----: | :----: |
| [@ksy991018](https://github.com/ksy991018) | [@banggu0321](https://github.com/banggu0321) | [@penguin1109](https://github.com/penguin1109) |[@aswooo](https://github.com/aswooo) |[@harloxx](https://github.com/harloxx) |

## ✏️ How to use ( Follow 4 steps)

### 1. Cloning
```
$ git clone https://github.com/Dayflt/Silicon-Valley-Internship-Dayfly.git
```

### 2. Frontend: React ⚛️
  - install packages
    ```
    $ cd Frontend
    $ npm i
    ```
### 3.  Backend: Flask 🌶
  - Download *vox-cpk.pth.tar* [here](https://drive.google.com/drive/folders/1PyQJmkdCsAkOYwUyaj_l-l0as-iLDgeH) and add it inside Docker\Backend\web\AI\ after changing its name with *mraa.tar*

### 4.  Docker 🐳
  #### 개발버전
  - 맨처음 서버 올릴때 
  ```
  $ docker-compose up --build
  ```
  - 서버 내릴때
  ```
  $ docker-compose down 
  or
  $ docker-compose down -v #볼륨 삭제까지 한번에
  ```
  - 서버 다시 올릴때
  ```
  $ docker-compose up
  ```
  - Database 확인하고 싶을때
   ```
  $ docker-compose exec postgres_db psql --username=postgres --dbname=video
  (psql)
  video=# \l                            #모든 db목록 보기
  video=# \dt                           #video db와 연결된 모든 테이블 보기
  video=# select * from video_info;     #video_info에 저장된 값 모두 보기
   ```
  
  #### 배포버전 
  - 맨처음 서버 올릴때
  ```
  $ docker-compose -f docker.compose.yml up --build
  ```
  - 서버 내릴때
  ```
  $ docker-compose down 
  or
  $ docker-compose down -v #볼륨 삭제까지 한번에
  ```
  -  서버 다시 올릴때
  ```
  $ docker-compose -f docker.compose.yml up
  ```
  
### 👀 Used Model
[Transfer model](https://github.com/AliaksandrSiarohin/first-order-model)  
        
### 💻 System Architecture

![시스템아키텍쳐-최종](https://user-images.githubusercontent.com/72537563/125903428-906468b5-f4e8-498b-91e3-e348cc90e1e5.png)
    

## 💡 Tech Stack

|         Frontend         |      Backend & AI      |         etc          |
| :----------------------: | :---------------: | :------------------: |
| ![react](https://img.shields.io/badge/react-v17.0.2-9cf?logo=react) ![Nodejs](https://img.shields.io/badge/Nodejs-v14.16.0-blue?logo=node.js)   ![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript) ![Bootstrap](https://img.shields.io/badge/bootstrap-v1.4.3-9cf?logo=bootstrap) ![axios](https://img.shields.io/badge/axios-v0.21.1-9cf?color=purple)| ![Flask](https://img.shields.io/badge/flask-v2.0.1-green?logo=flask)  ![Python](https://img.shields.io/badge/python-v3.8.10-skyblue?logo=python) ![Gunicorn](https://img.shields.io/badge/gunicorn-v20.1.0-darkgreen?logo=gunicorn) ![postgreSQL](https://img.shields.io/badge/postgreSQL-v12.0-blue?logo=postgresql) ![Pytorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white)   | ![Docker](https://img.shields.io/badge/docker-v20.10.7-brightgreen?logo=docker)  ![Nginx](https://img.shields.io/badge/Nginx-v1.21.1-brightgreen?logo=nginx)   ![github](https://img.shields.io/badge/github-gray?logo=github)![VScode](https://img.shields.io/badge/VScode-v1.58.1-blue?logo=visual-studio-code) ![Google Cloud Platform](https://img.shields.io/badge/Google_Cloud_Platform-VM_instance-red?logo=gcp) ![GitKraken](https://img.shields.io/badge/GitKraken-gray?logo=GitKraken) ![Swagger](https://img.shields.io/badge/Swagger-gray?logo=Swagger) ![Postman](https://img.shields.io/badge/Postman-gray?logo=Postman) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)|  

## 🔧 Directory Structure
```bash
├── README.md                 - 리드미 파일
│
├── Backend/             - 백엔드 플라스크 디렉토리
│   ├── Dockerfile        - 백앤드 도커파일
│   ├── run.py                
│   ├── views.py               - SQLAlchamy의 기능을 정의한 파일
│   ├── dayfly-318913-a4b443321e00.json         
│   ├── requirements.txt     - 모듈들을 정리한 파일
│   └── web/
│        ├── AI/                  - AI모델 알고리즘
│        ├── data/result/         - 백엔드 동영상 임시 저장 디렉토리
│        ├── __init__.py
│        ├── config.py
│        ├── gcp.py
│        ├── models.py
│        ├── prdedictmix.py
│        ├── routes.py
│        ├── views.py
│        └── static/
│              └── swagger.json 
│
├── Frontend/
│   ├── Dockerfile        - 프론트앤드 도커파일
│   ├── public/    
│   ├── package.json & package.lock.json    
│   └── src/ 
│        ├── App.js & App.test.js & setupTest.js
│        ├── App.css
│        ├── index.js & index.css
│        └── page/
│   	        ├── css /    - 컴포넌트들의 css
│   	        ├── imgs /     - 컴포넌트들의 image
│   	        ├── Gallery.js          
│   	        ├── Home.js         
│   	        ├── Preview.js         
│   	        ├── Record.js         
│   	        ├── Result.js        
│   	        ├── Selection.js  
│   	        └── components/  
│                   └── Modal.js
├── Nginx/
│   ├── Dockerfile        - Nginx 도커파일
│   └── nginx.conf
│
├── Settings/             - 환경변수 설정 파일
│   ├── dev/        - Nginx 도커파일
│   │    └── .env.dev
│   └── prod/
│        └── .env.prod
├── docker-compose.yml           - 개발용
├── docker-compose.prod.yml      - 배포용 
└── .gitignore		
```  
