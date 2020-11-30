import React from 'react'
import { ErrorMessage, Formik, Form, Field} from 'formik'
import './ServiceOrder.css'

const ServiceOrder = () => {
    return(
        <>
            <div className="SO-Form">
                <Formik initialValues={{}} >
                    <Form className="ServiceOrder">
                        <Field 
                            name="client_id_number"
                            placeholder="CLIENT_ID_NUMBER"
                            className="SO-Field"
                        />
                        <Field 
                            name="equipment"
                            placeholder="EQUIPMENT"
                            className="SO-Field"
                        />
                        <Field 
                            name="description"
                            placeholder="DESCRIPTION"
                            className="SO-Field"
                        />
                        <Field 
                            name="requested_service"
                            placeholder="REQUESTED SERVICE"
                            className="SO-Field"
                        />
                        <Field 
                            name="estimated_cost"
                            placeholder="ESTIMATED COST"
                            className="SO-Field"
                        />
                        <select className="SO-Selection">
                            <option value="" disabled selected hidden>Select technician</option>
                            <option>USUARIO 01</option>
                            <option>USUARIO 02</option>
                        </select>
                        <button className="SO-Button">SAVE</button>
                    </Form>
                </Formik>
            </div>
        </>
    )    
}

export default ServiceOrder;