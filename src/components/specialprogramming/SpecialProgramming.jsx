import { useContext, useState } from "react";
import Context from "../../state/Context";
import { Form } from "react-bootstrap";
import "./specialprogramming.css";
import { input, textarea } from "react-bootstrap/FormControl";

const SpecialProgramming = () => {
  const {specialProgrammingText, setSpecialProgrammingText} = useContext(Context);
  // console.log(specialProgrammingText);

  return (
    <div className="specialprogramming_title">
      <div className="specialprogramming_title_top">Special Programming</div>
      <div className="specialprogramming_textarea">
        <label for="specialprogramming_title_text" class="form-label">
          Please describe any special menu items, pricing structures, or other
          unique requirements for your business's menu. Are there any other
          special requests for the programming or implementation of your POS
          system?
        </label>
        <textarea
          class="form-control form-control xl"
          id="specialprogramming_title_text"
          name="sp_text"
          rows="7"
          type="text"
          value={specialProgrammingText}
          onChange={(e) => {setSpecialProgrammingText(e.target.value);}}
        ></textarea>
      </div>
    </div>
  );
};

export default SpecialProgramming;

