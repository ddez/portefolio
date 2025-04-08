const ContactInfos = ({ authorContact }) => {
  return (
    <>
      <p>{authorContact.email}</p>
      <p>{authorContact.phone}</p>
      <p>{authorContact.location}</p>
    </>
  );
};

export default ContactInfos;
