function CustomButton({children,onPress}){
    return(
        <div style={{padding: 4,margin: 5,cursor: "pointer",background: 'linear-gradient(35deg, #494949,#313131)',borderRadius: 10}} onClick={onPress}>
            <h4 style={{color:'white',margin: '0 20px'}}>{children}</h4>
        </div>
    )
}

export default CustomButton;