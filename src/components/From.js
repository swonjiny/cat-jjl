import {useState} from "react";
import {includesHangul} from "../util";

const Form = ({ onUpdateMainCat }) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const userValue = e.target.value;
        setErrorMessage("");
        if(includesHangul(userValue)){
            setErrorMessage("한글은 입력안됨!")
        }
        setValue(userValue.toUpperCase());
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
        if(value===""){
            setErrorMessage("값을 입력해주세요");
            return
        }
        onUpdateMainCat(value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="영문 대사를 입력하세요"
                value={value}
                onChange={handleInputChange}
            />
            <button type="submit">생성</button>
            <p style={{color: "red"}}>{errorMessage}</p>
        </form>
    )
}

export default Form;
