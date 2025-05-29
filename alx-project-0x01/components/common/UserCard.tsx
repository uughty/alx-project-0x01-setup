import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name} ({username})</h2>
      <p className="text-gray-600 mt-2">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <p className="text-gray-600 mt-2">🏢 {company.name}</p>
      <p className="text-gray-500">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
