import React from 'react'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, FieldValues,Path,Control} from 'react-hook-form'


interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = ({control,name,label,placeholder,type="text"}:FormFieldProps<T>) => {
  return (
    <div>
  <Controller name={name}
   control={control}
    render = {({field})=>(
        <FormItem>
        <FormLabel className='label  !text-light-100 !font-normal'>{label}</FormLabel>
          <FormControl>
          <Input className=' !bg-dark-200 !rounded-full !min-h-12 !px-5 placeholder:!text-light-100' placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
  )} 
      
      />
    </div>
  )
}

export default FormField
