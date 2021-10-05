import React from "react";
import moment from "moment";

const Profile = ({ ...userData }) => {
  const getFormatOfDate = moment(new Date(userData.user.birthDate)).format(
    "DD MMM YY"
  );

  return (
    <div className="profile">
      <div className="profile__name">{`${userData.user.firstName} ${userData.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${getFormatOfDate} in ${userData.user.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
