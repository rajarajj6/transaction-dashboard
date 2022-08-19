import React, {useState} from 'react'

function Trasanctions() {
    const [Txn, setTxn] = useState([
        {
            id: 1,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: true,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 2,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: false,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 3,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: true,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 4,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: false,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 5,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: true,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 6,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: false,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 7,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: true,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 8,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: false,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 9,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: true,
            strTime: "11.00am",
            resTime: "11.05am"
        },
        {
            id: 10,
            txnId: "f54hhv5hg574",
            terminalId: "gd587g68rej",
            cardNo: 4242424242424242,
            amount: 11999,
            response: false,
            strTime: "11.00am",
            resTime: "11.05am"
        }
    ])
    return (
        <>
            <h1>Dashboard</h1>
            <div className='container transanction'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">Terminal Id</th>
                                    <th scope="col">Card No</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Response</th>
                                    <th scope="col">Initiated Time</th>
                                    <th scope="col">Received Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Txn.map((elem) => (
                                        <tr>
                                            <th scope="row">{elem.id}</th>
                                            <td>{elem.txnId}</td>
                                            <td>{elem.terminalId}</td>
                                            <td>{elem.cardNo}</td>
                                            <td>{elem.amount}</td>
                                            <td>{elem.response?(
                                                <i className='fas fa-check' style={{color:'green'}}></i>
                                            ):(
                                                <i className='fas fa-times' style={{color:'red'}}></i>
                                            )}</td>
                                            <td>{elem.strTime}</td>
                                            <td>{elem.resTime}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trasanctions