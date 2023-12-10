import React from "react";

const Contact = () => {
  return (
    <>
      <div id="Contact">
        <div align="center" id="frame">
          <form action>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor>Email</label>
                  </td>
                  <td>
                    <input type="email" name id />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor>Mobile No</label>
                  </td>
                  <td>
                    <input type="tel" name id />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor>Message</label>
                  </td>
                  <td>
                    <input type="text" name id />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
