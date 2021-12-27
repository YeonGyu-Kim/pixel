import React from "react";

const ContentsUser = ({ user }: any) => {
  return (
    <section>
      <img src={user.banner}></img>
      <div>{user.username}</div>
      <div>{user.introduction}</div>
    </section>
  );
};

export default ContentsUser;
