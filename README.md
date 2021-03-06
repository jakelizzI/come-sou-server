# コメ送

このリポジトリは、もう一つの「コメ送アプリ（ https://github.com/jakelizzI/come-sou-app/releases/tag/0.1.0-alpha ）」のサーバーアプリケーションです。

## 各アプリケーション

- view : コメントを送信するためのview。シンプルなReactのSPAです。
- server : WebSocketサーバです。アプリやviewからこのサーバに対して接続を行う中継地点になります。

## 使い方

1. UUIDのインプット欄にアプリケーションの設定画面に表示されているUUIDを入力してください。
2. コメントのインプット欄に送信したいコメントを入力してEnterもしくは送信ボタンを押すと、コメントが流れます。

### イントラネット

イントラネットで使用する場合は Docker として使用すると、楽にserverとviewの環境が整います。

### インターネット

AWSの場合、ECSにServerをデプロイし、S3にviewのReactアプリをデプロイして使用しています。

※ServerがSSL対応していないので、S3にデプロイしたReactアプリケーションは `http` で接続してください。

---

# come-sou

This repository is another "come-sou-app" server application. : https://github.com/jakelizzI/come-sou-app/releases/tag/0.1.0-alpha

## Each Application

- view : A simple React SPA with a view to send comments.
- server : WebSocket server. Applications and views connect to this server.

## How to use

1. In the UUID input field, enter the UUID as it appears in the application's configuration screen, and then click please give me.
2. Type the comment you want to send in the comment input field and press Enter or the Send button and your comment will flow.

### Intranet

If you use it as a Docker for your intranet, you can easily set up a server and view environment.

### Internet

In the case of AWS, you can deploy the Server to ECS and view React app to S3. It is deployed and used.

As the Server does not support SSL, the React application deployed on S3 should be connected with `http`.
