import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...user, id: Date.now() }); // generates fake ID
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="street" placeholder="Street" onChange={(e) => setUser(prev => ({ ...prev, address: { ...prev.address, street: e.target.value } }))} className="w-full p-2 border rounded" />
          <input type="text" name="city" placeholder="City" onChange={(e) => setUser(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))} className="w-full p-2 border rounded" />
          <input type="text" name="company" placeholder="Company Name" onChange={(e) => setUser(prev => ({ ...prev, company: { ...prev.company, name: e.target.value } }))} className="w-full p-2 border rounded" />
          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
