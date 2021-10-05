import React from "react";
import moment from "moment";

// bad option
// const Profile = ({ ...obj }) => {
//   const getFormatOfDate = moment(new Date(obj.user.birthDate)).format(
//     "DD MMM YY"
//   );

//   return (
//     <div className="profile">
//       <div className="profile__name">{`${obj.user.firstName} ${obj.user.lastName}`}</div>
//       <div className="profile__birth">{`Was born ${getFormatOfDate} in ${obj.user.birthPlace}`}</div>
//     </div>
//   );
// };

const Profile = ({ userData }) => {
  const { firstName, lastName, birthDate, birthPlace } = userData;
  const getFormatOfDate = moment(new Date(birthDate)).format(
    "DD MMM YY"
  );

  return (
    <div className="profile">
      <div className="profile__name">{`${firstName} ${lastName}`}</div>
      <div className="profile__birth">{`Was born ${getFormatOfDate} in ${birthPlace}`}</div>
    </div>
  );
};

export default Profile;
