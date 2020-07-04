import setting from './Setting.json';

const connect = (): WebSocket => {
  return new WebSocket(`ws://${setting.host}:${setting.port}`);
}

export default connect;