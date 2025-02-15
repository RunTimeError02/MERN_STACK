import { React, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";

const Addblog = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        console.log(e)
    };
    return (
        <div>
            <h3 className="mb-4">Add Blog</h3>
            <div className="">
                <form action="">
                    <CustomInput type='text' label='Enter Blog title' />
                    <select name="" id="">
                        <option value=''> Select Blog Category</option>
                    </select>
                   <ReactQuill
                   theme="snow"
                   value={desc}
                   onChange={(evt) => {
                    handleDesc(evt.target.value);
                   }}/>
                </form>
            </div>
        </div>
    );
}

export default Addblog;