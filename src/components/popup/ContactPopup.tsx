import { useState } from "react";
import styled from "styled-components";
import { EMailList, eMailList } from "../../data/D_EMailList";
import I_gmail from "../../icon/Icon_gmail.png";
import I_naver from "../../icon/Icon_naver.png";
import { onClickCopy } from "../../utils/common";
import MessagePopup from "./MessagePopup";

const ContactPopup : Function = ({ off } : any) => {
    const [messagePopup, setMessagePopup] = useState(false);
    const phoneNumber = "+82 10-9992-9822";

    const openEmail = (address : string) => {
        window.location.href = `mailto:${address}?subject=Can I get your resume?&body=message%20goes%20here`;
        off();
    };

    const copyNumber = () => {
        onClickCopy(phoneNumber);
        setMessagePopup(true);
    };
    
    return(
        <>
        <ContactPopupBox>
            <MessagePopup off={setMessagePopup}  visible={messagePopup}/>
            <p>
                <div className="phoneNumberWrap">
                    <button className="phoneNumber" onClick={copyNumber}>{phoneNumber}</button>
                </div>
            {eMailList.map((v : EMailList, i : number) => (
                <div key={i}>
                    <button onClick={()=>{openEmail(v.address)}}>
                        <img src={v.id === "GOOGLE" ? I_gmail : I_naver} alt={v.id} title={v.address} />
                    </button>
                </div>
            ))}
            </p>
        </ContactPopupBox>
        </>
    );
};

const ContactPopupBox = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    width: 600px;
    height: 300px;
    border-radius: 20px;
    background: #FFBF3A;
    transform: translate(-50%, -50%);
    z-index: 10;

    p{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        .phoneNumberWrap{
            & > .phoneNumber{
                width: 400px;  
                height: 56px;
                border-radius: 12px;
                border: 1px solid #FFFFFF;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #FFFFFF;
                cursor: pointer;
                transition-duration: 0.3s;
            }

            &  > .phoneNumber:hover{
                transform: translateY(-2px);
            }
        }
        div{
            width: 100%;
            text-align: center;

            & > button{
                transition-duration: 0.3s;
                img{
                    width: 90px;
                }
            }

            & > button:hover{
                transform: translateY(-2px);
            }
        }
    }
`;

export default ContactPopup;