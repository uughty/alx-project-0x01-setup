import React, { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

type UserFormState = Omit<UserProps, "id">;

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserFormState>({
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "address" | "company",
    field: string
  ) => {
    const { value } = e.target;
    setUser(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleGeoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "lat" | "lng"
  ) => {
    const { value } = e.target;
    setUser(prev => ({
      ...prev,
      address: {
        ...prev.address,
        geo: {
          ...prev.address.geo,
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullUser: UserProps = {
      ...user,
      id: Date.now()
    };
    onSubmit(fullUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="website" placeholder="Website" onChange={handleChange} className="w-full p-2 border rounded" />

          {/* Address */}
          <input placeholder="Street" onChange={e => handleNestedChange(e, "address", "street")} className="w-full p-2 border rounded" />
          <input placeholder="Suite" onChange={e => handleNestedChange(e, "address", "suite")} className="w-full p-2 border rounded" />
          <input placeholder="City" onChange={e => handleNestedChange(e, "address", "city")} className="w-full p-2 border rounded" />
          <input placeholder="Zipcode" onChange={e => handleNestedChange(e, "address", "zipcode")} className="w-full p-2 border rounded" />
          <input placeholder="Latitude" onChange={e => handleGeoChange(e, "lat")} className="w-full p-2 border rounded" />
          <input placeholder="Longitude" onChange={e => handleGeoChange(e, "lng")} className="w-full p-2 border rounded" />

          {/* Company */}
          <input placeholder="Company Name" onChange={e => handleNestedChange(e, "company", "name")} className="w-full p-2 border rounded" />
          <input placeholder="Catch Phrase" onChange={e => handleNestedChange(e, "company", "catchPhrase")} className="w-full p-2 border rounded" />
          <input placeholder="BS" onChange={e => handleNestedChange(e, "company", "bs")} className="w-full p-2 border rounded" />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
