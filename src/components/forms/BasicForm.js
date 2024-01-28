import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { email, password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("please fill the form!");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {allEntry.map((item) => {
        const { email, password } = item;
        return (
          <p>
            Email:{email}, Password:{password}
          </p>
        );
      })}
    </div>
  );
};

export default BasicForm;
