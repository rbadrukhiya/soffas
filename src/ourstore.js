import { Button } from "react-bootstrap"

function Ourstore()
{
    return(
        <>
        <div className="our-store">
            <div className="row d-flex align-items-center  ">
                <div className="col-lg-3 col-md-12">
                    <div className="our-content">
                        <span>Visit Our Store</span>
                        <p className="mt-4">office : 12 Fake Street, New York </p>
                        <p>Phone : +866.123.4567</p>
                        <p>Email : support@Sofass.COm</p>
                        <Button className="mt-4 mb-4">Read More</Button>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="our-img ">
                        <img src={require("./img/asset 16.jpeg")} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Ourstore