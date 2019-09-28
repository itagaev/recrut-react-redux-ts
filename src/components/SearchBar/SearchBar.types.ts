export type SearchBarProps = {
  valueSearchSkill: string;
  valueCitySkill: string;
  handleSearchItemChanged(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSearchClicked(e: React.FormEvent<HTMLButtonElement>): void;
};
