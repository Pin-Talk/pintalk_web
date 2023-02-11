import { UserInfo } from "../../model/interface/userList";

interface Props {
  member?: UserInfo;
}

const UserMembers = ({ member }: Props) => {
  const handleNewWindow = () => {
    window.open(
      `http://localhost:3000/userMemberDetail/${member?.no}`,
      "_blank",
      `width = ${(window.screen.width * 7) / 9}, height = ${(window.screen.height * 9) / 10}`,
    );
  };

  return (
    <tr
      className="bg-gray-50 hover:text-white hover:bg-pintalk-dark-brown cursor-pointer"
      onClick={handleNewWindow}
    >
      <td className="p-3 text-sm whitespace-nowrap">{member?.no}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member?.gender === "M" ? "남자" : "여자"}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member?.name}</td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member?.ssn1}-{member?.ssn2}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member?.phone1}-{member?.phone2}-{member?.phone3}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">{member?.address1}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member?.email}</td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member?.reg_Date?.toString()?.slice(0, 10)}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member?.update_Date?.toString().slice(0, 10)}
      </td>
    </tr>
  );
};

export default UserMembers;
