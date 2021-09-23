import React from 'react'
import { Card ,Col, Container, Row } from 'react-bootstrap'
const UserList = ({list}) => {

    return (
        
              list&&list.map(elm =>
            <Card style={{ width:'15rem',height:'17rem',marginTop:'2rem' ,marginRight:'2rem',border:'solid 1px black'}}>
                <Card.Body>
                    <Card.Title>{elm.name}</Card.Title>
                         <Card.Text >
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-file-person-fill" viewBox="0 0 16 16">
                                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"></path>
                                 </svg> {elm.username}</p>
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="bleu" class="bi bi-envelope" viewBox="0 0 16 16">
                                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg> {elm.email} </p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="bleu" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                 </svg> {elm.phone}</p>
                            <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                                </svg> {elm.address.city}-{elm.address.street} </p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                   <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                                </svg> {elm.company.name}</p>
                         </Card.Text>
                 </Card.Body>
            </Card>
            )
   
    )
}

export default UserList
