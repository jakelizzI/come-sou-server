import React, { useState } from "react";
import { Container, Input, Form, Header, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

function UUIDInputView() {
  const [uuid, setUuid] = useState("")
  const history = useHistory()
  return (
    <Container textAlign="center">
      <Header as="h2" icon textAlign="center">
        <Icon name="comments outline" />
        <Header.Content></Header.Content>
      </Header>
      <Header as="h3" textAlign="center">
        ※コメントを送信する先のUUIDを入力してください
      </Header>
      <Form onSubmit={() => history.push(`/${uuid}`)}>
        <Form.Field>
          <Input
            action={{
              color: "blue",
              content: "入室",
              type: "submit",
            }}
            placeholder="UUID"
            onChange={e => setUuid(e.target.value)}
            value={uuid}
          />
        </Form.Field>
      </Form>
    </Container>
  );
}

export default UUIDInputView;
