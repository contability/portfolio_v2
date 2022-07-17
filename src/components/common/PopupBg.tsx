import styled from "styled-components";

const PopupBg : Function = ({ bg, off, blur } : any) => {
    const onClickEvent = () => {
        if(off) off();
    };

    const getOpt = () => {
        let className = "";

        if(bg) className += " bg";
        if(blur) className += " blur";

        return className;
    };

    return (
        <PopupBgBox className={getOpt()} onClick={onClickEvent}/>
    );
};

const PopupBgBox = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;

    &.bg{
        background: rgba(0, 0, 0, 0.4);
    }

    &.blur{
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(7px);
    }
`;

export default PopupBg;