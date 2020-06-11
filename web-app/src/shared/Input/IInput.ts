export interface IInput {
  title?: string;
  value?: string;
  name: string;
  onChange?: (value: string) => void;
  errors?: any;
}
