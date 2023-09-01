import { Colors } from "breadcrumbs-theme";



export type OptionType = string | React.ReactNode


export interface DropdownProps {
    options: OptionType[]
    onSelect?: (selectedOption: OptionType) => void
    placeholder?: string
    backgroundColor?: Colors
}