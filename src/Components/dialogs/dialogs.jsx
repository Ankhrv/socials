import React from 'react';
import { NavLink } from 'react-router-dom';
// import Myposts from './myposts/myposts';
import s2 from './dialogs.module.css';

const Dialogitem = (props) => {
    let path = '/dialogs/1' + props.id;
    return (
        <div className={s2.dialog + ' ' + s2.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s2.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1,name: 'Dima'},
        {id: 2,name: 'Andrey'},
        {id: 3,name: 'Sveta'},
        {id: 4,name: 'Sasha'},
        {id: 5,name: 'Viktor'},
        {id: 6,name: 'Valery'}
     ]

    let dialogsElements = dialogsData
     .map( dialog => <Dialogitem name={dialog.name} id={dialog.id} /> ); 
            //вместо мапа список ниже
            //   let dialogsElements = [ 
            //     <Dialogitem name={dialogsData[0].name} id={dialogsData[0].id}/>,
            //      <Dialogitem name={dialogsData[1].name} id={dialogsData[1].id}/>,
            //     <Dialogitem name={dialogsData[2].name} id={dialogsData[2].id}/>,
            //     <Dialogitem name={dialogsData[3].name} id={dialogsData[3].id}/>,
            //     <Dialogitem name={dialogsData[4].name} id={dialogsData[4].id}/>,
            //      <Dialogitem name={dialogsData[5].name} id={dialogsData[5].id}/>
            //    ];
  
 let messagesData = [
    {id: 1,message: 'How'},
    {id: 2,message: 'Are'},
    {id: 3,message: 'Yoy'},
    {id: 4,message: 'You'},
    {id: 5,message: 'You'},
    {id: 6,message: 'You'}
 ]

 let messagesElements = messagesData
     .map( message => <Message message={message.message} id={message.id} /> ); 

     //вместо мапа список ниже
//  let messagesElements = [ 
//  <Message message={messagesData[0].message}  />,
//  <Message message={messagesData[1].message}  />,
//  <Message message={messagesData[2].message}  />,
//  <Message message={messagesData[3].message}  />,
//  <Message message={messagesData[4].message}  />,
//  <Message message={messagesData[5].message}  />
//  ]

    return (
        <div className={s2.dialogs}>
            <div className={s2.dialogsitems}>
                { dialogsElements }

{/* 
                <Dialogitem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialogitem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialogitem name='Sveta' id='3' />
                <Dialogitem name='Sasha' id='4' />
                <Dialogitem name='Viktor' id='5' />
                <Dialogitem name='Valery' id='6' /> */}

                {/* <div className={s2.dialog}>
                <NavLink to='/dialogs/2'>Anderey</NavLink>
                </div>
                <div className={s2.dialog}>
                <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={s2.dialog}>
                <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s2.dialog}>
                <NavLink to='/dialogs/5'>Viktor</NavLink>
                </div>
                <div className={s2.dialog}>
                <NavLink to='/dialogs/6'>Valery</NavLink>
                </div> */}

            </div>
            <div className={s2.messages}>
                { messagesElements }
                {/* <Message message={messagesData[0].message}  />
                <Message message={messagesData[1].message}  />
                <Message message={messagesData[2].message}  />
                <Message message={messagesData[3].message}  />
                <Message message={messagesData[4].message}  />
                <Message message={messagesData[5].message}  /> */}

                {/* <div className={s2.message}>Are</div>
                <div className={s2.message}>You</div> */}
            </div>
        </div>





    )
}

export default Dialogs;