import React from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../redux/slice/contactSlice";
import profile from "../assets/images/avatar hashnode.jpg";
import { Contact } from "../utils/type";
import { Link } from "react-router-dom";

interface Props {
  contact: Contact;
}

const ContactCard: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3 justify-start items-left bg-white rounded-md p-4 border border-black shadow-lg">
      <div className="flex w-full justify-start items-center gap-2 ">
        <img
          src={profile}
          alt="profile"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg capitalize">{contact.name}</h2>
          <p className=" text-gray-700 font-normal text-sm capitalize">
            {contact.contactNumber}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>

        <p className="text-gray-700 font-normal text-sm ml-2">
          {contact.email}
        </p>
      </div>
      <div className="flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>

        <p className="text-gray-700 font-normal text-sm capitalize ml-2">
          {contact.address}
        </p>
      </div>
      <Link
        to={`contact/edit/${contact.id}`}
        className="mx-2 bg-white px-4 py-1 rounded-md border border-black flex gap-1 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.0}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        Edit
      </Link>
      <button
        className="mx-2 px-4 py-1 rounded-md bg-black text-white flex gap-1 items-center justify-center"
        onClick={() => dispatch(removeContact(contact.id))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.0}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
