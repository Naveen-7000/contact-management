import React from 'react'

interface Props{
    title: string;
    data:string;
}
const CountCards:React.FC<Props> = ({title,data}) => {
  return (
    <div className={`bg-slate-200 flex justify-center items-start flex-col gap-2 rounded-lg py-4 px-12`}>
       <h1 className='text-md font-semibold text-blue-950'>{title}</h1>
       <div className='flex flex-row justify-center items-center gap-4'>
       <h1 className='text-lg font-bold text-blue-950'>{Number(data).toLocaleString()}</h1>
       {
        title === 'Total Cases' ? 
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#172554" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
</svg> : title === 'Active Cases' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#172554" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
</svg> : title === 'Deaths' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fb5050" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#172554" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
</svg>
       }
       </div>
    </div>
  )
}

export default CountCards