---
date: 2026-03-12 22:00:44
title: Untitled
categories:
  - Teek
coverImg: https://img.onedayxyy.cn/images/Teek/TeekCover/2.webp
---
```
version: '3'

services:
  lsky-pro:
    image: dko0/lsky-pro:latest
    container_name: lsky-pro
    restart: always
    volumes:
      - /home/lsky-pro/data:/var/www/html  # 这里的 data 目录会存储你的图片和配置
    ports:
      - "8095:80"             # 将容器 80 端口映射到宿主机的 8080
    environment:
      - MYSQL_HOST=db         # 内部数据库连接
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=0102ilyyy..

  db:
    image: mariadb:10.5
    container_name: lsky-db
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=0102ilyyy..
      - MYSQL_DATABASE=lsky
      - MYSQL_USER=lsky
      - MYSQL_PASSWORD=0102ilyyy..
    volumes:
      - /home/lsky-pro/mysql:/var/lib/mysql
```

```
docker pull lsky-org/lsky-pro:latest
```

[![favicon.ico](https://image.zhuzha.net/lm/2026/03/12/69b2d1cc2b419.ico)](https://image.zhuzha.net/lm/2026/03/12/69b2d1cc2b419.ico)

![favicon.ico](https://image.zhuzha.net/lm/2026/03/12/69b2d1cc2b419.ico)