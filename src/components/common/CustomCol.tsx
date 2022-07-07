import { Col } from 'react-bootstrap'
const CustomCol = (props:any) => {
    return(
        <Col sm={12} md={6} lg={4} xl={4} xxl={3} className={"mb-4"}>
            {props.children}
        </Col>
    )
}

export default CustomCol;