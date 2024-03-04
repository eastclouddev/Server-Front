# Server-Front


## Server-Frontの環境を単独で起動する方法
1. Server-Frontへ移動する
```
cd Server-Front
```

2. Dockerをbuildする
```
docker build -f environment/develop/Dockerfile . -t myapp
```

3. Dockerを起動する
```
docker run -p 3000:3000 myapp
```
