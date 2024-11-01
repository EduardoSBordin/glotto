function ButtonMenu({ className, onClick, nameBtn, iconCode, iconName }) {
    return (
        <button className={className} onClick={onClick}>
            <span className={iconCode}> {iconName} </span>
            {nameBtn}
        </button>
    )
}
export default ButtonMenu;