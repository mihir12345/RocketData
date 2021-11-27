import React from "react";
import Cards from "../cards/card-component";
import { connect } from "react-redux";
import { setSearchField } from "../redux/searchField/searchField.actions";
import './card-list-styles.css'


const Cardlist = (props) => {
  const handleChange = (e) => {
    props.setSearchField(e.target.value);
  };

  const filterrocket = props.rocket.filter((rocket) =>
    rocket.mission_name
      .toLowerCase()
      .includes(props.searchField.toLocaleLowerCase())
  );

  return (
    <>
      <input
        className="search"
        type="search"
        placeholder="Search rocket"
        onChange={handleChange}
      />

      <div className="card-list">
        {filterrocket.map((rocket, i) => (
          <Cards key={i} rocket={rocket} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  rocket: state.rocket.rocket,
  searchField: state.searchField.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchField: (searchField) => dispatch(setSearchField(searchField)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cardlist);

// export default Cardlist
