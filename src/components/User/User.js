import TableList from "../TableList/TableList";

function User() {


  const style = {
    border: "1px solid red",
    color: "green",
  };



  const user = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
  ];

  





  return (
    <table style={style}>
     <TableList src={user}/>
   </table>
  );
   
}

export default User;