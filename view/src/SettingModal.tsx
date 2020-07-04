import React, { useState } from 'react';
import {Menu, Button, Header, Icon, Modal, Input, InputOnChangeData} from 'semantic-ui-react';

const SettingModal = () => {
  const [host, setHost] = useState("localhost");
  const [port, setPort] = useState(5001);

  const handleChange = (event: React.ChangeEvent, data: InputOnChangeData) => {
    switch (event.target.id) {
      case 'host' :
        setHost(data.value);
        break;
      case 'port' :
        setPort(Number(data.value));
        break;
    }
  }

  const save = () => {
    console.log('保存 : ' + host + " : " + port);
    localStorage.setItem("comesou-setting", JSON.stringify({host, port}));
  }

  return (
    <Modal trigger={
        <Menu.Item name="modal" position="right">
          <Icon name="setting" />
        </Menu.Item>
      }
      closeIcon>
      <Header icon="setting" content="設定" />
      <Modal.Content>
        <Input id="host" label="接続先URL" placeholder="localhost" onChange={(event, data) => handleChange(event, data)} />
        <Input id="port" label="ポート" placeholder="port" onChange={(event, data) => handleChange(event, data)} />
      </Modal.Content>
      <Modal.Actions>
        <Button color="blue" onClick={save}>
          保存
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SettingModal;