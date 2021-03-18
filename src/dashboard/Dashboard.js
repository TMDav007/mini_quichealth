import React, {useState} from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PaidIcon from "@material-ui/icons/Backup";
import ExploreIcon from "@material-ui/icons/Explore";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import PermIdentity from "@material-ui/icons/PermIdentity";
import CacheIcon from "@material-ui/icons/Cached";
import { mdiTrendingUp, mdiCurrencyUsd, mdiShieldOutline, mdiFilmstrip,mdiThumbUpOutline } from '@mdi/js';
import Icon from '@mdi/react';
//import ShieldIcon from "@material-ui/icons/";
import { mdiCurrencyNgn } from '@mdi/js';
import "./Dashboard.scss";

const sidebar = ( Icon, children, imgSrc, active) => {
    const sidebarBody= <div className= {`sidebar__w__body  ${active }`}>
                        <div className="sidebar__icon">{Icon}</div>
                        <div className="sidebar__link"> <img src ={imgSrc&& imgSrc} alt=""/>{children}</div> 
                    </div>
    const sidebarHeads = <><div className="sidebar__icon">{Icon}</div>
                            <div className="sidebar__link"> <img src ={imgSrc&& imgSrc} alt=""/>{children}</div>
                        </>
    const result =  imgSrc ? sidebarHeads : sidebarBody
    return result;
}

const cardElement = (backgroundColor,icon,cardText,cardClass,currency) => {
    return <div style={{backgroundColor: backgroundColor}} className={`card ${cardClass}`}>
                <div className="card__icon">
                    <Icon path={icon} className="c__icon" />
                </div>
                <div className="card__text">
                    <h3>{cardText}</h3>
                    <h2>  <Icon path={currency} className="c__icon__text" /><span>0.00</span></h2>
                </div>
            </div>
}

