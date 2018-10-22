import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
import "../style/style.css";

const Table = ({ data }) =>
  !data.length ? (
    <p>Nada en la DB</p>
  ) : (
    <div className="column">
      <div className="smalltitle">
        Ultimos Chismes:
      </div>
      <table>
        <thead>
          {}
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;