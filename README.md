# Деплой приложения на сервер при помощи PM2

Деплой приложения «Место» на облачный сервер Яндекс.Cloud.

## Используемые технологии и решения
- PM2 для деплоя, запуска и поддеркжи непрерывной работы приложения
- 
- На сервере установлена операционная система Ubuntu 20.04, Mongodb в качетсве базы данных приложения, Node.js в качестве среды выполнения, сервер Nginx, настроен SSL-сертифкат Let's Encrypt для доменов приложения.

## Инструкции по установке
Для клонирования приложения выполните команду:
`git clone https://github.com/ivanfonin/web-plus-pm2-deploy`

Для запуска деплоя на локальной машине должна быть установлена установлена утилита PM2.

После клонирования приложения создайте файлы настроек `frontend/.env.deploy` и `backend/.env.deploy`, примеры есть в репозитории. И далее из папок `frontend` и `backend` выполните команду `pm2 deploy production setup && pm2 deploy production`.

IP: `51.250.20.122`  
Фронтенд: [ivanfonin.nomoreparties.sbs](https://ivanfonin.nomoreparties.sbs/)  
Бэкенд: [api.ivanfonin.nomoreparties.sbs](https://api.ivanfonin.nomoreparties.sbs/)  