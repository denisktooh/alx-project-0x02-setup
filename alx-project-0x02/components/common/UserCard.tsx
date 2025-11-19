import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
      <div className="mb-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      <p className="text-gray-600 dark:text-gray-300">{email}</p>

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        <p><span className="font-medium text-gray-700 dark:text-gray-200">Phone:</span> {phone}</p>
        <p><span className="font-medium text-gray-700 dark:text-gray-200">Website:</span> {website}</p>
        <p><span className="font-medium text-gray-700 dark:text-gray-200">Company:</span> {company.name}</p>
      </div>

      <div className="mt-4 text-xs text-gray-400">
        <span>ID: {id}</span> • <span>{address.city}</span>
      </div>
    </div>
  );
};

export default UserCard;
