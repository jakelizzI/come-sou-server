import React, { useEffect, useState } from "react";
import { Container, Input, Form, Header, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import connect from './connection';
import { Params } from './interfaces';
import { useParams } from "react-router-dom";

function ComesouView() {
  const [uuid, setUuid] = useState(useParams<Params>().uuid);
  const [comment, setComment] = useState("");
  const [sock, setSock] = useState(connect());
  useEffect(() => {
    sock.addEventListener("open", () => console.log("connection succeeded."));
  }, [sock, uuid]);

  return (
    <Container textAlign="center">
      <Header as="h2" icon textAlign="center">
        <Icon name="comments outline" />
        <Header.Content>コメ送</Header.Content>
      </Header>
      <Header as="h3" textAlign="center">
        ※このページのURLを共有することで同じ送り先にコメントを送ることができます。
      </Header>
      <Form onSubmit={() => {
        console.log(`uuid : ${uuid}, message: ${comment}`);
        sock.send(`{"uuid" : "${uuid}", "message": "${comment}"}`);
        setComment("");
      }}>
        <Segment secondary>送信先 : {uuid}</Segment>
        <Form.Field>
          <Input
            action={{
              color: "blue",
              content: "送信",
              type: "submit",
            }}
            placeholder="コメント"
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
        </Form.Field>
      </Form>
    </Container>
  );
}

export default ComesouView;
