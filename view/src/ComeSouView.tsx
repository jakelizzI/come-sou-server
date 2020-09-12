import React from "react";
import validator from "validator";
import { Container, Input, Form, Header, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import connect from './connection';
import { State } from './interfaces';

class ComesouView extends React.Component<{}, State> {
  private sock: WebSocket;

  constructor(props: Readonly<{uuid: string}>) {
    super(props);
    let uuid = props.uuid;
    alert(uuid);
    // if (!validator.isUUID(uuid)) {
    //   uuid = "";
    //   alert("UUIDが読み取れませんでした。")
    // }
    this.state = { uuid: uuid, comment: "" };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.sock = connect();
    this.sock.addEventListener("open", () => {
      console.log("接続成功");
    });
  }

  handleCommentChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { uuid, comment } = this.state;
    this.sock.send(`{"uuid" : "${uuid}", "message": "${comment}"}`);
    this.setState({ comment: "" });
  }

  render() {
    const { uuid, comment } = this.state;
    return (
      <Container textAlign="center">
        <Header as="h2" icon textAlign="center">
          <Icon name="comments outline" />
          <Header.Content>コメ送</Header.Content>
        </Header>
        <Header as="h3" textAlign="center">
          ※このページのURLを共有することで同じ送り先にコメントを送ることができます。
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Segment secondary>送信先 : {uuid}</Segment>
            <Input
              action={{
                color: "blue",
                content: "送信",
                type: "submit",
              }}
              placeholder="コメント"
              onChange={this.handleCommentChange}
              value={comment}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default ComesouView;
