export type SearchBarProps = {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  id: string;
  placeholder: string;
};
