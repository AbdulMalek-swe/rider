import { useState } from "react";
import { useController } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select/base";
const customInputFieldDesign = (props, pos) => {
  const labelPosition = () => {
    if (pos === "left") {
      return `${
        props?.error
          ? "border-red-500"
          : "border-lightBorder dark:border-darkBorder"
      } text-sm bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-darkTitle flex gap-1   flex-grow border rounded-l-md p-[14px] block ${
        props?.className
      }`;
    } else if (pos === "top") {
      return `${
        props?.error
          ? "border-red-500"
          : "border-lightBorder dark:border-darkBorder"
      } text-sm   text-lightTitle dark:text-darkTitle  text-left px-1 py-2 ${
        props?.className
      }`;
    } else if (pos === "right") {
      return `${
        props?.error
          ? "border-red-500"
          : "border-lightBorder dark:border-darkBorder"
      } text-sm bg-lightCard dark:bg-darkCard text-lightTitle dark:text-darkTitle flex gap-1   flex-grow border rounded-r-md p-[14px] block ${
        props?.className
      }`;
    } else {
      return `${
        props?.error
          ? "border-red-500"
          : "border-lightBorder dark:border-darkBorder"
      } text-sm   text-lightTitle dark:text-darkTitle  text-left px-1 py-2 ${
        props?.className
      }`;
    }
  };
  const inputAreaPosition = () => {
    if (pos === "left") {
      return "flex items-center items-center bg-green-900  ";
    } else if (pos === "right") {
      return "flex items-center flex-row-reverse bg-green  ";
    } else {
      return "flex flex-col ";
    }
  };
  const inputPosition = () => {
    if (props?.variant === "left") {
      return props?.error
        ? `w-full text-sm  disabled:bg-gray-300 rounded-r-md outline-none p-[14px] border border-red-500 ${props?.className} bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-light`
        : `w-full text-sm   disabled:bg-gray-300 bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-light rounded-r-md outline-none p-[14px] border border-lightBorder dark:border-darkBorder disabled:border-gray-300 ${props?.className}`;
    } else if (props?.variant === "right") {
      return props?.error
        ? `w-full text-sm  disabled:bg-gray-300 rounded-l-md outline-none p-[14px] border border-red-500 ${props?.className} bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-light`
        : `w-full text-sm  disabled:bg-gray-300 bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-darkTitle rounded-l-md outline-none p-[14px] border border-lightBorder dark:border-darkBorder disabled:border-gray-300 ${props?.className}`;
    } else {
      return props?.error
        ? `w-full text-sm   disabled:bg-gray-300 rounded-r-md outline-none p-[14px] border border-red-500 ${props?.className} bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-light`
        : `w-full text-sm   disabled:bg-gray-300 bg-lightCard dark:bg-darkCard   text-lightTitle dark:text-darkTitle  outline-none p-[14px] border border-lightBorder dark:border-darkBorder disabled:border-gray-300 ${props?.className}`;
    }
  };
  return {
    labelPosition: labelPosition(),
    inputAreaPosition: inputAreaPosition(),
    inputPosition: inputPosition(),
  };
};
/* Text input */
export const TextInput = (props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
    // value:props.value
  });
  const handleValidation = (e) => {
    onChange(e); // Sync value with React Hook Form
    onBlur(e);
    props.trigger(props.name); // Validate field in real-time
  };
  const { inputAreaPosition, labelPosition, inputPosition } =
    customInputFieldDesign(props, props.pos);
  return (
    <div>
      <div className={inputAreaPosition}>
        <div className={labelPosition}>
          <div className="flex items-center text-start">
            {props?.label} {props?.rules?.required ? <span className="text-red-500">*</span> : ""}
          </div>
        </div>

        <input
          onChange={handleValidation} // send value to hook form
          onBlur={handleValidation} // notify when input is touched/blur
          value={value || ""} // input value
          name={props.name} // send down the input name
          placeholder={props.placeholder}
          disabled={props.disabled}
          type={props.type || "text"}
          defaultValue={props?.defaultValue}
          min={0}
          className={inputPosition}
        />
      </div>
      {props?.error && (
        <p className="text-xs text-red-900 pl-3.5">{props?.error}</p>
      )}
    </div>
  );
};
// password input
export const PassworInput = (props) => {
  const [show, setShow] = useState(false);
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
    // value:props.value
  });
  const handleValidation = (e) => {
    onChange(e); // Sync value with React Hook Form
    onBlur(e);
    props.trigger(props.name); // Validate field in real-time
  };
  const { inputAreaPosition, labelPosition, inputPosition } =
    customInputFieldDesign(props, props.pos);
  return (
    <div>
      <div className={inputAreaPosition}>
        <div className={labelPosition}>
          <div className="flex items-center text-start">
            {props?.label} {props?.rules?.required ? <span className="text-red-500">*</span> : ""}
          </div>
        </div>

        <div className="w-full relative">
          <input
            onChange={handleValidation} // send value to hook form
            onBlur={handleValidation} // notify when input is touched/blur
            value={value} // input value
            name={props.name} // send down the input name
            placeholder={props.placeholder}
            type={show ? "text" : "password"}
            disabled={props.disabled}
            className={inputPosition}
          />
          {props?.error && (
            <p className="text-xs text-red-500 pl-3.5">{props?.error}</p>
          )}
          {show ? (
            <AiOutlineEye
              size={21}
              className="cursor-pointer absolute top-4 right-3 text-gray-500"
              onClick={() => setShow(!show)}
            />
          ) : (
            <AiOutlineEyeInvisible
              size={21}
              className="cursor-pointer absolute top-4 right-3 text-gray-500"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
      </div>

    </div>
  );
};
/* Textarea input */
export const TextAreaInput = (props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });
  const { inputAreaPosition, labelPosition, inputPosition } =
    customInputFieldDesign(props, props.pos);
  return (
    <div>
      <div className={inputAreaPosition}>
        <div className={labelPosition}>
          <div className="flex items-center text-start h-full py-[10px]">
            {props?.label} {props?.rules?.required ? "*" : ""}
          </div>
        </div>

        <textarea
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={props.name} // send down the input name
          placeholder={props.placeholder}
          disabled={props.disabled}
          rows={props.rows}
          className={inputPosition}
        />
      </div>
      {props?.error && (
        <p className="text-xs text-red-500 pl-3.5">{props?.error}</p>
      )}
    </div>
  );
};

