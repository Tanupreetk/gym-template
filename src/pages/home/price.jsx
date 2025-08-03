import React from "react";
const pricing = [
    {
        months: "12",
        price: "15,690",
        ppm: "1,121",
        p1: "* Only Today - FREE Amazon voucher worth $100",
        p2: "* Get FREE 2 months extension",
        p3: "* Only Today - FREE Amazon voucher worth $100"
    },
    {
        months: "12",
        price: "15,690",
        ppm: "1,121",
        p1: "* Only Today - FREE Amazon voucher worth $100",
        p2: "* Get FREE 2 months extension",
        p3: "* Only Today - FREE Amazon voucher worth $100"
    },
    {
        months: "12",
        price: "15,690",
        ppm: "1,121",
        p1: "* Only Today - FREE Amazon voucher worth $100",
        p2: "* Get FREE 2 months extension",
        p3: "* Only Today - FREE Amazon voucher worth $100"
    }
];
const Price = () => {
    return (
        <div>
            <p className="heading" id="heading-pricing">Pricing</p>
            <div className="pricing">
                {pricing.map(p => 

                   ( <div className="price-box">
                        <div className="price">
                            <div className="month">
                                <p
                                    style={{
                                        background: "linear-gradient(180deg, #F8F8F8 0%, #999 76%)",
                                        fontSize: "30px",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                    }}
                                >
                                    {p.months}
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        background: "linear-gradient(180deg, #F8F8F8 0%, #999 76%)",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    MONTHS
                                </p>
                            </div>
                            <div className="month">
                                <p
                                    style={{
                                        background: "linear-gradient(180deg, #F8F8F8 0%, #999 76%)",
                                        fontSize: "33px",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                    }}
                                >
                                    ${p.price}
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        background: "linear-gradient(180deg, #F8F8F8 0%, #999 76%)",
                                        backgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    ${p.ppm}/month
                                </p>
                            </div>
                        </div>
                        <ul className="pointers">
                            <li      
                             className="pointers-content">{p.p1}</li>
                            <li className="pointers-content">{p.p2}</li>
                            <li className="pointers-content">{p.p3}</li>
                        </ul>
                        <button id="start">START NOW</button>
                    </div>)
                )}


            </div>
        </div>
    );
};

export default Price;
