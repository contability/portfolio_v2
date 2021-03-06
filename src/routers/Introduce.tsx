import { useState } from "react";
import styledComponents from "styled-components";
import FilteredImage from "../components/common/FilteredImage";
import LeftNavBar from "../components/left/LeftNavBar";
import { D_skills } from "../data/D_Skills";
import furium1 from "../img/image_furium1.jpg";
import furium1_e from "../img/image_furium1_edit.jpg";
import furium2 from "../img/image_furium2.jpg";
import profile from "../img/image_profile.jpg";
import profile2 from "../img/image_profile2.jpg";

const Introduce = () => {
    const [subImg, setSubImg] : any = useState(false);
    const hoverEventHandler = (type: string) => {
        const isEnter : Boolean = type === "mouseenter" ? true: false;
        setSubImg(isEnter);
    };

    return(
        <IntroduceBox>
            <aside className="left">
                <h1>Skills</h1>
                <div className="skills">
                    {D_skills.map((v: any, i) => (
                        <p key={i} className="skill">
                            <span>{v.id}</span>
                            <span className={"blockSpan"}>
                                <input type="range" className="rangeInput" defaultValue={v.amount} max="100"/>
                            </span>
                        </p>
                    ))}
                </div>
            </aside>
            <aside className="right">
                <article className="header">
                    <div>Hello</div>
                    <div>I'm SinHyung Jung</div>
                </article>
                <article className="profile_img">
                        <img className={"mainImg"} src={profile} alt="" 
                        onMouseEnter={(e : any) => hoverEventHandler(e.type) } 
                        onMouseLeave={(e : any) => hoverEventHandler(e.type) }
                        />
                        {/* <FilteredImage targetImg={furium2}/> */}

                        {subImg && (
                            <img className="subImg" src={furium2} alt="" 
                            onMouseEnter={(e : any) => hoverEventHandler(e.type) } 
                            onMouseLeave={(e : any) => hoverEventHandler(e.type) }
                            />
                        )}
                </article>
                <article className="blahblah">
                    <div>
                        2?????? ???????????? GIS ???????????? SI/SM ????????? ?????? ?????????
                        ???????????? ???????????? ??????, ??????, ?????????, ??????, ?????????????????? ???????????? ?????? ????????? ?????? ???????????????.
                        <br /><br />
                        ?????? ?????? ??? ???????????? ???????????? ?????? ??????????????????.
                        <br /><br />
                        ?????? ?????? ???????????? ?????? ???????????? ?????? ????????? ??? ?????? ?????????????????? ????????????
                        ?????? ????????? ????????? ??? ???????????? ?????????, ???????????? ?????? ?????????
                        ???????????? ????????? ???????????? ????????? ????????? ?????? ?????????, ????????? ???????????? ???????????? ?????? ???????????? ????????? ?????????.
                    </div>
                </article>
            </aside>
        </IntroduceBox>
    );
};

const IntroduceBox = styledComponents.main`
    width: 100%;
    min-height: 100vh;
    z-index: 0;
    background: #FFF2BB;
    display: flex;

    .left{
        width: 20.971386vw;
        min-height: inherit;
        padding: 3%;
        height: 100vh;
        z-index: 1;
        background: black;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5vh;
        overflow-y: auto;

        .skills{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2vh;
            width: 100%;

            .skill{
                width: 100%;

                span{
                    .rangeInput {
                        -webkit-appearance: none;
                        width: 100%;
                        height: 4px;
                        margin: 20px 0;
                        background: linear-gradient(
                            90deg,
                            rgba(193, 227, 214, 0) 0%,
                            rgba(193, 227, 214, 0.5) 100%
                        );
                        border-radius: 8px;

                        &::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            width: 14px;
                            background: rgba(
                                235,
                                77,
                                78,
                                0
                            );

                            //????????? ????????????
                            border: 1px solid rgba(193, 227, 214, 1);
                            border-radius: 50%;
                            box-shadow: 0px 0px 6px
                            rgba(255, 83, 83, 0);
                        }
                    }
                }
                
            }
        }
    }

    .right{
        flex: 1;
        height: 100vh;
        padding: 2.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10vh;
        overflow-y: auto;
        font-family: Arial,Helvetica,sans-serif;
        

        .header{
            font-size: 4rem;
            letter-spacing: 1rem;
            font-weight: 900;
        }

        .profile_img{
            height: 58vh;
            width: 45vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            .mainImg{
                height: 58vh;
                position: relative;
                box-shadow: 9px 13px 6px #00000029;
            }

            .subImg{
                height: 38vh;
                left: -0.1vw;
                bottom: 39vh;
                position: relative;
            }
        }

        .blahblah{
            line-height: 1.9;
            width: 45vw;

            & > div{
                word-break: break-word;
                font-weight: 500;
            }
        }
    }
`;

export default Introduce;