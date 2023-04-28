import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import Loader from "./Loader";

import { columns } from "../../utils/dataColumns";

import classes from "./Users.module.css";

function Users() {
  const [pending, setPending] = useState(true);
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://react-forms-server.onrender.com/api/users"
    );
    const data = await response.json();
    setUserData(data);
    setFilteredUserData(data);
    setPending(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlerFilter = (e) => {
    if (e.target.value.trim() === "") {
      return;
    }

    const newUserData = userData.filter((user) => {
      return (
        user?.firstName?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user?.lastName?.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setFilteredUserData(newUserData);
  };

  return (
    <section className={`wide-container ${classes["users"]}`}>
      <div className={classes["users-container"]}>
        <div className={classes["search-bar"]}>
          <input
            type="text"
            placeholder="Search for a user"
            onChange={handlerFilter}
          />
          <button onClick={() => setFilteredUserData(userData)}>Refresh</button>
        </div>

        <DataTable
          columns={columns}
          data={filteredUserData}
          pagination
          responsive
          progressPending={pending}
          progressComponent={<Loader />}
        />
      </div>
    </section>
  );
}

export default Users;
