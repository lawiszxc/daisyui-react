import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    name: "Mark Lawis",
    email: "mark@example.com",
  },
  {
    id: 2,
    name: "Anna Cruz",
    email: "anna@example.com",
  },
];

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
];

// const data2 = [
//   {
//     id: 1,
//     name: "Mark Lawis",
//     email: "mark@example.com",
//   },
//   {
//     id: 2,
//     name: "Anna Cruz",
//     email: "anna@example.com",
//   },
// ];

// const columns2 = [
//   {
//     name: "Name",
//     selector: (row) => row.name,
//     sortable: true,
//   },
//   {
//     name: "Email",
//     selector: (row) => row.email,
//   },
// ];

const MyDataTable = () => {
  return (
    <DataTable title="CRUD Function" columns={columns} data={data} pagination />
  );
};

export default MyDataTable;
