import React, {FC} from 'react';

type Props ={
    name:string;
    label:string;
    type:string;
    // myStyle: string|null;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => void
} 

const FormInput: React.FC<Props> = (props: Props) => {
  return (
    <div className='mt-4'>
        <label htmlFor={props.name} className="block text-sm font-medium text-label ">{props.label}</label>
        <input type={props.type} onChange={props.onChange} name={props.name} id={props.name} placeholder="Marteau Afrobeat" className="bg-[#EBEBEB] focus:border-none  rounded-lg  block w-full p-2.5 " required />
    </div>
  )
}
export default FormInput;