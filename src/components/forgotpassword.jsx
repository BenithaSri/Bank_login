import React from 'react';

function forgotpassword() {
  return (
    <div>
      <>
      <h1>Forgot Password</h1>
      <form>
        <label htmlFor="email"> Email </label>
        <input type="email" id="email" name="email" required />
      </form>
      </>
    </div>
  );
}

export default forgotpassword;
