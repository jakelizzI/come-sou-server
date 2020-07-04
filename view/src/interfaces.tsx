export interface State {
  uuid: string;
  comment: string;
}

export type ModalProps = {
  sock: WebSocket
}