// date picker
export const DateInput = (props) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue ? new Date(props.defaultvalue) : null,
  });
  const { inputAreaPosition, labelPosition, inputPosition } =
    customInputFieldDesign(props, props.pos);
  return (
    <div className="  w-full">
      <div className={inputAreaPosition}>
        <div className={labelPosition}>
          <div className="flex items-center text-start">
            {props?.label} {props?.rules?.required ? "*" : ""}
          </div>
        </div>

        <div className="w-full">
          <ReactDatePicker
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
            value={value} // input value
            name={props.name} // send down the input name
            ref={ref} // send input ref, so we can focus on input when error appear
            placeholderText={props.placeholder}
            selected={value ? new Date(value) : null}
            disabled={props.disabled}
            dateFormat="dd-MM-yyyy"
            className={inputPosition}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
      {props?.error && (
        <p className="text-xs text-red-500 pl-3.5">{props?.error}</p>
      )}
    </div>
  );
};

/* ------------------------ Single Select field -------------------- */

const customStyles = (error) => {
  const myStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: 50,
      fontSize: 14,
      color: "#000",
      background: "#fff",
      boxShadow: "none",
      "&:hover": { borderColor: "1px solid #fff" },
      border: error ? "1px solid red" : "1px solid #dfdfdf",
      borderRadius: 6,
    }),
  };
  return myStyles;
};

