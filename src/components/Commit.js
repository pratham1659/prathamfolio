import React from "react";
import axios from "axios";

const Commit = () => {
  const commitChanges = async () => {
    try {
      const response = await axios.post("http://localhost:4000/commit");
      console.log(response.data);
    } catch (error) {
      console.error("Error committing changes:", error);
    }
  };

  return (
    <div>
      <button onClick={commitChanges}>Commit Changes</button>
    </div>
  );
};

export default Commit;
