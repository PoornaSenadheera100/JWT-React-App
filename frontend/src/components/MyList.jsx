import React from "react";

export default function MyList(props) {
  return (
    <table style={{ width: "500px" }}>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {props.myList.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </table>
  );
}
