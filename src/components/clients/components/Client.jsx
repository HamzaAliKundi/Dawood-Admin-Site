import React from "react";
import { Link } from "react-router-dom";
import DeleteLoader from "../../resuable/DeleteLoader";

const Client = ({ client, handleDeleteConfrim }) => {
  const [deletePopup, setDeletePopup] = React.useState(false);

  const formattedDate = () => {
    const date = new Date(client.createdAt);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSec = Math.round(diffInMs / 1000);
    if (diffInSec < 60) {
      return "just now";
    } else if (diffInSec < 3600) {
      const diffInMin = Math.round(diffInSec / 60);
      return `${diffInMin} minutes ago`;
    } else if (diffInSec < 86400) {
      const diffInHrs = Math.round(diffInSec / 3600);
      return `${diffInHrs} hours ago`;
    } else {
      const diffInDays = Math.round(diffInSec / 86400);
      return `${diffInDays} days ago`;
    }
  };

  const formatedDAte = formattedDate(client.createdAt);

  const deleteClient = () => {
    setDeletePopup(true);
  }

  const hideDeletePopup = () => {
    setDeletePopup(false)
  }

  return (
    <>
    <DeleteLoader deletePopup={deletePopup} hideDeletePopup={hideDeletePopup} handleDeleteConfrim={() => handleDeleteConfrim(client._id)} />
      <tr className="bg-white border-b  dark:border-gray-300">
        <th className="px-6 py-4">{client.name}</th>
        <td className="px-6 py-4">{client.YoutubeName}</td>
        <td className="px-6 py-4">{client.phone}</td>
        <td className="px-6 py-4">{client.contactvia}</td>
        <td className="px-6 py-4">{formatedDAte}</td>
        <td>
          <Link href="#" className="text-[blue]">
            {" "}
            <span>View</span>{" "}
          </Link>
          /
          <Link href="#" className="text-[red]">
            {" "}
            <span onClick={deleteClient}>Delete</span>{" "}
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Client;
