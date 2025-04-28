import {
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  Select,
} from '../ui/select';
import { twMerge } from 'tailwind-merge';

interface SelectInputPros {
  selectLabel: string;
  placeholder: string;
  className?: string;
  dataItems: string[];
  value?: string;
  onValueChange?: (value: string) => void;
}

export function SelectInput({
  selectLabel,
  dataItems,
  placeholder,
  className,
  onValueChange,
  value,
}: SelectInputPros) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={twMerge('w-full border border-cinzaClaroHM p-3', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel}</SelectLabel>
          {dataItems.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
