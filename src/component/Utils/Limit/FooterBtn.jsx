import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthButton from '../../Auth/authButton/AuthButton'

export default function FooterBtn({ typeLimit, closePopUp ,handleClose}) {

    const location = useLocation();
    const navigate=useNavigate();

    return (
        <>
            {typeLimit == "default" ? (
                <div className="flex justify-between items-center w-full px-3">
                    <Link className='third-btn' to={"/dashboard/buyPlan"} state={{ background: location }}>فعالسازی 14 روز رایگان</Link>
                    <Link className='btn-style' to={"/dashboard/buyPlan"} state={{ background: location }}>اشتراک میخرم</Link>
                </div>
            ) : typeLimit == "defaultBusiness" ? (
                <div className="flex justify-between items-center w-full px-3">
                    <span className='third-btn' onClick={()=>closePopUp(false)}>حذف اطلاعات و بازگشت به حساب رایگان</span>
                    {/* <Link className='third-btn' to={"/dashboard/buyPlan"} state={{ background: location }}>حذف اطلاعات و بازگشت به حساب رایگان</Link> */}
                    <Link className='btn-style' to={"/dashboard/buyPlan"} state={{ background: location }}>اشتراک میخرم</Link>
                </div>

            ) : typeLimit == "business" ? (
                <div className="flex justify-between items-center w-full px-3">
                    <div></div>
                    <Link className='btn-style' to={"/dashboard/buyPlan"} state={{ background: location }}>اشتراک میخرم</Link>
                </div>
            ) : ""}

            {/* <div className="flex justify-between items-center w-full px-3">
                <div>
                    <AuthButton textButton={"اشتراک میخرم"} />
                </div>
                <span className="buttonText mt-5 third-btn">ok</span>
            </div> */}
        </>
    )
}