/* Single select field */
export const SingleSelect = (props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  const handleSelect = (event) => {
    onChange(event);
    props.onSelected?.(event);
  };

  console.log("value",value)


  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-100">{props.label}</p>
      )}

      <Select
        classNamePrefix="custom-select"
        onBlur={onBlur}
        value={value}
        name={props.name}
        styles={customStyles(props.error)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={props.options}
        onChange={handleSelect}
        isClearable={props.isClearable}
        defaultValue={props.defaultvalue}
        placeholder={props.placeholder}
        onMenuOpen={props.onMenuOpen ?? (() => {console.log("Menu opened");})}
      />
    </div>
  );
};
/* ------------------------ Multi Select field -------------------- */
export const MultiSelect = (props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  const handleSelect = (event) => {
    onChange(event);
    props.onSelected?.(event);
  };

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}

      <Select
        isMulti
        value={value}
        onBlur={onBlur}
        name={props.name}
        options={props.options}
        onChange={handleSelect}
        classNamePrefix={`custom-select`}
        styles={customStyles(props.error)}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        isClearable={props.isClearable}
        placeholder={props.placeholder}
        defaultValue={
          props.defaultvalue
            ? props.defaultvalue.map((item) => ({
                value: item.value,
                label: item.label,
              }))
            : null
        }
      />
    </div>
  );
};

/* ------------------------ Searchable Select field -------------------- */
export const SearchableSelect = (props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  /* Search from API */
  const searchOptions = (inputValue, callback) => {
    props.onSearch(inputValue).then((results) => {
      if (results) {
        setTimeout(() => {
          callback(results);
        }, 500);
      }
    });
  };

  const handleSelect = (event) => {
    onChange(event);
    props.onSelected?.(event);
  };

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}

      <AsyncSelect
        classNamePrefix={`custom-select`}
        cacheOptions
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={props.name} // send down the input name
        styles={customStyles(props.error)}
        onChange={handleSelect}
        loadOptions={searchOptions}
        isClearable={props.isClearable}
        defaultValue={props.defaultvalue ? { ...props.defaultvalue } : null}
        placeholder={props.placeholder}
        loadingMessage={() => "Searching ..."}
        noOptionsMessage={() => "No results found !"}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

// global image uploadd file

export const ImageUpload = (props) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: props.required ? "Image is required" : false,
      validate: (file) => {
        if (!file && props.required) return "Image is required";
        return !file || file.size < 5 * 1024 * 1024 || "File must be less than 2MB";
      },
    },
    defaultValue: props.defaultValue || null,
  });

  // const [preview, setPreview] = useState(
  //   value ? URL.createObjectURL(value) : props.defaultValue || null
  // );
  const [preview, setPreview] = useState(
  value instanceof File
    ? URL.createObjectURL(value)
    : props.defaultValue || null
);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onChange(file);
      setPreview(URL.createObjectURL(file)); // Show file preview
      props.onUpload?.(file); // Callback for additional handling
    }
  }; 
  return (
    <div className="flex flex-col space-y-2">
  
      <span className="text-sm mb-1 text-black flex gap-1">
        {props?.label}{" "}
        <span className="text-white">{props?.rules?.required ? "*" : ""}</span>
      </span>
      <div className="relative  rounded-md w-full cursor-pointer  border bg-lightCard dark:bg-darkCard border-lightBorder  dark:border-darkBorder">
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
          onBlur={onBlur}
          onChange={handleFileChange}
        />
        <div className="flex items-center space-x-2 cursor-pointer">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-12 w-12 object-cover rounded-md cursor-pointer "
            />
          ) : (
            <div className="h-12 w-12 flex items-center justify-center  rounded-md cursor-pointer bg-gray-200 dark:bg-black  ">
              {props?.imgUrl ? (
                <img
                  src={`${import.meta.env.VITE_API_SERVER}${props?.imgUrl}`}
                  alt="loading"
                  className="h-12 w-12 object-cover rounded-md cursor-pointer "
                />
              ) : (
                "📷"
              )}
            </div>
          )}
          <span className="text-gray-700 dark:text-gray-300 ">Click to upload</span>
        </div>
      </div>
      {props?.error && (
        <p className="text-xs text-red-500 pl-3.5 ">{props?.error}</p>
      )}
    </div>
  );
};