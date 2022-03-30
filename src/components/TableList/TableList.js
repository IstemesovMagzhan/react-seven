function TableList(props) {


  const  Table = props.src.map((user) => (
    <tr>
      <td>
        {user.userId}
      </td>
      <td>
        {user.id}
      </td>
      <td>
        {user.title}
      </td>
    </tr>
  ));






  
  return ( <div>{Table}</div> );
}

export default TableList;