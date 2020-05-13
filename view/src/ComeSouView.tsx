import React from "react";
import { Container, Input, Form, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

interface State {
  comment: string;
}

class ComeSouView extends React.Component<{}, State> {
  private sock: WebSocket;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { comment: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.sock = new WebSocket("ws://comesou-server:5001");
    this.sock.addEventListener("open", () => {
      console.log("接続成功");
    });
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { comment } = this.state;
    console.log(`submit : ${comment}`);
    this.sock.send(comment);
    this.setState({ comment: "" });
  }

  render() {
    const { comment } = this.state;
    return (
      <Container textAlign="center">
        <Header as="h2" icon textAlign="center">
          <Icon name="comments outline" />
          <Header.Content>コメ送</Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              action={{
                color: "blue",
                content: "送信",
                type: "submit",
              }}
              placeholder="コメント"
              onChange={this.handleChange}
              value={comment}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default ComeSouView;
