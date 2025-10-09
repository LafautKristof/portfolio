import Title from "../about/Title";
import ContactMe from "./ContactMe";
import InfoContact from "./InfoContact";

const ContactList = () => {
    return (
        <>
            <div className="flex justify-center mt-6">
                <Title title="Contact Me" />
            </div>
            <div className="flex flex-col justify-center gap-3 mt-6">
                <InfoContact />
                <ContactMe />
            </div>
        </>
    );
};
export default ContactList;
