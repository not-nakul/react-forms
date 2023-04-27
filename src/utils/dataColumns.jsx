export const columns = [
  {
    name: "Name",
    selector: (row) => row.firstName + " " + row.lastName,
    sortable: true,
  },
  {
    name: "Age & Gender",
    selector: (row) => row.age + " " + `(${row.gender})`,
    sortable: false,
  },
  {
    name: "Mobile",
    selector: (row) => (row.number ? row.number : "(N/A)"),
    sortable: false,
  },
  {
    name: "Address",
    selector: (row) => {
      const fullAddress =
        row.address +
        ", " +
        row.city +
        ", " +
        row.state +
        ", " +
        row.country +
        " " +
        `(${row.pincode})`;

      const ifAddress = row.address && row.city && row.state && row.country;

      return ifAddress ? (
        <div style={{ whiteSpace: "normal" }}>{fullAddress}</div>
      ) : (
        "(N/A)"
      );
    },
    sortable: false,
  },
  {
    name: "Govt ID",
    selector: (row) => (row.govtIdNumber ? row.govtIdNumber : "(N/A)"),
    sortable: false,
  },
  {
    name: "Guardian Details",
    selector: (row) =>
      row.guardianName +
      " " +
      `(${row.guardianType ? row.guardianType : "N/A"})`,
    sortable: false,
  },
];
