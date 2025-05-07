const token = {
    bodyBg: '#f5f5f5',
    white: "#fff",
    primary: "#1379f0",
    lightBlue: '#e6f4ff',
    fontFamily: "yekanBakh",
    
}

const theme = {
    token,
    components: {
        Layout: {
            siderBg: token.white,
            bodyBg: token.white,
            headerBg: token.white,
            headerPadding:0
        },
        Alert: {
            colorInfoBg: '#f3f4f6',
            colorInfoBorder: "#ebebee",
            fontSize: 12,
            fontSizeIcon: 10
        },
        Menu: {
            subMenuItemBg: token.white,
            itemHoverBg: token.white,
            itemHoverColor: token.primary,
            itemSelectedBg: token.lightBlue,
            itemSelectedColor: token.primary,
            activeBarHeight:0,
        }
    }
}

export default theme