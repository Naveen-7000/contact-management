import React from "react";
import {useSelector} from 'react-redux';
import { RootState } from "../redux/store";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

interface Props{
  title:string,
}
const Home:React.FC<Props>=({title})=>{
  const contacts = useSelector((state:RootState)=>state.contacts.contacts)
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center flex-row">
        <h1 className=" font-bold text-2xl ">{title}</h1>
        {/* navigate to add contact page */}
        <Link
        to={"/contact/add"}
        className="btn bg-white px-4 py-1 border-2 border-black rounded-lg font-semibold capitalize flex gap-1 items-center hover:bg-slate-100 transition-all">
          <span>Add contact</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>{" "}
        </Link>
      </div>
      {/* handle contact cards */}
      <div className=" p-4 rounded-lg w-full flex justify-center items-center gap-1 flex-col">
        {
          contacts.length > 0 ?
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            contacts.map((contact,index)=>(
              <ContactCard key={contact.contactNumber} contact={contact} />
            ))
          }
        </div>
        :
         <h1 className="font-bold text-lg mt-20">No Contact Found</h1> 
        }
      </div>
    </div>
  );
}

export default Home;
