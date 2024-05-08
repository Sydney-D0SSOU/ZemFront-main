import React from 'react';

const Contact = () => {
  const companyContacts = [
    {
      id: 1,
      name: 'WHANNOU Ornel',
      position: 'Développeur(stagiaire)',
      email: 'ornel.whannou-de-dravo@epitech.eu',
      phone: '+229 41821687',
    },
    {
      id: 2,
      name: 'ASSOUMA Afissou',
      position: 'Développeur(stagiaire)',
      email: 'afissou.assouma@epitech.eu',
      phone: '+229 68842540',
    },
  ];

  const companyAddress = 'Cabinet PHR, Cotonou, Bénin';
  const companyMapUrl = 'https://maps.example.com'; // URL vers la carte de localisation de l'entreprise

  return (
    <div className="bg-[#FE904C] text-[#022146]">
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 absolute left-[40%] top-[70%]">
        {companyContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{contact.name}</h2>
            <p className="text-gray-600">{contact.position}</p>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Adresse</h2>
        <p className="text-gray-600">{companyAddress}</p>
        <a
          href={companyMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block mt-2"
        >
          Voir sur la carte
        </a>
      </div>
    </div>
    </div>
  );
};

export default Contact;
