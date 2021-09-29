import Switch from "react-switch";

export function ButtonTheme({ checked, setChecked }) {

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <label>
      <Switch 
      onChange={handleChange} 
      checked={checked}
      offColor="#134611"
      offHandleColor="#96e072"
      onColor="#333333"
      onHandleColor="#929292"
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      handleDiameter={16}
      height={20}
      width={45}
      />
    </label>
  )
}