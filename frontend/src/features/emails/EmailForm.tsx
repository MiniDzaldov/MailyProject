import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const EmailForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // TODO: send email via backend
    console.log('Sending email:', { subject, message });
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Email</h2>

      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Subject</label>
        <InputText
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Message</label>
        <InputTextarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="Write your message..."
          className="w-full"
        />
      </div>

      <Button
        label="Send Email"
        icon="pi pi-send"
        className="w-full bg-indigo-400 hover:bg-indigo-500 text-white"
        onClick={handleSend}
      />
    </div>
  );
};

export default EmailForm;
