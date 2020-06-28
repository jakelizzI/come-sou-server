import React from "react";
import { Container, Input, Form, Header, Icon, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import SettingModal from "./SettingModal";
import connect from './connection';
import { State } from './interfaces';

class ComeSouView extends React.Component<{}, State> {
  private sock: WebSocket;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { uuid: "", comment: "" };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleUUIDChange = this.handleUUIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.sock = connect();
    this.sock.addEventListener("open", () => {
      console.log("接続成功");
    });
  }
  handleUUIDChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ uuid: event.target.value });
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
        <Menu secondary>
          <SettingModal />
        </Menu>
        <Header as="h2" icon textAlign="center">
          <Icon name="comments outline" />
          <Header.Content>コメ送</Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              placeholder="UUID"
              onChange={this.handleUUIDChange}
              value={uuid}
            />
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

export default ComeSouView;
