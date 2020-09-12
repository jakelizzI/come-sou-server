export interface UUIDState {
  uuid: string;
  history?: History;
}
export interface State {
  uuid: string;
  comment: string;
}

export type ModalProps = {
  sock: WebSocket
}