function Dashboard() {
    const hideSideStyle =  {
        gridTemplateColumns: '5% 95%',
        transition: "all 1s ease-in"
    }
    const showSideStyle =  {
        gridTemplateColumns: '20% 80%',
        transition: "all 1s ease-in"
    }
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div  style={showSidebar?hideSideStyle:showSideStyle} className="dashboard__container">
            <div className="footbar" >
                <div className= "">
                    <div className="footbar__icon l__active"><HomeIcon  className="linkIcon"/></div>
                    <div className="footbar__icon">Home</div>
                </div>
                <div className= "">
                    <div className="footbar__icon"><PaidIcon  className="linkIcon"/></div>
                    <div className="footbar__icon">Savings</div>
                </div>
                <div className= "">
                    <div className="footbar__icon"><ExploreIcon   className="linkIcon"/></div>
                    <div className="footbar__icon">lnvest</div>
                </div>
                <div className= "">
                    <div className="footbar__icon"><PermIdentity  className="linkIcon"/></div>
                    <div className="footbar__icon">Account</div>
                </div>
            </div>
            <div className="sidebar__wrapper">
                <div className="sidebar__wrapper__head">
                    {sidebar (<MenuIcon onClick={() => setShowSidebar(!showSidebar) } className="piggy__logo"/>,"","https://dashboard.piggyvest.com/static/media/piggyvest-logo.0b78a8fa.svg" )}
                </div>
                
                <div className="sidebar__wrapper__body">
                    {sidebar (<HomeIcon  className="linkIcon"/>,<span className="active">Home</span>,"" ,showSidebar? "": "link__active")}
                    {sidebar (<PaidIcon  className="linkIcon"/>,"Savings","" )}
                    {sidebar (<ExploreIcon   className="linkIcon"/>,"lnvest","" )}
                    {sidebar (<PermIdentity  className="linkIcon"/>,"Account","" )}
                </div>
                <div className="sidebar__wrapper__bottom">
                    {sidebar (<LogoutIcon  className="linkIcon"/>,"Logout","" )}
                </div>
            </div>
            <div></div>
            <div className="content__wrapper">
                <div className="content__wrapper__one">
                    <div className="cw1__left">
                        <h1>Opeyemi,</h1>
                        <h4>Hello, wash your hands🙄!</h4>
                    </div>
                    <div className="cw1__right">
                        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/default_avatar_v4.png" alt="" />
                    </div>
                </div>

                <div className="content__wrapper__two">
                    <div className="cw2__left">
                        <CacheIcon />
                    </div>
                    <div className="cw2__right">
                        <p>+ QUlCK SAVE</p>
                    </div>
                </div>
                <div className="content__wrapper__three">
                    <div className="cw3">
                        {cardElement("#0d60d8",mdiShieldOutline, "Total Saving", "",mdiCurrencyNgn)}
                        {cardElement("#7913e5",mdiTrendingUp, "Total Investments","", mdiCurrencyNgn)}
                        { cardElement("#222222",mdiCurrencyUsd, "Flex Dollar","", mdiCurrencyUsd)}
                        { cardElement("#fff",mdiFilmstrip, "Flex Naira", "card__flex", mdiCurrencyNgn)}
                    </div>
                   
                </div>
                <div className="content__wrapper__four">
                    <div className="cw4__left">
                        <h3>TO-DO LIST</h3>
                        <div className="cw4__checkList">
                            <div className="input__box"> 
                            <input type="checkbox" /><span className="checkbox__custom"></span><label >Verify your email address</label><br />
                            </div>
                            <div className="input__box"> 
                            <input type="checkbox" /><label >Add your BVN now!</label><br />
                            </div>
                            <div className="input__box"> 
                            <input type="checkbox" /><label >Tell us more about yourself</label><br />
                            </div>
                            <div style={{width: "35%"}} className="input__box"> 
                            <input type="checkbox" /><label>Securely add a debit card</label><br />
                            </div>
                            
                        </div>
                    </div>
                   
                    <div className="cw4__right">
                        <div className="cw4__1">
                             <h3>COMPLETE YOUR SETUP</h3>
                            <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/complete-setup-v3.jpg" alt="" />
                        </div>
                        <div className="cw4__2">
                             <h3>DOWNLOAD YOUR APP</h3>
                             <div className="cw4__img">
                                <img src="https://www.piggyvest.com/images/iosbadge-101-image.png" alt="" />
                                <img src="https://www.piggyvest.com/images/google-play-badge.png" alt="" />
                             </div>

                        </div>
                        <div className="cw4__3">
                             <h3>REFER & EARN 🎊</h3>
                            <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/refer--Main_dark.png" alt="" />
                        </div>
                    </div>
                </div>           
            
                <div className="content__wrapper__five">
                    <div className="cw5__left">
                        <div className="select__box">
                                <div className="sb__icon">
                                    <Icon path={mdiThumbUpOutline} className="c__icon" /> 
                                </div>
                                <div className="sb__text">
                                    <h3>See your recent activities</h3>
                                    <h2>See your most recent activities on Piggyvest </h2>
                                </div>
                            </div>
                            <div  style={{color: "#2295f2"}} className="select__box">
                                <div className="sb__icon">
                                    <Icon path={mdiThumbUpOutline}  style={{color: "#2295f2"}} className="c__icon" /> 
                                </div>
                                <div className="sb__text">
                                    <h3  style={{color: "#2295f2"}}>Create a Safelock</h3>
                                    <h2>Avoid spending temtations. Tap to create a Safelock</h2>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    <div className="cw5__right"></div>
                </div>
                <div className="content__wrapper__six">
                    <div className="cw6__left">
                    <h2>RECENT ACTIVITIES</h2>
                        <div className="select__box">
                            
                            <div className="sb__icon">
                                <img src="https://storage.googleapis.com/piggybankservice.appspot.com/statics/core-savings-icon-min.png" alt="" /> 
                            </div>
                            <div className="sb__text">
                                <h3 >Just registered</h3>
                                <h3>1day ago</h3>
                            </div>
                        </div>
                    </div>
                    <div className="cw6__right"></div>
                </div>
                <div className="content__wrapper__seven">
                <div className="cw7__left"><h2>VIEW MORE ACTIVITIES</h2></div>
                <div className="cw7__right"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
