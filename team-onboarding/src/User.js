import React from "react";

export function Users(props) {
  const { teamList } = props;
  return (
    <div>
      {teamList.length
        ? teamList.map(tm => (
            <div key={tm.id}>
              The email address of {tm.name} is {tm.email}
            </div>
          ))
        : "No Team Member"}
    </div>
  );
}
