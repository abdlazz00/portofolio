import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      name: 'Email',
      value: 'abdulazizhermanto@gmail.com',
      link: 'mailto:abdulazizhermanto@gmail.com',
      icon: <Mail className="text-primary w-6 h-6" />
    },
    {
      name: 'Instagram',
      value: '@abdulazizhrmnt_',
      link: 'https://www.instagram.com/abdulazizhrmnt_/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
      )
    },
    {
      name: 'LinkedIn',
      value: 'Abdul Aziz Hermanto',
      link: 'https://www.linkedin.com/in/abdul-aziz-8261311a3/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-heading mb-4">Contact Me</h2>
        <p className="text-body mb-12 max-w-2xl mx-auto">Mari terhubung! Jika Anda memiliki pertanyaan, peluang kerja sama, atau sekadar ingin menyapa, jangan ragu untuk menghubungi saya melalui kontak di bawah ini.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-secondary rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">{contact.name}</h3>
              <p className="text-body text-sm font-medium">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
