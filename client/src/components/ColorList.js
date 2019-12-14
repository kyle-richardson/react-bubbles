import React from "react";
import {setColors, deleteColor, startEdit, saveEdit, cancelEdit, handleChange} from "../actions"
import {connect} from "react-redux"

const ColorList = ({ colors, saveEdit, startEdit, deleteColor, editing, colorToEdit, cancelEdit, handleChange}) => {
  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => startEdit(color.id)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={e=> {
          e.preventDefault()
          saveEdit(colorToEdit)
        }}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              name="color"
              onChange={e =>
                handleChange(e, 'colorToEdit')
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              name="code"
              onChange={e =>
                handleChange(e, 'colorToEdit')
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={cancelEdit}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

const mapStateToProps = state => ({
  colors: state.bubbleList,
  editing: state.isEditing,
  colorToEdit: state.colorToEdit

})

export default connect(mapStateToProps,{ setColors, deleteColor, startEdit, saveEdit, cancelEdit, handleChange})(ColorList);

