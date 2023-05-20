import { IDropdownOption } from "./IDropdownOption";

export interface ISnowcardField {
  name?: string,
  type?: string,
  value?: any,
  options?: IDropdownOption<string>[]
}
