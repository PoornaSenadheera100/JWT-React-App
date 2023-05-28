import React from "react";

export default function MyList(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {props.MyList.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </table>
  );
}
