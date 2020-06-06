# コメ送

このリポジトリは、もう一つの「コメ送アプリ（ https://github.com/jakelizzI/come-sou-app/releases/tag/0.1.0-alpha ）」のサーバーアプリケーションです。

## 各アプリケーション

- view : コメントを送信するためのview。シンプルなReactのSPA。
- server : WebSocketサーバ。アプリやviewからこのサーバに対して接続を行う。

## 使い方

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

### Intranet

If you use it as a Docker for your intranet, you can easily set up a server and view environment.

### Internet

In the case of AWS, you can deploy the Server to ECS and view React app to S3. It is deployed and used.

As the Server does not support SSL, the React application deployed on S3 should be connected with `http`.
