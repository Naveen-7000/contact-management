import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ContactForm from "./contactForm";
const EditContactForm = () => {
  const { id } = useParams();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === id)
  );

  return <ContactForm title="Edit Contact" contact={contact} />;
};

export default EditContactForm;
