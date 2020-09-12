import React from "react";
import { Container, Input, Form, Header, Icon } from "semantic-ui-react";
import { UUIDState } from './interfaces';
import "semantic-ui-css/semantic.min.css";

class UUIDInputView extends React.Component<{}, UUIDState> {
  constructor(props: Readonly<UUIDState>) {
    super(props);
    this.state = { uuid: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ uuid: event.target.value });
  }
  render() {
    return (
      <Container textAlign="center">
        <Header as="h2" icon textAlign="center">
          <Icon name="comments outline" />
          <Header.Content>コメ送　UUID入力</Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              action={{
                color: "blue",
                content: "入室",
                type: "submit",
              }}
              placeholder="UUID"
              onChange={this.handleChange}
              value={this.state.uuid}
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default UUIDInputView;
