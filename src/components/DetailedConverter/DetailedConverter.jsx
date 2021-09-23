import React, {Fragment} from "react";
import ChangePage from "../ChangePage/ChangePage";
import ConvertForm from "./ConvertForm/ConvertForm";

const DetailedConverter = () => {
    return (
        <Fragment>
            <ConvertForm />
            <ChangePage text={'Курсы Валют'} destination={'/mainpage'} />
        </Fragment>
    )
}

export default DetailedConverter