# come-sou-server

コメ送のサーバー

## 設計

WebSocketのサーバー。ブラウザからのコメントをElectronアプリへブロードキャストする。

## 今後の展望

* electronへのブロードキャストと同時にSlack通知
* electronへのブロードキャストと同時にDynamoDBへ保存
* electronへのブロードキャストと同時にS3へテキストとして保存
