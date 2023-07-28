import { useEffect } from "react";
import Layout from "../components/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../redux/slice/contactSlice";
import { useNavigate } from "react-router-dom";
import { Contact } from "../utils/type";
import { v4 as uuidv4 } from "uuid";
interface Props {
  title: string;
  contact?: Contact;
}

interface inputs {
  name: string;
  contactNumber: string;
  email: string;
  address: string;
}
const ContactForm: React.FC<Props> = ({ title, contact }) => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<inputs>();

  useEffect(() => {
    if (contact) {
      const { name, email, contactNumber, address } = contact;
      setValue("name", name);
      setValue("email", email);
      setValue("contactNumber", contactNumber);
      setValue("address", address);
    }
  }, [contact, setValue]);

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<inputs> = (data) => {
    const updatedContact = { ...data, id: contact ? contact.id : uuidv4() };
    if (contact) {
      dispatch(updateContact(updatedContact));
    } else {
      dispatch(addContact(updatedContact));
    }
    navigate("/");
  };

  const onCancel = (e: any) => {
    navigate("/");
  };

  return (
    <Layout>
      <h1 className=" font-bold text-2xl ">{title}</h1>
      <div className="p-4 bg-white rounded-lg mt-4 shadow-lg mx-auto border-2 border-black lg:w-1/3 md:1/3 sm:w-full">
        <h3 className="text-xl font-semibold text-center">Create Contacts</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 lg:p-6 sm:p-2 "
        >
          <input
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="border border-black placeholder-black rounded-md p-2  outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm ">This field is required</p>
          )}
          <input
            placeholder="Enter your contact number"
            {...register("contactNumber", { required: true })}
            className="border border-black placeholder-black rounded-md p-2  outline-none"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
          <input
            placeholder="Enter your Email"
            {...register("email", { required: true })}
            className="border border-black placeholder-black rounded-md p-2  outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ">This field is required</p>
          )}
          <input
            placeholder="Enter your address"
            {...register("address", { required: true })}
            className="border border-black placeholder-black rounded-md p-2  outline-none"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
          <input
            type="submit"
            className="bg-black text-white p-2 rounded-lg cursor-pointer"
          />
          <button
            onClick={(e) => onCancel(e)}
            className="bg-black text-white p-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactForm;
